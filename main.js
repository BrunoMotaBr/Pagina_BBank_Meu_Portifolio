const imgSlide = document.querySelectorAll('.slide');
const txtSlide = document.querySelectorAll('.slide-texto');
const menu = document.getElementById('lista');
const botaoMenu = document.getElementById('menu');
let i = 0;

setInterval(() => {
    trocaImagem();
}, 4000);

botaoMenu.addEventListener('click', (event) =>{
    menuL(event);
})

function menuL(event){
    if(event.srcElement.className == 'cabecalho__menu'){
        botaoMenu.classList.add('a');
        menu.classList.add('ativo-menu');
    }
    else{
        botaoMenu.classList.remove('a');
        menu.classList.remove('ativo-menu');
    }
}

function trocaImagem(){
    if(i == 0){
        imgSlide[imgSlide.length-1].classList.remove('ativo');
        imgSlide[i].classList.add('ativo');

        txtSlide[txtSlide.length-1].classList.remove('ativo-texto');
        txtSlide[i].classList.add('ativo-texto');
        
        i++;
    }else{
        imgSlide[i-1].classList.remove('ativo');
        imgSlide[i].classList.add('ativo');

        txtSlide[i-1].classList.remove('ativo-texto');
        txtSlide[i].classList.add('ativo-texto');
        i++;
        if(i == imgSlide.length){
            i = 0;
        }
    }
}