// определяем размеры канваса
const width = window.innerWidth;
const height = window.innerHeight;

// получаем элемент канваса и устанавливаем его размеры
const canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;

// получаем контекст канваса
const context = canvas.getContext('2d');

// определяем конструктор объектов кругов
function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.clicked = false;
}

// определяем количество кругов
const n = 5;

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
    circles.some(
      (circle) =>
        Math.sqrt((circle.x - x) ** 2 + (circle.y - y) ** 2) <=
        circle.radius + 100
    ) || x < circles[i - 1].x
  );
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
  const endX = circles[i+1].x;
  const endY = circles[i+1].y;
  const controlX1 = startX + circles[i].radius*3.5;
  const controlY1 = startY;
  const controlX2 = endX - circles[i+1].radius*3.5;
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

// добавляем обработчик клика на каждый круг
circles.forEach((circle, index) => {
  canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const distance = Math.sqrt((mouseX - circle.x) ** 2 + (mouseY - circle.y) ** 2);
    if (distance <= circle.radius) {
      if (!circle.clicked) {
        if (index === 0 || circles[index - 1].clicked) {
          circle.clicked = true;
          circle.radius = 50
          circle.color = '#378805'
          // circle.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
          context.beginPath();
          context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
          context.fillStyle = circle.color;
          context.fill();
          context.lineWidth = 7;
          context.strokeStyle = '#26580f';
          context.stroke();
          alert(`Тут будет пример!`);
        } else {
          alert(`Вы не можете перейти к этому уровню, пока не пройдете предыдущие`);
        }
      }
      else {
          alert(`Вы уже прошли этот уровень, переходите к следующему`);
      }
    }
  });
});
