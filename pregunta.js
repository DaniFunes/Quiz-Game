const preguntas = {
    "questions": [
        {
            "question": "How do you round the number 7.25, to the nearest integer?",
            "answers": [
                "Math.round(7.25)",
                "round(7.25)",
                "Math.rnd(7.25)",
                "rnd(7.25)"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Which operator is used to assign a value to a variable?",
            "answers": [
                "x",
                "-",
                "=",
                "*"
            ],
            "correctAnswer": 0
        },
        {
            "question": "How do you write \"Hello World\" in an alert box?",
            "answers": [
                "msgBox(\"Hello World\");",
                "alert(\"Hello World\");",
                "alertBox(\"Hello World\");",
                "msg(\"Hello World\");"
            ],
            "correctAnswer": 0
        },
        {
            "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
            "answers": [
                "document.getElement(\"p\").innerHTML = \"Hello World!\";",
                "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
                "#demo.innerHTML = \"Hello World!\";",
                "document.getElementByName(\"p\").innerHTML = \"Hello World!\";"
            ],
            "correctAnswer": 2
        },
        {
            "question": "What is the correct syntax for referring to an external script called \"xxx.js\"?",
            "answers": [
                "<script href=\"xxx.js\">",
                "<script src=\"xxx.js\">",
                "<script name=\"xxx.js\">",
                "<script declare=\"xxx.js\">"
            ],
            "correctAnswer": 2
        }
    ]
}

class Pregunta {
    constructor (preguntasAjugar) {
        this.acertada = false;
        this.numeroPregunta = 0;
        this.preguntasAjugar = preguntasAjugar;
        this.imprimePreguntas()
    }


    imprimePreguntas (preguntas) {
        preguntas.forEach(pregunta => {
            console.log(pregunta)
        });
        
        const pregunta1 = document.querySelector("#1")
        console.log(pregunta1)

    }

    // compuebaAcierto () {}

}

