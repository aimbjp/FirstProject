const linksTo = document.querySelectorAll('.linkedTo');
const popUp = document.querySelector('.pop-up');
let imgPop = document.querySelector('.av-pop');
const legendFor = document.querySelectorAll('.legendFor');
const canvasE = document.querySelector('#canvas');

linksTo.forEach(e => {
    e.addEventListener('click', () => { 
      popUp.classList.remove('hide');
      canvasE.classList.remove('hide');
      let imgRef = e.getAttribute('src');
        imgPop.setAttribute('src', imgRef);
        legendFor.forEach(element => {
          if (element.id === imgRef) {
          let nameP = document.querySelector('.name');
            nameP.innerHTML =  element.innerHTML;
          }
        });
    });
});

const exit = document.querySelector('.exit-x');

exit.addEventListener('click', () => {
    popUp.classList.add('hide');
    canvasE.classList.add('hide');
});

const expand = document.querySelector('.expand');
const otherInf = document.querySelector('.other-inf');
const statusE = document.querySelector('.status');

expand.addEventListener('click', () => {
    otherInf.classList.toggle('hide');
    statusE.classList.toggle('no-content');
});

expand.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;

  this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
});

expand.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
});

window.onclick = function(e) {
    if (e.target == popUp) {
    canvasE.classList.add('hide');

      popUp.classList.add('hide');
    }
  }


