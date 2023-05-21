// Импорт нового скрипта
// import './flask_axaj.js';

let n;
let lives_count; // Ваша переменная lives_count
var sizeFormSubmitted = false; // Переменная для отслеживания отправки формы
var livesFormSubmitted = false; // Переменная для отслеживания отправки формы

document.getElementById('size-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращение стандартного поведения формы

  var numberInput = document.getElementById('canvas-size-button');
  n = parseInt(numberInput.value);

  console.log(n);

  if (n >= 3 && n <= 9) {
    // Введенное число находится в требуемом диапазоне
    // Выполните вашу логику

    sizeFormSubmitted = true; // Устанавливаем флаг отправки формы

    document.getElementById('size-settings').style.display = 'none';
    document.getElementById('lives-settings').style.display = 'flex';
    var sizeText = document.querySelector('.change-text');
    sizeText.textContent = "Выберите количество жизней (количество ошибок)";

    showLivesForm();
  } else {
    // Введенное число не находится в требуемом диапазоне
    // Показать сообщение об ошибке или выполнить другие действия
  }
});

function showLivesForm() {
  document.getElementById('lives-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращение стандартного поведения формы

    var numberInput = document.getElementById('lives-count-button');
    lives_count = parseInt(numberInput.value);

    console.log(lives_count);

    if (n >= 3 && n <= 10) {
      // Введенное число находится в требуемом диапазоне
      // Выполните вашу логику

      livesFormSubmitted = true; // Устанавливаем флаг отправки формы
      continueExecution(); // Вызываем функцию для продолжения выполнения кода
      // startButton();
    } else {
      // Введенное число не находится в требуемом диапазоне
      // Показать сообщение об ошибке или выполнить другие действия
    }
  });
}

// function startButton {
//   document.getElementById('lives-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Предотвращение стандартного поведения формы
//
//     var numberInput = document.getElementById('lives-count-button');
//     lives_count = parseInt(numberInput.value);
//
//     console.log(lives_count);
//
//     if (n >= 3 && n <= 10) {
//       // Введенное число находится в требуемом диапазоне
//       // Выполните вашу логику
//
//       livesFormSubmitted = true; // Устанавливаем флаг отправки формы
//       continueExecution(); // Вызываем функцию для продолжения выполнения кода
//     } else {
//       // Введенное число не находится в требуемом диапазоне
//       // Показать сообщение об ошибке или выполнить другие действия
//     }
//     // if (n >= 3 && n <= 9) {
//     //   // Введенное число находится в требуемом диапазоне
//     //   // Выполните вашу логику
//     // } else {
//     //   // Введенное число не находится в требуемом диапазоне
//     //   // Показать сообщение об ошибке или выполнить другие действия
//     // }
//   });
// }

function continueExecution() {
  if (!sizeFormSubmitted || !livesFormSubmitted) {
    alert('Something Wrong');
    return;
  }

  document.getElementById('settings').style.display = 'none';
  document.getElementById('game').style.display = 'block';

// определяем размеры канваса
  const width = window.innerWidth;
  const height = window.innerHeight;

// получаем элемент канваса и устанавливаем его размеры
  const canvas = document.getElementById('canvas');
  const popupWindow = document.getElementById('popup-window');
  canvas.width = width;
  canvas.height = height;

  var imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = ''; // Очищаем контейнер изображений

  for (var i = 0; i < lives_count; i++) {
    var img = document.createElement('img');
    img.src = '/static/src/images/rose.png';
    img.alt = 'Rose';
    imageContainer.appendChild(img);
  }


// получаем контекст канваса
  const context = canvas.getContext('2d');

// определяем конструктор объектов кругов
  function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.clicked = false;
    this.correct = false;
    this.new = true;
  }

// определяем количество кругов
// const n = 5;
  let finished_counter = n;

// определяем массив объектов, представляющих круги
  const circles = [];
