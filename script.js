const login = document.querySelector("#login");
const inicial = document.querySelector("#inicial");
const somos = document.querySelector("#somos");
const destinos = document.querySelector("#destinos"); 
const contato = document.querySelector("#contato");
const india = document.querySelector("#india");

login.addEventListener('click', function() {
    window.location.href = "login.html";
});

inicial.addEventListener('click', function() {
    window.location.href = "index.html";
});

somos.addEventListener('click', function(){
    window.location.href = "quemSomos.html"
});

contato.addEventListener('click', function(){
    window.location.href = "contato.html"
});

destinos.addEventListener('click', function(){
    window.location.href = "destinos.html"
});

india.addEventListener('click', function(){
    window.location.href = "india.html"
});


