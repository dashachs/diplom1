let levels;
let lives; // Переменная для хранения оставшихся жизней
var sizeFormSubmitted = false; // Переменная для отслеживания отправки формы
var livesFormSubmitted = false; // Переменная для отслеживания отправки формы
// let finished_counter;

lives_count = new Proxy({}, {
    set: function(target, property, value) {
        // do something
        console.log("lives_count.watch value changed /from " + target[property] + " to " + value);
        target[property] = value;
        if (value === 0) {
          console.log("RIP");
          // Вызов функции для запуска выстрела конфетти
          bodyElement = document.body;
          bodyElement.style.transition = 'background-image 3s ease-in-out';
          bodyElement.style.backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1404%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='url(%23SvgjsLinearGradient1405)'%3e%3c/rect%3e%3cpath d='M498.5290260749135 824.2998196990454L238.89838466077208 801.5850818713437 216.18364683307044 1061.2157232854852 475.81428824721183 1083.9304611131868z' fill='rgba(83%2c 117%2c 67%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1681.9%2c411.732C1753.954%2c411.411%2c1832.341%2c394.648%2c1866.905%2c331.424C1900.556%2c269.871%2c1870.961%2c196.227%2c1831.378%2c138.31C1797.428%2c88.635%2c1741.9%2c65.216%2c1681.9%2c60.725C1610.352%2c55.37%2c1528.632%2c53.541%2c1487.891%2c112.6C1443.144%2c177.466%2c1451.135%2c266.972%2c1494.015%2c333.087C1533.611%2c394.139%2c1609.133%2c412.056%2c1681.9%2c411.732' fill='rgba(83%2c 117%2c 67%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M981.789%2c417.136C1065.259%2c419.401%2c1133.455%2c356.049%2c1172.744%2c282.369C1209.599%2c213.253%2c1208.7%2c131.55%2c1170.556%2c63.137C1131.333%2c-7.21%2c1062.31%2c-61.98%2c981.789%2c-60.115C903.797%2c-58.309%2c843.716%2c2.402%2c807.583%2c71.543C774.334%2c135.164%2c775.665%2c208.371%2c807.977%2c272.472C844.343%2c344.616%2c901.028%2c414.945%2c981.789%2c417.136' fill='rgba(83%2c 117%2c 67%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M368.7160484966536 790.9342965443637L160.7930143671886 953.3815745293805 323.2402923522053 1161.3046086588456 531.1633264816703 998.8573306738288z' fill='rgba(83%2c 117%2c 67%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1825.643%2c1016.292C1865.556%2c1017.68%2c1903.508%2c996.797%2c1923.476%2c962.21C1943.443%2c927.624%2c1943.112%2c883.959%2c1921.388%2c850.448C1901.285%2c819.438%2c1862.59%2c810.494%2c1825.643%2c811.293C1790.369%2c812.056%2c1754.967%2c824.188%2c1736.812%2c854.44C1718.175%2c885.495%2c1721.499%2c924.043%2c1738.925%2c955.793C1757.1%2c988.909%2c1787.89%2c1014.979%2c1825.643%2c1016.292' fill='rgba(83%2c 117%2c 67%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M678.2829005214419 441.93209956494354L868.0938183962787 304.0263954491416 730.1881142804768 114.21547757430471 540.37719640564 252.12118169010668z' fill='rgba(83%2c 117%2c 67%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M483.4787798292184-16.47362510654722L247.84094787686325-28.822880594240555 471.1295243415251 219.16420684580794z' fill='rgba(83%2c 117%2c 67%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M742.556%2c485.527C771.732%2c484.533%2c789.092%2c456.876%2c804.211%2c431.903C820.167%2c405.548%2c839.76%2c375.723%2c825.6%2c348.361C810.764%2c319.692%2c774.749%2c310.388%2c742.556%2c312.759C714.306%2c314.839%2c692.166%2c334.508%2c678.3%2c359.208C664.777%2c383.299%2c660.642%2c411.744%2c673.168%2c436.368C686.943%2c463.447%2c712.193%2c486.562%2c742.556%2c485.527' fill='rgba(83%2c 117%2c 67%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1827.7773416690125 640.8552948011147L1630.9484716259733 671.8376664607456 1738.1831061200003 809.0917395626586z' fill='rgba(83%2c 117%2c 67%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1404'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='10.94%25' y1='-19.44%25' x2='89.06%25' y2='119.44%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1405'%3e%3cstop stop-color='rgba(141%2c 169%2c 125%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(125%2c 157%2c 106%2c 1)' offset='0.18'%3e%3c/stop%3e%3cstop stop-color='rgba(137%2c 164%2c 97%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e\")";
        //   startConfetti();

          canvasElement = document.getElementById('canvas');
          canvasElement.style.transition = 'background-image 3s ease-in-out';
          canvasElement.style.backgroundImage = "url(\"/static/src/images/desat-bg.jpg\")";

          document.getElementById('image-container').style.display = "none";

          // Очистка канваса
          var context = canvasElement.getContext('2d');
          context.clearRect(0, 0, canvasElement.width, canvasElement.height);

          setTimeout(function() {
          let finishElement = document.getElementById('game-over')
          finishElement.style.animation = 'fadeIn 3s forwards';
          document.getElementById('game-over').style.display = "flex";
          }, 1500); // Задержка в 5 секунд перед скрытием элемента
          retryGame();
        }
    }
})


