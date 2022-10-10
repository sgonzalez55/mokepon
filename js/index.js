function iniciar() {
    let btnSelect = document.getElementById('select')
    btnSelect.addEventListener('click', seleccionarMokepon)
    function seleccionarMokepon() {
        alert("TEST")
    }
}


window.addEventListener('load', iniciar)