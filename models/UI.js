export class UI {
    constructor() {}

        /**
        * 
        * @param {string} text question to render
        */

    showQuestion(text) {
        const questionTitle = document.querySelector(".question");
        questionTitle.innerHTML = text;
    }

    /**
     * 
     * @param {string[]} choices the choices of the question
     */

    showChoices(choices, callback) {
        const choicesContainer = document.querySelector(".choices");
        choicesContainer.innerHTML = "";
        
        for(let i=0; i < choices.length; i++) {
            const button = document.createElement("button");
            button.innerHTML = choices[i];
            button.className = "button";
            button.addEventListener("click", () => callback(choices[i]));

            choicesContainer.append(button);
        }
    }

    /**
     * 
     * @param {number} score the total score
     */

    showScores(score) {
        const quizEndHTML = `
        <div class="div-resultado">
            <h1 class="resultado">Resultado</h1>
            <h2 class="p-f">Puntaje: <strong class="puntaje-final">${score}</strong></h2>
        </div>
        `

        const element = document.querySelector(".quiz");
        element.innerHTML = quizEndHTML;
    }

    /**
     * 
     * @param {number} currentIndex the current index of the quiz 
     * @param {number} total the total questions 
     */

    showProgress(currentIndex, total) {
        const element = document.querySelector(".progress");
        element.innerHTML = `Pregunta <h6 class="current-index">${currentIndex}</h6> de <h6 class="total-progress">${total}</h6>`;
    }
}