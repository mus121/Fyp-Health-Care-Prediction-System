from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime
import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder, StandardScaler
import numpy as np
from flask import Flask, request, jsonify, redirect, url_for, session
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__)
CORS(app, resources={r"/submit": {"origins": "http://localhost:3000"}})

# Load the trained model using joblib
model_path = 'C://Users//asus//Desktop//practise1//random_forest_model.pkl'
with open(model_path, 'rb') as model_file:
    model = joblib.load(model_file)

# Load the scaler using joblib
scaler_path = 'C://Users//asus//Desktop//practise1//scaler_recreated.pkl'
with open(scaler_path, 'rb') as scaler_file:
    scaler = joblib.load(scaler_file)

# Load the label encoder
encoder_path = 'C://Users//asus//Desktop//practise1//label_encoder.pkl'
with open(encoder_path, 'rb') as encoder_file:
    label_encoder = joblib.load(encoder_file)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['HeathCare']
user_collection = db['User_Auth']
collection = db['disease_precautions']


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


@app.route('/submit', methods=['POST'])
def submit_data():
    try:
        data = request.json

       
        user_data = preprocess_data(data)

        # prediction
        prediction = model.predict([user_data])
        predicted_label = prediction[0]
        predicted_disease = label_encoder.inverse_transform([predicted_label])[0]

        # Retrieve precautions for the predicted disease from MongoDB
        precautions_docs = list(collection.find(
            {'disease': predicted_disease}))
        precautions = []

        for doc in precautions_docs:
            precautions.extend(doc.get('precautions', []))
            if not precautions:
                precautions = ["No specific precautions available"]

        # Combine data with the prediction and precautions
        data_with_prediction = {
            **data,
            'predicted_disease': predicted_disease,
            'precautions': precautions,
            'timestamp': datetime.utcnow()
        }

        # Save to MongoDB
        result = user_collection.insert_one(data_with_prediction)

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

    
if __name__ == '__main__':
    app.run(debug=True, port=5001)
    
   

@app.route('/get_diagnoses', methods=['GET'])
def get_diagnoses():
    if 'username' not in session:
        return jsonify({'error': 'Unauthorized access'}), 401
    username = session['username']
    diagnoses_collection = db['Diagnoses']
    diagnoses = list(diagnoses_collection.find({'username': username}, {'_id': 0}))
    return jsonify(diagnoses)
