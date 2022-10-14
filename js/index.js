//funcion de incio de eventos
let ataque
let atkEnemigo
let puntaje
function iniciar() {
    //declaracion de las variables
    let btnSelect = document.getElementById('select')
    let btnFuego =document.getElementById('btn-fuego')
    let btnAgua = document.getElementById('btn-agua')
    let btnTierra = document.getElementById('btn-tierra')
    let btnReini =document.getElementById('restar')

    btnSelect.addEventListener('click', seleccionarMokepon)
    btnFuego.addEventListener('click', seleccionPoderF)
    btnAgua.addEventListener('click', seleccionPoderA)
    btnTierra.addEventListener('click', seleccionPoderT)
    btnReini.addEventListener('click', pageReload)

}

function seleccionarMokepon(){
    let inputHipodogue=document.getElementById('hipodogue')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')
    let spanMoke = document.getElementById('name-player')
    if (document.getElementById('hipodogue').checked) {
            spanMoke.innerHTML = 'Hipodogue'
    }else if (document.getElementById('capipepo').checked) {
        spanMoke.innerHTML = 'Capipepo'
    }else if (document.getElementById('ratigueya').checked) {
        spanMoke.innerHTML = 'Ratigueya'
    }else{
        alert('Por favor seleccionas tu Mokepon ')
    }

    seleccionAleatoria()//llamando a la funcion de aletorio enemigo
  
}

//funcion aleatoriedad

function random(min, max) {
    return Math.floor(Math.random()*(max - min + 1)+ min)
}
//fin funcion aleatoriedad

//funcion enemigo
function seleccionAleatoria(){
    let aleatorio = random(1,3)
    let spanEnemy = document.getElementById('name-cpu')
    if (aleatorio == 1) {
        spanEnemy.innerHTML='Hipodogue'
    }else if(aleatorio == 2){
        spanEnemy.innerHTML='Capipepo'
    }else{
        spanEnemy.innerHTML='Ratigueya'
    }
    
}
//fin funcion enemigo

//funciones de seleccion de poderes del jugador
function seleccionPoderF(){
    ataque = 'Fuego 🔥🔥🔥'
    seleccionAtaqueAlea()//llamando funcion para que se seleccione el ataque automaticamente
    
}
function seleccionPoderA(){
    ataque = 'Agua 💧💧💧'
    seleccionAtaqueAlea()//llamando funcion para que se seleccione el ataque automaticamente
}
function seleccionPoderT(){
    ataque = 'Tierra 🌱🌱🌱'
    seleccionAtaqueAlea()//llamando funcion para que se seleccione el ataque automaticamente
}
//funcion que reutiliza la funcion de random
function seleccionAtaqueAlea(){
    let powerRandom=random(1,3)
    if (powerRandom == 1) {
        atkEnemigo = 'Fuego 🔥🔥🔥'
    }else if(powerRandom == 2){
        atkEnemigo = 'Agua 💧💧💧'
    }else{
        atkEnemigo = 'Tierra 🌱🌱🌱'
    }
    combate()
}
//Fuego > Tierra > Agua > Fuego QUEDAMOS POR AQUI
function combate() {
    if(ataque == atkEnemigo){
        puntaje ='EMPATE 😒'
    }else if (ataque == 'Fuego 🔥🔥🔥' && atkEnemigo == 'Tierra 🌱🌱🌱') {
        puntaje = 'GANASTE 🎉🎉🎉'
    }else if (ataque =='Agua 💧💧💧' && atkEnemigo == 'Fuego 🔥🔥🔥') {
        puntaje = 'GANASTE 🎉🎉🎉'
    }else if (ataque == 'Tierra 🌱🌱🌱' && atkEnemigo == 'Agua 💧💧💧') {
        puntaje = 'GANASTE 🎉🎉🎉'
    }else{
        puntaje = 'PERDISTE 💀💀💀'
    }
    msj()
}

//funcion que inserta en el section el mensaje
function msj() {
    let sectionMsj = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con '+ataque + ' y el enemigo te ataco con '+atkEnemigo + puntaje
    sectionMsj.appendChild(parrafo)
}

//funcion para reiniciar pagina
function pageReload(){
    location.reload()
}

//cargando eventos
window.addEventListener('load', iniciar)
//window.addEventListener('load', poderes)