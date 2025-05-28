let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('check');

const enableDarkmode = () =>  {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
  themeSwitch.checked = true;
}

const disableDarkode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
  themeSwitch.checked = false;
}

if(darkmode === 'active') enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ?  enableDarkmode() : disableDarkode();
})
