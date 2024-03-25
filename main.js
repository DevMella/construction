
  showCar('volvo');

  function showCar(carName) {
      var carContents = document.querySelectorAll('.car-content');
      carContents.forEach(function (carContent) {
          carContent.style.display = 'none';
      });

      var selectedCar = document.getElementById(carName);
      selectedCar.style.display = 'block';

      var buttons = document.querySelectorAll('button');
      buttons.forEach(function (button) {
          button.classList.remove('active');
      });

      event.currentTarget.classList.add('active');
  }


  
