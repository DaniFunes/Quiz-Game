class Juego {
    constructor() {
        this.pantallaInicio = new PantallaInicio();
        this.preguntasJugables = 0;
        this.puntosTotal = 0;
    }

    iniciaJuego () {
        this.contadorTiempo = 0;
        // const IDtiempoIniciado = this.cuentaTiempo();
    }

    iniciaPreguntas () {
        this.pantallaPreguntas = new Pregunta(this.preguntasJugables)
        console.log(this.pantallaPreguntas)
    }


    

}