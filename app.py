from flask import Flask, render_template, jsonify
import mul

app = Flask(__name__)

@app.route('/func', methods=['GET'])
def func():
    # Вызов функции func и получение значения task
    task = mul.generate_fraction(5)

    # Вернуть результат в формате JSON
    return jsonify(task=task)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)