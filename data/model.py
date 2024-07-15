import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

data = pd.read_json("generated1000.json")

X = data[['teamSize', 'budget', 'workload']]
y = data['completionTime']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

linreg = LinearRegression()

X_train_encoded = pd.get_dummies(X_train)
X_test_encoded = pd.get_dummies(X_test)

linreg.fit(X_train_encoded, y_train)

y_pred = linreg.predict(X_test_encoded)

r2 = r2_score(y_test, y_pred)
print("R2 Score:", r2)