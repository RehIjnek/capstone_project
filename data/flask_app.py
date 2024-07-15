from flask import Flask, jsonify, request
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/prediction', methods=['GET', 'POST'])
def predict():
    # with open('trained_model.pkl', 'rb') as file:
    #     model = pickle.load(file)
    # if request.method == 'POST':
    #     print(request.form)
    
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        print('hello')
    else:
        print('error')

    return "l"


if __name__ == '__main__':
    app.run(debug=True)