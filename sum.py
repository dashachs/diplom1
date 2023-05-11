import random

# Генерация случайного выражения
def generate_expression(n):
    if n == 1:
        return str(random.randint(5, 50))
    else:
        a = random.randint(1, n-1)
        b = n - a
        return "(" + generate_expression(a) + " + " + generate_expression(b) + ")"

# Генерация случайной задачи
def generate_problem():
    n = random.randint(3, 10)
    expression = generate_expression(n)
    answer = eval(expression)
    return (expression, answer)

# Генерация и вывод 10 случайных задач
for i in range(10):
    problem = generate_problem()
    print("Задача", i+1, ":", problem[0], "=", problem[1])
