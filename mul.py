import math
import random
from functools import reduce


def generate_fraction(n):
    numbers = [random.randint(3, 10) for _ in range(n)]  # генерируем список чисел от 5 до 25

    numerator = numbers.copy()  # копируем список чисел в числитель
    denominator = numbers.copy()  # копируем список чисел в знаменатель

    powers_numerator = [random.randint(6, 26) for _ in
                        range(len(numerator))]  # генерируем случайные степени для каждого числа в числителе
    powers_denominator = [random.choice([power, power, power - 1, power + 1, power, power - 2]) for power in
                          powers_numerator]  # генерируем случайные степени для каждого числа в знаменателе, такие что отличаются от степеней в числителе не более чем на 2

    # # Check if powers_numerator and powers_denominator are the same
    # while powers_numerator == powers_denominator:
    #     i, j = random.sample(range(n), 2)
    #     powers_denominator[i] -= 1
    #     powers_denominator[j] -= 2

    # Check if powers_numerator and powers_denominator are the same
    while powers_numerator == powers_denominator:
        if random.randint(0, 2) == 0:
            i, j = random.sample(range(n), 2)
            powers_denominator[i] += 1
            powers_numerator[j] -= 1
        else:
            i, j = random.sample(range(n), 2)
            powers_denominator[i] -= 1
            powers_numerator[j] += 1

    numerator_str = ' \cdot '.join(f"{num}^{{{power}}}" for num, power in zip(numbers, powers_numerator))
    denominator_str = ' \cdot '.join(f"{num}^{{{power}}}" for num, power in zip(denominator, powers_denominator))

    # numerator = [num ** power for num, power in zip(numerator, powers_numerator)]  # возводим каждое число в числителе в соответствующую степень
    # denominator = [num ** power for num, power in zip(denominator, powers_denominator)]  # возводим каждое число в знаменателе в соответствующую степень

    new_powers_numerator = [max(0, powers_numerator[k] - powers_denominator[k]) for k in range(len(numerator))]
    new_powers_denominator = [max(0, powers_denominator[k] - powers_numerator[k]) for k in range(len(denominator))]

    new_numerator_str = ' * '.join(f"{num}^{power}" for num, power in zip(numbers, new_powers_numerator))
    new_denominator_str = ' * '.join(f"{num}^{power}" for num, power in zip(denominator, new_powers_denominator))

    numerator = [num ** power for num, power in
                 zip(numerator, new_powers_numerator)]  # возводим каждое число в числителе в соответствующую степень
    denominator = [num ** power for num, power in zip(denominator,
                                                      new_powers_denominator)]  # возводим каждое число в знаменателе в соответствующую степень

    result_numerator = reduce((lambda x, y: x * y), numerator)
    result_denominator = reduce((lambda x, y: x * y), denominator)

    gcd = math.gcd(result_numerator, result_denominator)
    final_numerator = result_numerator // gcd
    final_denominator = result_denominator // gcd

    # fraction = f"({numerator_str})/({denominator_str})"
    # fraction_result = sum(numerator) / sum(denominator)

    fraction_with_result_print = f"{numerator_str}{' ' * (max(len(denominator_str) - len(numerator_str), 0) + 3)}{result_numerator}\n{'_' * max(len(numerator_str), len(denominator_str))} = ___\n{denominator_str}{' ' * (max(len(numerator_str) - len(denominator_str), 0) + 3)}{result_denominator}"
    fraction_print = f"\\(\\frac{{{numerator_str}}}{{{denominator_str}}}=\\)"
    actual_fraction_print = f"{new_numerator_str}{' ' * (max(len(new_denominator_str) - len(new_numerator_str), 0) + 3)}{final_numerator}\n{'_' * max(len(new_numerator_str), len(new_denominator_str))} = ___\n{new_denominator_str}{' ' * (max(len(new_numerator_str) - len(new_denominator_str), 0) + 3)}{final_denominator}"

    # print(fraction_print)
    # print()
    print(actual_fraction_print)
    print()
    return [fraction_print, final_numerator, final_denominator]
    # print("___________________________")


# def mul_n(n=5):
#     # количество чисел в числителе и знаменателе
#     for i in range(5):
#         print(f"Задача {i + 1}:")
#         generate_fraction(n)