finished_counter = new Proxy({}, {
    set: function(target, property, value) {
        // do something
        console.log("finished_counter.watch value changed /from " + target[property] + " to " + value);
        target[property] = value;
        if (value === 0) {
          console.log("DA");
          // Вызов функции для запуска выстрела конфетти
          gameElement = document.getElementById('game');
          setTimeout(function() {
          gameElement.style.animation = 'fadeOut 5s forwards';
        }, 1500); // Задержка в 1.5 секунд перед скрытием элемента
          startConfetti();
          document.getElementById('finish-button').addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращение стандартного поведения формы
            location.reload(); // Вызываем функцию для перезагрузки
  });
        }
    }
});

function retryGame() {
    document.getElementById('retry-button').addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращение стандартного поведения формы

      lives_count.watch = lives;
      finished_counter.watch = levels;

      let finishElement = document.getElementById('game-over')
          finishElement.style.display = "none";

      bodyElement = document.body;
      bodyElement.style.transition = 'background-image 3s ease-in-out';
      bodyElement.style.backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1099%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='url(%23SvgjsLinearGradient1100)'%3e%3c/rect%3e%3cpath d='M774.703433498179 51.49372844325207L603.6681967731533 36.53008416633952 666.7403487202973 300.56476139233433z' fill='rgba(150%2c 224%2c 114%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M102.032%2c629.047C160.431%2c629.692%2c220.444%2c610.321%2c250.253%2c560.098C280.588%2c508.988%2c269.248%2c446.558%2c241.558%2c393.968C211.423%2c336.734%2c166.71%2c277.791%2c102.032%2c278.591C38.156%2c279.381%2c-2.503%2c340.498%2c-31.643%2c397.345C-57.685%2c448.147%2c-69.151%2c507.436%2c-40.623%2c556.885C-12.081%2c606.357%2c44.92%2c628.416%2c102.032%2c629.047' fill='rgba(150%2c 224%2c 114%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1693.002%2c684.666C1766.315%2c683.744%2c1820.11%2c623.334%2c1855.228%2c558.973C1888.588%2c497.834%2c1898.825%2c426.753%2c1867.738%2c364.428C1832.942%2c294.667%2c1770.959%2c233.487%2c1693.002%2c233.736C1615.354%2c233.984%2c1555.706%2c296.489%2c1520.187%2c365.537C1487.889%2c428.325%2c1489.932%2c501.054%2c1523.554%2c563.143C1559.028%2c628.652%2c1618.511%2c685.602%2c1693.002%2c684.666' fill='rgba(150%2c 224%2c 114%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M245.02%2c1098.77C329.279%2c1091.788%2c399.25%2c1041.26%2c442.773%2c968.775C487.864%2c893.677%2c507.896%2c803.738%2c469.418%2c725.046C426.103%2c636.461%2c343.625%2c565.154%2c245.02%2c564.344C145.282%2c563.525%2c65.234%2c635.643%2c14.144%2c721.305C-38.497%2c809.567%2c-72.634%2c919.371%2c-19.011%2c1007.04C33.094%2c1092.228%2c145.501%2c1107.016%2c245.02%2c1098.77' fill='rgba(150%2c 224%2c 114%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M585.2420726253604 446.5082430979628L286.1938134631874 325.68490360609616 165.37047397132073 624.7331627682692 464.41873313349373 745.5565022601359z' fill='rgba(150%2c 224%2c 114%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1794.076%2c529.529C1834.617%2c528.792%2c1872.694%2c506.381%2c1890.754%2c470.077C1907.23%2c436.957%2c1895.279%2c398.435%2c1874.521%2c367.816C1856.479%2c341.204%2c1826.21%2c328.527%2c1794.076%2c327.477C1759.593%2c326.351%2c1723.846%2c334.035%2c1703.983%2c362.245C1680.905%2c395.021%2c1672.106%2c438.413%2c1691.114%2c473.706C1710.955%2c510.546%2c1752.24%2c530.289%2c1794.076%2c529.529' fill='rgba(150%2c 224%2c 114%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1423.528569771493 976.4861078768112L1438.6321886361804 763.4126344028303 1269.399979199356 842.3269096697121z' fill='rgba(150%2c 224%2c 114%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M727.8768158393714 171.23540300988384L539.2261877713477 148.0720184784944 516.0628032399583 336.72264654651804 704.713431307982 359.8860310779075z' fill='rgba(150%2c 224%2c 114%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M894.7408931730992 1085.6052756601512L1146.8235253092012 1143.8031369555838 1205.0213866046338 891.7205048194817 952.9387544685318 833.522643524049z' fill='rgba(150%2c 224%2c 114%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1099'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='10.94%25' y1='-19.44%25' x2='89.06%25' y2='119.44%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1100'%3e%3cstop stop-color='rgba(193%2c 255%2c 155%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(193%2c 255%2c 155%2c 1)' offset='0.28'%3e%3c/stop%3e%3cstop stop-color='rgba(232%2c 255%2c 197%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e\")";
    //   startConfetti();

      canvasElement = document.getElementById('canvas');
      canvasElement.style.transition = 'background-image 3s ease-in-out';
      canvasElement.style.backgroundImage = "url(\"/static/src/images/main-bg.jpg\")";

      livesElement = document.getElementById('image-container');
      livesElement.style.display = "flex";

      continueExecution(); // Вызываем функцию для продолжения выполнения кода
    });
  }

