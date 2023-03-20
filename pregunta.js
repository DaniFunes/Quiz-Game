


class Pregunta {
    constructor(preguntasAjugar) {
        this.indexPregunta = 0;
        this.currentPregunta = this.indexPregunta + 1;
        this.preguntasAjugar = preguntasAjugar;
        this.contadorTiempo = 0;
        this.cuentaAtras = 30;
        this.puntosAcumulados = 0;
        this.creaDOM();
        this.respuestaSeleccionada = false
    }


    creaDOM() {
        this.containerQuestion = document.createElement("main")
        this.containerQuestion.setAttribute("id", "questions-elements")

        this.numeroPregunta = document.createElement("h2")
        this.numeroPregunta.innerText = "Pregunta " + (this.currentPregunta) + " de " + this.preguntasAjugar

        this.puntosAcumuladosEl = document.createElement("h3")
        this.puntosAcumuladosEl.innerText = this.puntosAcumulados;

        this.contadorTiempoEl = document.createElement("p")
        this.contadorTiempoEl.innerText = 0;

        this.marchaAtrasEl = document.createElement("p")
        this.marchaAtrasEl.innerText = this.cuentaAtras;

        this.formulario = document.createElement("form")

        this.siguiente = document.createElement("button")
        this.siguiente.innerText = "SIGUIENTE"
        this.siguiente.setAttribute("id", "next")
        this.siguiente.addEventListener("click", handleButtonNext)

        this.containerQuestion.append(this.puntosAcumuladosEl, this.contadorTiempoEl, this.marchaAtrasEl, this.numeroPregunta, this.formulario, this.siguiente)
        document.body.append(this.containerQuestion)

    }

    imprimePregunta() {
        this.tituloPregunta = document.createElement("h1")
        this.tituloPregunta.innerText = preguntas.questions[this.indexPregunta].question
        this.formulario.append(this.tituloPregunta)


    }

    imprimeRespuesta() {
        preguntas.questions[this.indexPregunta].answers.forEach((respuesta, i) => {
            let buttons = document.createElement("button")
            buttons.setAttribute("id", `answer-${i}`)
            buttons.setAttribute("data-answer", `${i}`)
            buttons.setAttribute("class", "standard")
            buttons.addEventListener("click", handleAnswered);
            buttons.innerText = respuesta
            this.formulario.append(buttons)

        })

    }

    compruebaRespuesta() {
        if (this.respuestaSeleccionada) {
            this.siguienteRespuesta()
        } else {
            alert("Debes elegir una respuesta")
        }

    }

    siguienteRespuesta() {
        this.respuestaSeleccionada = false;
        if (this.currentPregunta === this.preguntasAjugar) {
            juego.puntosTotal = this.puntosAcumulados;
            juego.tiempoTotal = this.contadorTiempo;
            this.containerQuestion.remove()
            juego.iniciaPantallaFinal(juego.puntosTotal, juego.tiempoTotal)


        } else {
            this.indexPregunta++;
            this.currentPregunta++;
            this.containerQuestion.remove()
            this.creaDOM()
            this.limpiaRespuesta()
            juego.pantallaPreguntas.imprimePregunta()
            juego.pantallaPreguntas.imprimeRespuesta()
            this.cuentaAtras = 30
        }

    }


    compuebaAcierto(button) {
        this.estaAcertada = parseInt(button.getAttribute("data-answer")) === preguntas.questions[this.indexPregunta].correctAnswer
        this.estaRespondida = this.respuestaSeleccionada
        if (this.estaAcertada && !this.estaRespondida) {
            button.classList.add("correctAnswer")
            this.puntosAcumulados += 10;
            this.puntosAcumuladosEl.innerText = this.puntosAcumulados
            juego.puntosTotal = this.puntosAcumulados;


        } else if (this.estaRespondida) {

        } else {
            button.classList.add("incorrectAnswer")

        }
    }

    cuentaTiempo() {
        this.idContador = setInterval(() => {
            this.contadorTiempoEl.innerText = "Tiempo de juego: " + ++this.contadorTiempo + " segundos";
        }, 1000);

        this.idCuentaAtras = setInterval(() => {
            this.marchaAtrasEl.innerText = "Tiempo restante para esta pregunta: " + --this.cuentaAtras + " segundos"
            if (this.cuentaAtras === 0) {
                this.siguienteRespuesta()
            }
        }, 1000);

    }

    limpiaRespuesta() {
        document.querySelectorAll(".standard").forEach((answer) => answer.classList.remove("correctAnswer", "incorrectAnswer"))

    }


}

