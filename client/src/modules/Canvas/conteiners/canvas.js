import img1 from './square_1.png';
import img2 from './square_2.png';
import img3 from './square_3.png';

export default function updateCanvas(cnx, canvas) {
  //Разрешение экрана
  var d = document.documentElement.clientHeight;
  var b = document.documentElement.clientWidth;
  //var d = window.innerHeight;
  //var b = window.innerWidth;
  //var d = window.outerHeight;
  //var b = window.outerWidth - 20;
  //console.log(d);

  //Устанавливаем разрешение экрана в качестве атрибутов в холст
  //title.setAttribute('height', d);
  canvas.setAttribute('height', d);
  canvas.setAttribute('width', b);

  var d1;
  var g = document.querySelector('.title');
  //Отлавливаем изменение ориентации мобильных устройств
  window.addEventListener("resize", function() {
    d1 = document.documentElement.clientHeight;
    if (d1 === d) {
      g.setAttribute('height', d);
      canvas.setAttribute('height', d);
      canvas.setAttribute('width', b);
    } else {
      g.setAttribute('height', d);
      canvas.setAttribute('height', b);
      canvas.setAttribute('width', d);
    };
  });

  //Задаем картинки элементов
  var image1 = new Image();
  var image2 = new Image();
  var image3 = new Image();
  image1.src = img1;
  image2.src = img2;
  image3.src = img3;
  //console.log(image1.src);
  //Массив картинок
  var img = [image1, image2, image3, image1];
  //Массив элементов
  var element = [];

  //Глобальные параметры
  var glob = {
    elem: 50, //Количество элиментов
    tact: 0, //Количество тактов на изменение прозрачности элементов
    alpha_1: 0, //Предыдущий елемент в замене прозраности
    alpha_2: 1, //Рабочий елемент в замене прозраности
    transp_1: 1, //Уровень прозрачности предыдущего элемента
    transp_2: 0,  //Уровень прозрачности рабочего элемента
    size_elem: 80, //Размер элементов
    speed_alpha: 10000 //Скорость изменения прозрачности
  }

  //Главная функция
  function draw() {
    if(element.length < glob.elem ) {
      var j = 0;
      for (j = 0; j < glob.elem; j++ ) {
        var VX = Math.random(); //Скорость перемещения по х
        var VY = Math.random(); //Скорость перемещения по y
        var X = VX*(canvas.width - 100);
        var Y = VY*(canvas.height - 100);
        element.push({
          vX: VX, 
          vY: VY,
          x: X,
          y: Y,
          driw: function() {
            sketcher(this.x, this.y);
          },
        });
      }
    }
    window.requestAnimationFrame(play);
    return {VX, VY}
  }

  //Рисуем фигуры попутно меняя прозрачность
  function sketcher(x, y) {
    if(glob.tact <  glob.speed_alpha + 1) {
      cnx.globalAlpha = glob.transp_1;
      cnx.drawImage(img[glob.alpha_1], x, y, glob.size_elem, glob.size_elem);

      cnx.globalAlpha = glob.transp_2;
      cnx.drawImage(img[glob.alpha_2], x, y, glob.size_elem, glob.size_elem);

      glob.tact++;
      glob.transp_1 -= 1/glob.speed_alpha;
      glob.transp_2 += 1/glob.speed_alpha;

      if(glob.tact === glob.speed_alpha) {
        glob.tact = 0;
        glob.alpha_1++;
        glob.alpha_2++;
        glob.transp_1 = 1;
        glob.transp_2 = 0;

        if(glob.alpha_2 === img.length) {
          glob.alpha_1 = 0;
          glob.alpha_2 = 1;
        }
      }
    }
  }

  //Рисуем и элементы
  function create() {
    for(var j = 0; j < glob.elem; j++) {
      element[j].driw(); //Рисуем объект
    }
  }

  //Обрабатываем взаимодействие элементов с холстом
  function update(VX, VY) {
    //Обработчик столкновений
    //Если поотолок и пол
    for(var j = 0; j < glob.elem; j++) {
      if(element[j].y < 0 || element[j].y + 100 > canvas.height) {
        element[j].vY = - element[j].vY;
      }
      //Если правая и левая стенка
      if(element[j].x < 0 || element[j].x + 100 > canvas.width) {
        element[j].vX = - element[j].vX;
      }
    }
    for(j = 0; j < glob.elem; j++) {
    // меняем координаты объекта
      if(VX <= 0.5) {
        element[j].x += -element[j].vX;
      } else {
        element[j].x += element[j].vX;
      }
      if(VY >= 0.5) {
        element[j].y += -element[j].vY;
      } else {
        element[j].y += element[j].vY;
      }
    }
  }

  //Функция вызываеммая на выпонение анимации
  function play(VX, VY) {
    cnx.clearRect(0,0,canvas.width,canvas.height);
    create(); // отрисовываем всё на холсте
    update(VX, VY); // обновляем координаты
    window.requestAnimationFrame(play);
  }
  draw();
}