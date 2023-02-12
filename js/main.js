const button = document.querySelector('.dark-mode-btn');
const switchBtn = document.querySelector('.dark-mode-btn__switch');
const switchStyle = getComputedStyle(switchBtn);


button.addEventListener('click', modeOn)

function modeOn() {
  switchBtn.classList.toggle('dark-mode-btn__switch--on');
  const swithPosition = parseInt(switchStyle.left);
  if (swithPosition == 77) {
    localStorage.setItem('darkMode', 'light')
    setTimeout(() => {
      document.body.style.backgroundColor = '#fff'
      button.classList.remove('dark-mode-btn--on');
      switchBtn.style.backgroundColor = '#e0c129';
    }, 250)
  } else {
    localStorage.setItem('darkMode', 'dark')
    setTimeout(() => {
      document.body.style.backgroundColor = '#202020';
      button.classList.add('dark-mode-btn--on');
      switchBtn.style.backgroundColor = '#131313';
    }, 250)
  };

}

if (localStorage.getItem('darkMode') === 'dark') {
  switchBtn.classList.add('dark-mode-btn__switch--on');
  document.body.style.backgroundColor = '#202020';
  button.classList.add('dark-mode-btn--on');
  switchBtn.style.backgroundColor = '#131313';
} 
