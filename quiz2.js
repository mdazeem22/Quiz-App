const correctAnswers = ['A','B','A','A'];

const form = document.querySelector('.quiz-form');
let goodLuck = document.querySelector('.goodluck')
// const backButton = document.querySelector('.back-button')
const quizSection = document.querySelector('.quiz-section')

const resultSection = document.querySelector('.result')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    

    const userAnswers = [
        form.q1.value, 
        form.q2.value, 
        form.q3.value, 
        form.q4.value, 
    ]

    // console.log(userAnswers);

    goodLuck.querySelector('h1').textContent = `Congrats` 
    let score = 0;

    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 25
        }

        let output = 0;

        const timer = setInterval(()=>{
            resultSection.querySelector('span').textContent = `${output}%`
            if(output === score){
                clearInterval(timer);

            }else{
                output++
            }

        },10)
        
    })


    resultSection.classList.remove("d-none");
    // backButton.classList.add("d-none");
    quizSection.classList.add("d-none");
    scrollTo(0,0);

    


})