(function(){
     const wheel = document.querySelector('.wheel');
     const startButton = document.querySelector('.wheelButton');
     const multiplier = 5000;

     let angle = 0;

     startButton.addEventListener('click', ()  => {
          startButton.style.pointerEvents = 'none';
          angle = Math.floor(multiplier + Math.random() * multiplier);

          wheel.style.transition = 'all 10s ease-out';
          wheel.style.transform = `rotate(${angle}deg)`;
          wheel.classList.add('blur');
     });

     wheel.addEventListener('transitionend', () => {
          wheel.classList.remove('blur');
          startButton.style.pointerEvents = 'auto';
          wheel.style.transition = 'none';
          
          let actualAngle = angle % 360;

          wheel.style.transform = `rotate(${actualAngle}deg)`;
     });
})();