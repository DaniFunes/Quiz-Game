


class Pregunta {
    constructor (preguntasAjugar) {
        this.indexPregunta = 0;
        this.preguntasAjugar = preguntasAjugar;
        this.contadorTiempo = 0;
        this.cuentaAtras = 30;
        this.puntosAcumulados = 0;
        this.creaDOM ();
        this.respuestaSeleccionada = false
    }


    creaDOM () {
        this.containerQuestion = document.createElement ("main")
        this.containerQuestion.setAttribute("id", "questions-elements")

        this.numeroPregunta = document.createElement("h2")

        this.puntosAcumuladosEl = document.createElement("h3")
        this.puntosAcumuladosEl.innerText = this.puntosAcumulados;

        this.contadorTiempoEl = document.createElement("p")
        this.contadorTiempoEl.innerText = this.contadorTiempo;

        this.marchaAtrasEl = document.createElement("p")
        this.marchaAtrasEl.innerText = this.cuentaAtras;

        this.formulario = document.createElement ("form")
        this.tituloPregunta = document.createElement("h1")

        this.respuesta0 = document.createElement ("button")
        this.respuesta0.setAttribute("id", "answer-0")
        this.respuesta0.setAttribute("data-answer", "0")
        this.respuesta0.addEventListener("click", handleAnswered);


        this.respuesta1 = document.createElement ("button")
        this.respuesta1.setAttribute("id", "answer-1")
        this.respuesta1.setAttribute("data-answer", "1")
        this.respuesta1.addEventListener("click", handleAnswered);

        
        this.respuesta2 = document.createElement ("button")
        this.respuesta2.setAttribute("id", "answer-2")
        this.respuesta2.setAttribute("data-answer", "2")
        this.respuesta2.addEventListener("click", handleAnswered);


        this.respuesta3 = document.createElement ("button")
        this.respuesta3.setAttribute("id", "answer-3")
        this.respuesta3.setAttribute("data-answer", "3")
        this.respuesta3.addEventListener("click", handleAnswered);


        this.siguiente = document.createElement ("button")
        this.siguiente.innerText = "siguiente"
        this.siguiente.setAttribute("id", "next")
        this.siguiente.addEventListener("click", handleButtonNext)


        this.formulario.append(this.tituloPregunta,this.puntosAcumuladosEl,this.contadorTiempoEl,this.marchaAtrasEl,this.respuesta0,this.respuesta1,this.respuesta2,this.respuesta3)
        this.containerQuestion.append(this.numeroPregunta, this.formulario, this.siguiente)
        document.body.appendChild(this.containerQuestion)
    }

    imprimeRespuesta () {
        this.numeroPregunta.innerText = "Pregunta " + (this.indexPregunta + 1) + " de " + this.preguntasAjugar
        this.tituloPregunta.innerText = preguntas.questions[this.indexPregunta].question
        
        preguntas.questions[this.indexPregunta].answers.forEach( (respuesta, i) => {
            document.querySelector(`#answer-${i}`).innerText = respuesta;
        })

    }

    compruebaRespuesta () {
        if (this.respuestaSeleccionada) {
            this.siguienteRespuesta()
        } else {
            alert("Debes elegir una respuesta")
        }

    }

    siguienteRespuesta () {
        this.respuestaSeleccionada = false;
        this.indexPregunta++;
        juego.pantallaPreguntas.imprimeRespuesta ()
    }
   
       
    compuebaAcierto (button) {    
        this.estaAcertada = parseInt(button.getAttribute("data-answer")) === preguntas.questions[this.indexPregunta].correctAnswer
        this.estaRespondida = this.respuestaSeleccionada
        if (this.estaAcertada && !this.estaRespondida) {
                this.puntosAcumulados += 10;
                this.puntosAcumuladosEl.innerText = this.puntosAcumulados
                juego.puntosTotal = this.puntosAcumulados;
            
            
        } else if (this.estaRespondida){
            console.log("esta respondida")
            }
    }

    cuentaTiempo () {
        setInterval(() => {this.contadorTiempoEl.innerText = ++this.contadorTiempo;
        
        }, 1000);

        setInterval(() => {this.marchaAtrasEl.innerText = --this.cuentaAtras;
        
        }, 1000);
        
      
    }
    

}

