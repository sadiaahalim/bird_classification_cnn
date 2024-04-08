from flask import Flask, render_template, request
import os
import requests

app = Flask(__name__)

# Endpoint for home page
@app.route('/')
def home():
    return render_template('index.html')

# Endpoint to handle image upload and display prediction
@app.route('/predict', methods=['POST'])
def predict():
    # Get uploaded image file
    file = request.files['file']

    # Save the file locally
    file_path = os.path.join('uploads', file.filename)
    file.save(file_path)

    # Send image to the model running in Docker container
    model_url = 'http://localhost:5001/predict'  # Assuming model is running on this URL
    files = {'file': open(file_path, 'rb')}
    response = requests.post(model_url, files=files)

    # Get prediction from response
    prediction = response.json()['prediction']

    # Render prediction template with the prediction
    return render_template('prediction.html', prediction=prediction)

if __name__ == '__main__':
    app.run(debug=True)
