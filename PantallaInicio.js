class PantallaInicio {
    constructor() {
        this.creaElementos();
        this.saveQuestionsUser();
        this.preguntasJugables = 0;
    }


    creaElementos() {
        this.logoJuego = document.createElement("img");
        this.logoJuego.setAttribute("src", "assets/quiz-game.png")

        document.body.appendChild(this.logoJuego)

        this.tituloJuego = document.createElement("h1")
        this.tituloJuego.innerText = "QUIZ GAME"

        document.body.appendChild(this.tituloJuego)

        this.instrucciones = document.createElement("p")
        this.instrucciones.innerText = "Responde correctamente todas las preguntas para ganar el máximo de puntos posibles"
        document.body.appendChild(this.instrucciones)

        this.preguntasAJugar = document.createElement("h2")
        this.preguntasAJugar.innerText = "¿Cuantas preguntas quieres responder?"
        document.body.appendChild(this.preguntasAJugar)

        this.formularioPreguntas = document.createElement("form");
        this.inputPreguntas = document.createElement("input");
        this.inputPreguntas.setAttribute("id", "preguntas")

        this.buttonQuestionNumbers = document.createElement("input");
        this.buttonQuestionNumbers.setAttribute("type", "submit")
        this.buttonQuestionNumbers.setAttribute("id", "submit")

        this.buttonStart = document.createElement("button");
        this.buttonStart.id = 'comienzo';
        this.buttonStart.className = 'inactiveLink';
        this.buttonStart.innerText = "COMENZAR JUEGO"

        this.formularioPreguntas.append(this.inputPreguntas, this.buttonQuestionNumbers, this.buttonStart)



        this.containerStart = document.createElement("main")
        this.containerStart.setAttribute("id", "container")
        this.containerStart.append(this.logoJuego, this.tituloJuego, this.instrucciones, this.preguntasAJugar, this.formularioPreguntas, this.formularioPreguntas, this.buttonStart)

        document.body.appendChild(this.containerStart);
    }

    // introElements () {

    saveQuestionsUser() {
        this.buttonQuestionNumbers.addEventListener("click", handleButtonSubmit)

    }


}




function handleButtonSubmit() {
    const preguntasElegidas = document.querySelector("#preguntas").value
    const answerToNumber = parseInt(preguntasElegidas);

    if (isNaN(answerToNumber)) {

        console.log("hola")
        alert("Debes introducir un número")
        start.buttonStart.className("inactiveLink")
        // buttonStart.addEventListener("click", prevent)

    } else {
        start.preguntasJugables = answerToNumber;
        alert("Número introducido correcto. Pulsa comenzar para comenzar con el número de preguntas introducidos " + start.preguntasJugables)
        start.buttonStart.classList.remove("inactiveLink")
        // buttonStart.removeEventListener("click", prevent);
        // buttonQuestionNumbers.addEventListener("click", handleButtonStart)
        console.log(start)
    }

}

function handleButtonStart () {
    body.remove(start.containerStart)

}

function prevent(e) {
    e.preventDefault();

}

