from flask import Flask, request, jsonify, session
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder, StandardScaler
import numpy as np
import bcrypt

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'], supports_credentials=True)
app.secret_key = "your_secret_key"  # Set a secret key for session management
app.permanent_session_lifetime = timedelta(
    days=1)  # Set session lifetime to 1 day

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['HeathCare']
user_collection = db['User_Auth']
health_data_collection = db['User_Health_Data']
disease_precautions = db['disease_precautions']

# Load the trained model using joblib
model_path = 'C://Users//asus//Desktop//practise1//random_forest_model.pkl'
model = joblib.load(model_path)

# Load the scaler using joblib
scaler_path = 'C://Users//asus//Desktop//practise1//scaler_recreated.pkl'
scaler = joblib.load(scaler_path)

# Load the label encoder
encoder_path = 'C://Users//asus//Desktop//practise1//label_encoder.pkl'
label_encoder = joblib.load(encoder_path)


def preprocess_data(data):
    # Convert to DataFrame
    input_df = pd.DataFrame([data])

    # Ensure all columns that the model expects are present
    model_columns = ['Age', 'Gender', 'Temperature (C)', 'Humidity', 'Wind Speed (km/h)', 'nausea', 'joint_pain',
                     'abdominal_pain', 'high_fever', 'chills', 'fatigue', 'runny_nose', 'pain_behind_the_eyes',
                     'dizziness', 'headache', 'chest_pain', 'vomiting', 'cough', 'shivering', 'asthma_history',
                     'high_cholesterol', 'diabetes', 'obesity', 'hiv_aids', 'nasal_polyps', 'asthma',
                     'high_blood_pressure', 'severe_headache', 'weakness', 'trouble_seeing', 'fever', 'body_aches',
                     'sore_throat', 'sneezing', 'diarrhea', 'rapid_breathing', 'rapid_heart_rate', 'pain_behind_eyes',
                     'swollen_glands', 'rashes', 'sinus_headache', 'facial_pain', 'shortness_of_breath',
                     'reduced_smell_and_taste', 'skin_irritation', 'itchiness', 'throbbing_headache', 'confusion',
                     'back_pain', 'knee_ache']

    for col in model_columns:
        if col not in input_df.columns:
            input_df[col] = 0

    input_df = input_df.replace('', np.nan)
    input_df = input_df.fillna(0)

    scaled_data = scaler.transform(input_df[model_columns])

    return scaled_data[0]


@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    firstname = data.get('firstname')
    lastname = data.get('lastname')
    username = data.get('username')
    password = data.get('password')

    if not (firstname and lastname and username and password):
        return jsonify({'error': 'All fields are required'}), 400

    if user_collection.find_one({'username': username}):
        return jsonify({'error': 'Username already exists'}), 400

    hashed_password = generate_password_hash(password)
    user_collection.insert_one({
        'firstname': firstname,
        'lastname': lastname,
        'username': username,
        'password': hashed_password
    })
    return jsonify({'message': 'Signup successful'}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = user_collection.find_one({'username': username})
    if user and check_password_hash(user['password'], password):
        session.clear()  # Clear existing session data
        session['username'] = username
        session.modified = True  # Set session as modified to force save
        print(f"User {username} logged in. Session data: {session}")
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401


@app.route('/submit', methods=['POST'])
def submit_data():
    try:
        print("Session data:", session)
        if 'username' not in session:
            print("Unauthorized access attempt. Session data:", session)
            return jsonify({'error': 'Unauthorized access'}), 401

        data = request.json
        user_data = preprocess_data(data)

        # prediction
        prediction = model.predict([user_data])
        predicted_label = prediction[0]
        predicted_disease = label_encoder.inverse_transform([predicted_label])[
            0]

        # Retrieve precautions for the predicted disease from MongoDB
        precautions_docs = list(disease_precautions.find(
            {'disease': predicted_disease}))
        precautions = []

        for doc in precautions_docs:
            precautions.extend(doc.get('precautions', []))
        if not precautions:
            precautions = ["No specific precautions available"]

        # Combine data with the prediction and precautions
        data_with_prediction = {
            **data,
            'username': session['username'],
            'predicted_disease': predicted_disease,
            'precautions': precautions,
            'timestamp': datetime.utcnow()
        }

        # Save to MongoDB
        result = health_data_collection.insert_one(data_with_prediction)

        response = {
            'id': str(result.inserted_id),
            'message': 'Data submitted successfully',
            'predicted_disease': predicted_disease,
            'precautions': precautions
        }
        return jsonify(response), 201

    except Exception as e:
        print(e)
        response = {'error': 'Internal Server Error'}
        return jsonify(response), 500

@app.route('/profile', methods=['GET', 'PUT'])
def profile():
    if 'username' not in session:
        return jsonify({'error': 'Unauthorized access'}), 401

    username = session['username']

    # Fetch user data excluding sensitive fields (password)
    user = user_collection.find_one({'username': username}, {'_id': 0, 'password': 0})
    if not user:
        return jsonify({'error': 'User not found'}), 404

    if request.method == 'GET':
        return jsonify(user), 200

    if request.method == 'PUT':
        # Validate request data (replace with your validation logic)
        if not request.is_json:
            return jsonify({'error': 'Invalid request format - Must be JSON'}), 400
        data = request.get_json()
        if 'username' in data or 'password' not in data:
            return jsonify({'error': 'Username or new password cannot be updated through this endpoint'}), 400

        # Validate current password before updating (replace with your backend logic)
        if not validate_current_password(username, data['password']):
            return jsonify({'error': 'Invalid current password'}), 401

        update_fields = {key: data[key] for key in data if key in ['firstname', 'lastname']}
        user_collection.update_one({'username': username}, {'$set': update_fields})

        return jsonify({'message': 'Profile updated successfully'}), 200

def validate_current_password(username, current_password):
   
    stored_password = user_collection.find_one({'username': username})['password']  # Replace with actual password retrieval
    return bcrypt.checkpw(current_password.encode('utf-8'), stored_password.encode('utf-8'))  # Example using bcrypt (replace with your hashing library)

@app.route('/history', methods=['GET'])
def history():
    if 'username' not in session:
        return jsonify({'error': 'Unauthorized access'}), 401

    username = session['username']
    history = list(health_data_collection.find(
        {'username': username}, {'_id': 0}))
    return jsonify(history), 200


if __name__ == '__main__':
    app.run(debug=True, port=5001)
