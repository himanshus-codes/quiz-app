// load quiz functionality if load == true

import { quizData } from "./data.js";

console.log("at the top", quizData[1].correct)

function main() {



    let questionIndex = 0;
    let correctAnswers = [];
    let userAnswers = [];

    console.log(quizData)


    let qsn = document.querySelector('p')
    let submit = document.querySelector('#subbtn')

    let options = document.querySelectorAll('li')
    let optA = document.querySelector('#a')
    let optB = document.querySelector('#b')
    let optC = document.querySelector('#c')
    let optD = document.querySelector('#d')

    console.dir(optA)
    console.log(qsn.innerText)
    console.log(options[0].innerText)




    for (let i = 0; i < quizData.length; i++) {
        correctAnswers.push(quizData[i].correct)
    }

    console.log(correctAnswers)



    function beforeStart() {



        for (let opt of options) {
            submit.innerText = "Start"
            qsn.innerText = " Click 'Start' to begin with the Quiz"
            opt.style.listStyleType = 'none'
            opt.innerText = "";
        }

        submit.addEventListener('click', () => {
            console.log('Hi')

            startApp()
        })

        console.log("inside before start", quizData[1].correct)

    }

    beforeStart()



    function startApp() {


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

    console.log("at the bottom", quizData[1].correct)
    console.log("at the bottom", quizData)

    let correctAnwerCount = 0;

    for (let opt of options) {
        console.log("at the bottom", quizData)
        opt.addEventListener('click', (e) => {
            // console.log(e.target.innerText)
            console.log(questionIndex)
            console.log("at the bottom", quizData)
            console.log(quizData[1].correct)
            e.target.listStyleType = 'radio'
            if (e.target.id == quizData[questionIndex].correct) {

                console.log("at the bottom", quizData)
                userAnswers[questionIndex] = e.target.id
            }
        })
    }

}

main()


