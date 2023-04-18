const darkModeButton = document.getElementById('dark-mode-button'); //codigo para botao escuro

darkModeButton.addEventListener('click', function() {
  const body = document.body;
  body.classList.toggle('dark-mode');
});

function openTab(event, tabName) {
    // código para abrir a aba correspondente
  }
  
  function redirect(event) {
    const button = event.target;
    const href = button.dataset.href;
    const section = document.getElementById(href);
    const sectionTop = section.getBoundingClientRect().top;
    window.scrollTo({ top: window.pageYOffset + sectionTop, behavior: 'smooth' });
  }
  
  const buttons = document.querySelectorAll('.tab-button1,.tab-button2,.tab-button3');
  buttons.forEach(button => button.addEventListener('click', redirect));
 
 
