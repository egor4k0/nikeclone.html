document.addEventListener("DOMContentLoaded", function() {
  // Симуляция затримки загрузки
  setTimeout(function() {
      var loader = document.getElementById("loader");
      var content = document.getElementById("content");
      loader.style.display = "none";
      content.classList.remove("hidden");
  }, 2000); // 3 секунді затримки 
});
window.addEventListener('scroll', function() {
  var menushka = document.querySelector('.menushka');
  var scrollTop = window.pscrollY || document.documentElement.scrollTop;

  if (scrollTop > 0) {
      menushka.classList.add('fixed-menu');
  } else {
      menushka.classList.remove('fixed-menu');
  }
});

//срипт який показує анімацію при кожному натисканні на ссилку з арбітром хреф,симулюючи завантажня
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll("a[href]");
  links.forEach(function(link) {
      link.addEventListener("click", function(event) {
          event.preventDefault(); 
          var href = this.getAttribute("href");
          var loader = document.getElementById("loader");
          var content = document.getElementById("content");
          loader.style.display = "flex"; 
          content.classList.add("hidden");
          setTimeout(function() {
              window.location.href = href;
          }, 1000);
      });
  });
});

/* этот код помечает картинки, для удобства разработки */
    let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    /* конфигурация */
    let width = 130; // ширина картинки
    let count = 4; // видимое количество изображений

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 2; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - 1));
      list.style.marginLeft = position + 'px';
    };

