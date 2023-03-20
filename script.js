

let juego = new Juego();
juego.pantallaInicio.buttonStart.addEventListener("click", prevent)
juego.pantallaInicio.buttonQuestionNumbers.addEventListener("click", prevent);



//FUNCIONES MANEJADORAS

function handleButtonSubmit() {
    const preguntasElegidas = document.querySelector("#input-preguntas").value
    const answerToNumber = parseInt(preguntasElegidas);

    if (isNaN(answerToNumber)) {

        alert("Debes introducir un número")
        juego.pantallaInicio.buttonStart.className = "inactiveLink"

    } else {
        juego.pantallaInicio.preguntasJugables = answerToNumber;

        if (juego.pantallaInicio.preguntasJugables > preguntas.questions.length) {
            alert("Introduce un número como máximo de " + preguntas.questions.length)
        } else {
            juego.preguntasJugables = juego.pantallaInicio.preguntasJugables;
            alert("Número introducido correcto. Pulsa comenzar para comenzar con el número de preguntas introducidos " + juego.preguntasJugables)
            juego.pantallaInicio.buttonStart.classList.remove("inactiveLink")
            juego.pantallaInicio.buttonStart.removeEventListener("click", prevent);
            juego.pantallaInicio.buttonStart.addEventListener("click", handleButtonStart)

        }


    }

}

function handleButtonStart() {
    document.body.removeChild(juego.pantallaInicio.containerStart)
    juego.iniciaPreguntas(juego.preguntasJugables);
    juego.pantallaPreguntas.cuentaTiempo()
    juego.pantallaPreguntas.imprimePregunta()
    juego.pantallaPreguntas.imprimeRespuesta()

}

function handleButtonNext() {
    juego.pantallaPreguntas.compruebaRespuesta()
}

function handleAnswered(e) {
    e.preventDefault();
    juego.pantallaPreguntas.compuebaAcierto(e.target);
    juego.pantallaPreguntas.respuestaSeleccionada = true

}


function prevent(e) {
    e.preventDefault();
}

