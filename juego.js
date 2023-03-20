class Juego {
    constructor() {
        this.pantallaInicio = new PantallaInicio();
        this.preguntasJugables = 0;
        this.puntosTotal = 0;
        this.tiempoTotal = 0;
    }

    iniciaJuego() {
        this.contadorTiempo = 0;
    }

    iniciaPreguntas() {
        this.pantallaPreguntas = new Pregunta(this.preguntasJugables)
    }

    iniciaPantallaFinal() {
        this.pantallaFinal = new PantallaFinal(juego.pantallaPreguntas, this.puntosTotal, this.tiempoTotal)
    }


}