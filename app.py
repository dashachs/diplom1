from flask import Flask, render_template, jsonify, request
import mul

app = Flask(__name__)

task = ['', 0, 0]

@app.route('/func', methods=['GET'])
def func():
    # Вызов функции func и получение значения task
    global task
    task = mul.generate_fraction(5)

    # Вернуть результат в формате JSON
    return jsonify(task=task[0])


@app.route('/my-endpoint', methods=['POST'])
def my_endpoint():
    value1 = request.form['input1']
    value2 = request.form['input2']

    if int(value1) == task[1] and int(value2) == task[2]:
        result = True
        print(f'value1={value1}\nvalue2={value2}\n')
    else:
        result = False
        print(f'task1[1]={task[1]},  value1={value1}\ntask1[2]={task[2]},  value2={value2}\n')

    # Выполните необходимые операции с полученными данными
    # result = value1 + value2

    # Верните данные для обработки в script.js
    return jsonify({'result': result})


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)