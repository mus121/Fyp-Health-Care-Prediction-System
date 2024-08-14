from flask import Flask, request, jsonify, redirect, url_for, session
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])
app.secret_key = "your_secret_key"  # Set a secret key for session management

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['HeathCare']
user_collection = db['User_Auth']
disease_precautions = db['disease']


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
    user_collection.insert_one({'firstname': firstname, 'lastname': lastname,
                               'username': username, 'password': hashed_password})
    return jsonify({'message': 'Signup successful'}), 201


# @app.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     username = data.get('username')
#     password = data.get('password')

#     user = user_collection.find_one({'username': username})
#     if user and check_password_hash(user['password'], password):
#         session['username'] = username
#         return jsonify({'message': 'Login successful'}), 200
#     else:
#         return jsonify({'error': 'Invalid email or password'}), 401


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = user_collection.find_one({'username': username})
    if user and check_password_hash(user['password'], password):
        session['username'] = username
        # Fetch user's previous diagnoses
        diagnoses = list(db['diagones'].find({'username': username}, {'_id': 0}))
        return jsonify({'message': 'Login successful', 'diagones': diagnoses}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401


if __name__ == '__main__':
    app.run(debug=True, port=5000)