document.getElementById('size-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращение стандартного поведения формы

  var numberInput = document.getElementById('canvas-size-button');
  levels = parseInt(numberInput.value);

  console.log(levels);

  if (levels >= 3 && levels <= 9) {
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
    lives_count.watch = parseInt(numberInput.value);
    lives = lives_count.watch

    console.log(lives_count.watch);
      livesFormSubmitted = true; // Устанавливаем флаг отправки формы

      document.getElementById('settings').style.display = 'none';
      document.getElementById('start-page').style.display = 'flex';

      var confirmationText = document.querySelector('.confirmation-text');
      confirmationText.textContent = 'Вы хотите запустить игру с ' + levels + ' уровнями и ' + lives_count.watch + ' жизнями?';

      startButton();
  });
}

function startButton() {
  document.getElementById('start-button').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращение стандартного поведения формы
    continueExecution(); // Вызываем функцию для продолжения выполнения кода
  });

  document.getElementById('change-button').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращение стандартного поведения формы
    location.reload(); // Вызываем функцию для перезагрузки
  });
}

function continueExecution() {
  if (!sizeFormSubmitted || !livesFormSubmitted) {
    alert('Something Wrong');
    return;
  }

  document.getElementById('start-page').style.display = 'none';
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

  for (var i = 0; i < lives_count.watch; i++) {
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
    this.new_green = true;
  }

// определяем количество кругов
// const n = 5;
  finished_counter.watch = levels;

// определяем массив объектов, представляющих круги
  const circles = [];
// circles.push(new Circle(100, 100, 40, `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`));
  circles.push(new Circle(100, 100, 40, '#a08679'));
  for (let i = 1; i < levels - 1; i++) {
    let x, y;
    do {
      x = Math.floor(Math.random() * (width - 200)) + 100;
      if (x - circles[i - 1].x >= (width - 100) / levels * 2) {
        x /= ((width - 100) / levels) + 10;
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
// livescountElement.textContent = "Жизней осталось:"+lives_count.watch;
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
                    lives_count.watch--;
                    // livescountElement.textContent = "Жизней осталось: " + lives_count.watch;
                    // Проходимся по каждому изображению и меняем его ссылку
                    for (var i = 0; i < images.length - lives_count.watch; i++) {
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
                          lives_count.watch--;
                        }
                        // livescountElement.textContent = "Жизней осталось: " + lives_count.watch;

                        // Проходимся по каждому изображению и меняем его ссылку
                        for (var i = 0; i < images.length - lives_count.watch; i++) {
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
                        if (circle.new_green) {
                          finished_counter.watch--;
                        }
                        circle.new = false;
                        circle.new_green = false;
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


/*function start_сonfetti() {
  var confettiContainer = document.getElementById('confetti-container');

  // Массив доступных цветов конфетти
  var colors = [
    '#FF355E', '#FD5B78', '#FF6037', '#FF9966', '#FFCC33', '#FFFF66', '#CCFF00', '#66FF66',
    '#AAF0D1', '#50BFE6', '#FF6EFF', '#EE34D2', '#FF00CC'
  ];

  // Создаем элементы конфетти и добавляем их в контейнер
  for (var i = 0; i < 150; i++) {
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = Math.random() * 100 + 'vh'; // Добавляем случайное значение для вертикальной позиции
    confetti.style.animationDelay = Math.random() * 2 + 's';
    // Выбираем случайный цвет из массива цветов
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Изменяем размер конфетти
    var size = Math.random() * 20 + 10; // Размер от 10px до 30px
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';

    confettiContainer.appendChild(confetti);
  }

  // Устанавливаем таймер, чтобы удалить конфетти через несколько секунд
  setTimeout(function() {
    confettiContainer.innerHTML = '';
  }, 8000); // Измените значение 5000 на желаемую продолжительность в миллисекундах (например, 3000 для 3 секунд)
}*/