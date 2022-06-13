let seta = document.getElementById('seta')
let eye = document.getElementById('eye')
let senha = document.getElementById('senha')
let nome = document.getElementById('nome')
let user = document.getElementById('user')
let password = document.getElementById('password')

setInterval (function valida_form (){
    if(nome.value.length >= 4 && senha.value.length >= 4) {
    seta.style.color = "white";
    seta.style.backgroundColor = "#d13639";
    seta.style.border = "none";
    seta.style.cursor = "pointer";
    } else {
        seta.removeAttribute("style")
    }
    }, 100);


    function olho () {
        if (senha.type === 'password') {
            senha.setAttribute('type', 'text');
            eye.classList.add('esconder');
            senha.focus();
        }
        else {
            senha.setAttribute('type', 'password');
            eye.classList.remove('esconder')
            senha.focus();
        }
    }


    senha.onfocus = function () {

        eye.style.opacity = 1;
    }

     function focusout () {
        eye.style.opacity = 0
    }

    setInterval (function  () {
        if(nome.value.length >= 1) {
          user.classList.add('teste1')
        }
        else {
            user.classList.remove('teste1')
        }
    }, 100)

    setInterval (function  () {
        if(senha.value.length >= 1) {
          password.classList.add('teste2')
        }
        else {
            password.classList.remove('teste2')
        }
    }, 100)

    user.onclick = function () {
        {
           nome.focus();
       }
   }

    password.onclick = function () {
         {
            senha.focus();
        }
    }