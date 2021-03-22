function openbutton() {
    document.querySelector('#content-button').classList.toggle("clicar");
    document.querySelector('#content').classList.toggle("contentopen");
    document.querySelector('#content').classList.toggle("contentclose");
    document.querySelector('#bg').classList.toggle("openoverlay");
  }
