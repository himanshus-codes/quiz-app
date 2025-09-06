// load quiz functionality if load == true

import { quizData } from "./data.js";

function main() {

    let questionIndex = 0;
    let correctAnswers = [];
    let userAnswers = [];

    // console.log(quizData)

    let qsn = document.querySelector('p')
    let submit = document.querySelector('#subbtn')
    let options = document.querySelectorAll('li')
    let optA = document.querySelector('#a')
    let optB = document.querySelector('#b')
    let optC = document.querySelector('#c')
    let optD = document.querySelector('#d')


    for (let i = 0; i < quizData.length; i++) {
        correctAnswers.push(quizData[i].correct)
    }

    console.log(correctAnswers)



    function loadQuizUI() {

        for (let opt of options) {
            submit.innerText = "Start"
            qsn.innerText = " Click 'Start' to begin with the Quiz"
            opt.style.listStyleType = 'none'
            opt.innerText = "";
        }

        submit.addEventListener('click', () => {
            console.log('Hi')

            startQuiz()
        })

    }

    loadQuizUI()



    function startQuiz() {


        submit.replaceWith(submit.cloneNode(true));
        submit = document.querySelector('#subbtn');

        for (let opt of options) {

            opt.style.listStyleType = 'circle'
        }

        submit.innerText = 'Submit'
        qsn.innerText = quizData[questionIndex].question
        optA.innerText = quizData[questionIndex].a
        optB.innerText = quizData[questionIndex].b
        optC.innerText = quizData[questionIndex].c
        optD.innerText = quizData[questionIndex].d



        submit.addEventListener('click', () => {

            questionIndex++


            if (questionIndex == quizData.length) {


                for (let i = 0; i < quizData.length; i++) {
                    if (userAnswers[i] == correctAnswers[i]) {
                        correctAnwerCount++
                    }

                    console.log(correctAnwerCount)
                }


                qsn.innerHTML = `Quiz Over <br> You Answered ${correctAnwerCount} correctly out of ${questionIndex} `
                console.log('quiz Over')
                // submit.disabled = true;

                for (let opt of options) {

                    opt.style.listStyleType = 'none'
                    opt.innerText = "";
                }


                console.log("inside submit start App", quizData[1].correct)
                submit.replaceWith(submit.cloneNode(true));
                submit = document.querySelector('#subbtn');
                submit.innerText = 'Reload'

                submit.addEventListener('click', () => {
                    console.log("Reloading Quiz");


                    // questionIndex = 0;
                    // correctAnswers = [];
                    // userAnswers = [];

                    main()
                })



            } else if (questionIndex < quizData.length) {

                console.log(questionIndex)

                qsn.innerText = quizData[questionIndex].question
                optA.innerText = quizData[questionIndex].a
                optB.innerText = quizData[questionIndex].b
                optC.innerText = quizData[questionIndex].c
                optD.innerText = quizData[questionIndex].d

            }
        })

    }


    let correctAnwerCount = 0;

    for (let opt of options) {

        opt.addEventListener('click', (e) => {

            // e.target.listStyleType = 'radio'
            if (e.target.id == quizData[questionIndex].correct) {

                userAnswers[questionIndex] = e.target.id
            }
        })
    }

}

main()


