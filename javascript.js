(function () {
    function buildQuiz() {
        // This is where the output is stored
        const output = [];

        // Each question thingy
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // Where it will store the lists for the answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                  `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
              `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if any of the answers are wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // Show the number of correct answers 
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "Pineapple",
            answers: {
            }
        },
        {
            question: "Pepperoni",
            answers: {
            }
        },
        {
            question: "Mushroom",
            answers: {
            }
        },
        {
            question: "Onions",
            answers: {
            }
        },
        {
            question: "Sausage",
            answers: {
            }
        },
        {
            question: "Bacon",
            answers: {
            }
        },
        {
            question: "Extra Cheese",
            answers: {
            }
        },{
            question: "Black Olives",
            answers: {
            }
        },
        {
            question: "Green Peppers",
            answers: {
            }
        },
        {
            question: "Spinach",
            answers: {
            }
        },
        {
            question: "Thin Crust",
            answers: {
            }
        },
    ];



    // Displays the quiz
    buildQuiz();

    // When submit is clicked, it will show the results
    submitButton.addEventListener("click", showResults);
})();

//{
//    question: "",
//    answers: {
//        a: "",
//        b: "",
//        c: ""
//    },
//    correctAnswer: ""
//},