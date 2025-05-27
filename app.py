from flask import Flask, render_template, request, url_for
import numpy as np
import pickle as pkl


app = Flask(__name__)
model = pkl.load(open('prediction_model.pickle', 'rb'))

@app.route("/")
def home(): 
    return render_template('home.html')

@app.route("/predict_page")
def predict_page(): 
    return render_template('predict.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/symptoms')
def symptoms():
    return render_template('symptoms.html')

@app.route('/diagnosis')
def diagnosis():
    return render_template('diagnosis.html')

@app.route('/predict', methods=['POST'])
def predict():
    form_values = request.form.to_dict()
    features = ["age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach", "exang", "oldpeak", "slope", "ca", "thal"]
    final_array = np.array([float(form_values[feature]) for feature in features]).reshape(1, -1)
    
    predict = model.predict(final_array)
    output = int(predict[0])
    
    if output == 0:
        return render_template('predict.html', prediction_text = 'The patient is unlikely to have heart disease.')
    elif output == 1:
        return render_template('predict.html', prediction_text = 'The patient likely has a mild risk of heart disease.')
    elif output == 2:
        return render_template('predict.html', prediction_text = 'The patient presents with a moderate risk of heart disease.')
    elif output == 3:
        return render_template('predict.html', prediction_text = 'The patient presents with a high risk of heart disease.')
    elif output == 4:
        return render_template('predict.html', prediction_text = 'The patient presents with a very high risk of heart disease.')
    
        
    
if __name__ == '__main__': 
    app.run(debug=True, port=20102005)