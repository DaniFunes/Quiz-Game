class PantallaFinal {
    constructor(pregunta, puntos, tiempo) {
        this.puntosFinal = puntos;
        this.tiempoFinal = tiempo;
        this.creaDomEl(this.puntosFinal, this.tiempoFinal);
        this.pregunta = pregunta
        clearInterval(pregunta.idCuentaAtras)
    }


    creaDomEl() {
        this.containerScoreEl = document.createElement("main")
        this.containerScoreEl.setAttribute("id", "container-score")

        this.TextPuntuacionDOMEl = document.createElement("h2")
        this.TextPuntuacionDOMEl.innerText = "Has conseguido"

        this.puntuacionDOMEl = document.createElement("h1")
        this.puntuacionDOMEl.innerHTML = this.puntosFinal + " puntos";

        this.tiempoDOMEl = document.createElement("h3")
        this.tiempoDOMEl.innerText = "En " + this.tiempoFinal + " segundos";

        this.reinitGameDOMEl = document.createElement("button")
        this.reinitGameDOMEl.innerHTML = "VOLVER A JUGAR"
        this.reinitGameDOMEl.addEventListener("click", this.reinitGame)


        this.containerScoreEl.append(this.TextPuntuacionDOMEl, this.puntuacionDOMEl, this.tiempoDOMEl, this.reinitGameDOMEl)
        document.body.append(this.containerScoreEl)


    }

    reinitGame() {
        const score = document.querySelector("#container-score")
        score.remove()
        window.location.reload()
        juego = new Juego()
    }


}