// circles.push(new Circle(100, 100, 40, `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`));
  circles.push(new Circle(100, 100, 40, '#a08679'));
  for (let i = 1; i < n - 1; i++) {
    let x, y;
    do {
      x = Math.floor(Math.random() * (width - 200)) + 100;
      if (x - circles[i - 1].x >= (width - 100) / n * 2) {
        x /= ((width - 100) / n) + 10;
      }
      if (x <= circles[i - 1].x + 30) {
        x += 30;
      }
      y = Math.floor(Math.random() * (height - 200)) + 100;
    } while (
        circles.some((circle) => Math.sqrt((circle.x - x) ** 2 + (circle.y - y) ** 2) <= circle.radius + 100) || x < circles[i - 1].x);
    circles.push(
        new Circle(
            x,
            y,
            40,
            '#a08679'
            // `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        )
    );
  }
  circles.push(
      new Circle(
          width - 100,
          height - 100,
          40,
          '#a08679'
          // `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
      )
  );

// соединяем центры кругов кривыми
  context.beginPath();
  context.moveTo(circles[0].x, circles[0].y);
  for (let i = 0; i < circles.length - 1; i++) {
    const startX = circles[i].x;
    const startY = circles[i].y;
    const endX = circles[i + 1].x;
    const endY = circles[i + 1].y;
    const controlX1 = startX + circles[i].radius * 3.5;
    const controlY1 = startY;
    const controlX2 = endX - circles[i + 1].radius * 3.5;
    const controlY2 = endY;
    context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
  }
  context.strokeStyle = '#6b3f23';
  context.lineWidth = 30;
  context.lineCap = 'round';
  context.stroke();
  context.lineWidth = 23;
  context.strokeStyle = '#e9ccb1';
  context.stroke();

// рисуем круги
  circles.forEach(circle => {
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    context.fillStyle = circle.color;
    context.fill();
    context.lineWidth = 7;
    context.strokeStyle = '#4c3228';
    context.stroke();
  });

// ===============================================================
// ===============================================================
// ===============================================================

  const livescountElement = document.getElementById('lives');
// livescountElement.textContent = "Жизней осталось:"+lives_count;
// Получаем ссылки на все изображения
  var images = document.querySelectorAll('.image-container img');

// добавляем обработчик клика на каждый круг
  circles.forEach((circle, index) => {
    canvas.addEventListener('click', function (event) {
      const rect = canvas.getBoundingClientRect();
      const canvasWidth = rect.width;
      const canvasHeight = rect.height;
      const mouseX = (event.clientX - rect.left) * (width / canvasWidth);
      const mouseY = (event.clientY - rect.top) * (height / canvasHeight);
      const distance = Math.sqrt((mouseX - circle.x) ** 2 + (mouseY - circle.y) ** 2);
      if (distance <= circle.radius) {
        var new_game = true;
        for (var i = 0; i < circles.length; i++) {
          if (circles[i].clicked) {
            new_game = false;
            break;
          }
        }
        if (!circle.clicked || (circle.clicked && !circle.correct)) {
          if (index === 0 || circles[index - 1].correct) {
            $.ajax({
              url: '/func',
              type: 'GET',
              dataType: 'json',
              success: function (response) {
                popupWindow.style.display = 'block';
                document.getElementById('popup-window-text').innerHTML = response.task;
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, "popup-window-text"]);

                // ТАЙМЕР
                let remainingTime = 15; // Начальное значение времени в секундах
                const countdownElement = document.getElementById('countdown');
                countdownElement.textContent = remainingTime;

                const countdownInterval = setInterval(() => {
                  remainingTime--;
                  countdownElement.textContent = remainingTime;

                  if (remainingTime <= 0) {
                    clearInterval(countdownInterval);
                    circle.clicked = true;
                    circle.correct = false;
                    if (circle.new) {
                      circle.radius = 45;
                      circle.color = '#883705';
                      circle.new = false;
                      context.beginPath();
                      context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
                      context.fillStyle = circle.color;
                      context.fill();
                      context.lineWidth = 7;
                      context.strokeStyle = '#58260f';
                      context.stroke();
                    }
                    lives_count--;
                    // livescountElement.textContent = "Жизней осталось: " + lives_count;
                    // Проходимся по каждому изображению и меняем его ссылку
                    for (var i = 0; i < images.length - lives_count; i++) {
                      images[i].src = "/static/src/images/dead_rose.png";
                    }
                    popupWindow.style.display = 'none'; // Закрыть окно
                  }
                }, 1000); // Интервал вызова функции каждую секунду


                // Обработчик клика на кнопку "Проверить"
                document.getElementById('submit-button').addEventListener('click', function () {
                  event.preventDefault(); // Предотвращение стандартного поведения формы

                  var value1 = $('#input1').val();
                  var value2 = $('#input2').val();

                  $.ajax({
                    url: '/my-endpoint',
                    type: 'POST',
                    async: false,
                    data: {
                      'input1': value1, // Используйте 'input1' вместо 'value1'
                      'input2': value2, // Используйте 'input2' вместо 'value2'
                    },
                    success: function (response) {
                      // Обработка успешного ответа от сервера
                      console.log(response);
                      if (response.result === false) {
                        clearInterval(countdownInterval); // Очищаем интервал обратного отсчета
                        if (!circle.clicked) {
                          circle.radius = 45;
                          circle.clicked = true;
                          circle.correct = false;
                          circle.new = false;
                          circle.color = '#883705';
                          context.beginPath();
                          context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
                          context.fillStyle = circle.color;
                          context.fill();
                          context.lineWidth = 7;
                          context.strokeStyle = '#58260f';
                          context.stroke();
                        }
                        if (circle.new || new_game) {
                          lives_count--;
                        }
                        // livescountElement.textContent = "Жизней осталось: " + lives_count;

                        // Проходимся по каждому изображению и меняем его ссылку
                        for (var i = 0; i < images.length - lives_count; i++) {
                          images[i].src = "/static/src/images/dead_rose.png";
                        }
                      } else {
                        clearInterval(countdownInterval); // Очищаем интервал обратного отсчета
                        circle.clicked = true;
                        circle.correct = true;
                        circle.radius = 50;
                        circle.color = '#378805';
                        context.beginPath();
                        context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
                        context.fillStyle = circle.color;
                        context.fill();
                        context.lineWidth = 7;
                        context.strokeStyle = '#26580f';
                        context.stroke();
                        finished_counter--;
                      }
                      popupWindow.style.display = 'none'; // Закрыть окно
                    },
                    error: function (error) {
                      // Обработка ошибки AJAX запроса
                      console.log(error);
                    }
                  });
                  popupWindow.style.display = 'none'; // Закрыть окно
                });
                document.getElementById("fraction-form").reset();

              },
              error: function (error) {
                console.log(error);
              }
            });
          } else {
            alert('Вы не можете перейти к этому уровню, пока не пройдете предыдущие');
          }
        } else {
          alert('Вы уже прошли этот уровень, переходите к следующему');
        }
      }
    });
  });
}

// ===============================================================
// ===============================================================
// ===============================================================


document.addEventListener('click', function(event) {
  const rect = canvas.getBoundingClientRect();
  const canvasWidth = rect.width;
  const canvasHeight = rect.height;
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  if (mouseX < 0 || mouseX > canvasWidth || mouseY < 0 || mouseY > canvasHeight) {
    popupWindow.style.display = 'none';
  }
});