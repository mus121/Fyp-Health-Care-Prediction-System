from pymongo import MongoClient

# Connect to the MongoDB server
client = MongoClient('mongodb://localhost:27017/')

db = client.HeathCare


collection = db.diagones

# Example document
documents = [
    {
        "username": "mustafa@gmail.com",
        "disease": "Influenza",
        "precautions": [
            "Avoid close contact with sick people.",
            "Keep warm and avoid sudden temperature changes.",
            "Maintain good indoor air quality; use humidifiers if necessary."
        ]
    },
    {
      "username": "iqra@gmail.com",
        "disease": "Stroke",
        "precautions": [
            "Stay hydrated and avoid overexertion in extreme heat.",
            "Keep warm to maintain circulation.",
            "Monitor blood pressure more frequently."
        ]
    },
    {
         "username": "daniyal@gmail.com",
        "disease": "Migraine",
        "precautions": [
            "Stay hydrated, especially in hot and humid conditions.",
            "Avoid bright sunlight or wear sunglasses in bright weather.",
            "Be aware of the barometric pressure change."
        ]
    },
    {
         "username": "ibrahim@gmail.com",
        "disease": "Heart Attack",
        "precautions": [
            "Avoid strenuous activities.",
            "Keep hydrated in hot weather and dress warmly in cold weather.",
            "Monitor heart health regularly, especially during temperature fluctuations."
        ]
    },
    {
         "username": "alishan@gmail.com",
        "disease": "Sinusitis",
        "precautions": [
            "Keep nasal passages moist in dry weather using saline sprays.",
            "Avoid allergens during high pollen counts or windy days.",
            "Stay warm and dry in cold and damp weather to prevent sinus infections."
        ]
    },
    {
         "username": "ayeza@gmail.com",
        "disease": "Eczema",
        "precautions": [
            "Keep skin moisturized.",
            "Avoid sudden temperature changes.",
            "Wear loose, breathable clothing to prevent sweating and irritation."
        ]
    },
    {
         "username": "wajeeha@gmail.com",
        "disease": "Heat Stroke",
        "precautions": [
            "Stay hydrated and avoid intense physical activity during peak heat hours.",
            "Wear light, loose-fitting clothing and a hat in hot weather.",
            "Seek shade and air-conditioned environments during extreme heat."
        ]
    },
    {
         "username": "isma@gmail.com",
        "disease": "Malaria",
        "precautions": [
            "Use mosquito repellent and bed nets in humid and wet climates.",
            "Avoid outdoor activities during dusk and dawn.",
            "Wear long sleeves and pants in areas with high mosquito activity."
        ]
    },
    {
         "username": "zeeshan@gmail.com",
        "disease": "Arthritis",
        "precautions": [
            "Avoid exposure to cold and damp conditions.",
            "Wear layers and protect joints from cold weather.",
            "Stay active to maintain joint flexibility."
        ]
    },
    {
         "username": "areeb@gmail.com",
        "disease": "Dengue",
        "precautions": [
            "Use mosquito repellent and wear protective clothing in hot, humid conditions.",
            "Eliminate standing water where mosquitoes breed.",
            "Stay indoors during peak mosquito activity times."
        ]
    },
    {
         "username": "amush@gmail.com",
        "disease": "Common Cold",
        "precautions": [
            "Stay warm and avoid sudden temperature changes.",
            "Keep hydrated, especially in dry or cold weather.",
            "Maintain good indoor air quality and avoid dry environments."
        ]
    }
]
# Insert the document into the collection
collection.insert_many(documents)

print("Document inserted successfully.")
