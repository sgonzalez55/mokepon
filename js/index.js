//funcion de incio de eventos

function iniciar() {
    let btnSelect = document.getElementById('select')
    btnSelect.addEventListener('click', seleccionarMokepon)
}

//funcion de seleccion de poder
function poderes() {
    let btnPoderes = document.getElementById('btn-fuego')
    btnPoderes=addEventListener('click', seleccionarPoder)
}


//funcion de seleccion de mascota
function seleccionarMokepon(){
    let inputHipodogue=document.getElementById('hipodogue')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')
    if (document.getElementById('hipodogue').checked) {
        alert('Seleccionaste a hipodogue')
    }else if (document.getElementById('capipepo').checked) {
        alert('Seleccionaste Capipepo')
    }else if (document.getElementById('ratigueya').checked) {
        alert('Seleccionaste Ratigueya')
    }else{
        alert('Por favor seleccionas tu Mokepon ')
    }
}
window.addEventListener('load', iniciar)


function seleccionarPoder() {
    let btnFuego = document.getElementById('btn-fuego')
    btnFuego=addEventListener('click','btn-fuego')
    if (document.getElementsByid('btn-fuego')) {
        alert('seleccionaste poder de fuego')
    }
}
window.addEventListener('load', poderes)