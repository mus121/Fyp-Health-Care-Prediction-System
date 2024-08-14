import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder


data = pd.read_csv('./backend/datasett0.csv')

label_encoder = LabelEncoder()
data['prognosis'] = label_encoder.fit_transform(data['prognosis'])

X = data.drop('prognosis', axis=1)
y = data['prognosis']

X_train_adj, X_test_adj, y_train_adj, y_test_adj = train_test_split(X, y, test_size=0.3, random_state=42)

rf_model_more_adj = RandomForestClassifier(
    n_estimators=30, 
    max_depth=5,     
    min_samples_split=4,  
    min_samples_leaf=2,  
    random_state=42
)
rf_model_more_adj.fit(X_train_adj, y_train_adj)

y_pred_more_adj = rf_model_more_adj.predict(X_test_adj)

accuracy_more_adj = accuracy_score(y_test_adj, y_pred_more_adj)
print(f"Adjusted Model Accuracy: {accuracy_more_adj}")
