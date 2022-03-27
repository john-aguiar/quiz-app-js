const quizData = [
    {
        question: 'Whats the smallest country in the world?',
        a: 'Monaco',
        b: 'Vatican City',
        c: 'Maldives',
        d: 'Malta',
        correct: 'b'
    }, {
        question: 'Who Said “I Think Therefore I Am”?',
        a: 'Plato',
        b: 'Aristotle',
        c: 'Kant',
        d: 'Descartes',
        correct: 'd'
    },
    {
        question: 'Which of these is the most popular gaming system?',
        a: 'Sony Playstation 5',
        b: 'Nintendo Switch',
        c: 'Xbox Series X',
        d: '3DS',
        correct: 'a'
    }, {
        question: 'Who is the President of Ukraine?',
        a: 'Isaac Herzog',
        b: 'Joe Biden',
        c: 'Volodymyr Zelensky',
        d: 'Vladimir Putin',
        correct: 'c'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Helicopters Terminals Motorboats Lamborginis',
        d: 'Jason Objact Notation',
        correct: 'a'
    }, {
        question: 'whats the biggest bone in the human body?',
        a: 'tibia',
        b: 'humerus',
        c: 'radius',
        d: 'femur',
        correct: 'd'
    }, {
        question: 'What Is the Boiling Point of Water in celsius? ',
        a: '100 °C',
        b: '120 °C',
        c: '140 °C',
        d: '150 °C',
        correct: 'a'
    }, {
        question: 'what is the name of the process that turns water to ice?',
        a: 'condensation',
        b: 'evaporation',
        c: 'freezing',
        d: 'melting',
        correct: 'c'
    }, {
        question: 'how many planets are there in our solar system',
        a: '7',
        b: '8',
        c: '9',
        d: '10',
        correct: 'b'
    }, {
        question: 'what is the name of the explosion at the death of a massive star',
        a: 'Supernova',
        b: 'BigBang',
        c: 'Blast',
        d: 'Neutron',
        correct: 'a'
    }
];

let currentQuiz = 0;
let correctAnswer = 0;
const questionEl = document.querySelector('#question')
const btn = document.querySelector('button')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const rightAnswer = document.getElementById('right-answer')
const list = document.querySelector('form')

btn.addEventListener('click', submitQuiz)

loadQuiz();

function loadQuiz(){
    currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerText = currentQuizData.b;                                                               /* Vou deixar das 2 formas para mostrar que são a mesma coisa */
    c_text.innerText = quizData[currentQuiz].c;
    d_text.innerHTML = quizData[currentQuiz].d;
    currentQuiz++;
    document.querySelector('h1').innerText = `Quiz App #${currentQuiz}`
}

// Função de enviar a resposta
function submitQuiz(){
    let selectedAnswer = document.querySelector('[name=answer]:checked').id; // Pega o id checkbox selecionado

    // Aumentar o contador de acertos
    if(selectedAnswer == currentQuizData.correct){
        correctAnswer++;
    } 

    // Passar para próxima pergunta
    if(currentQuiz < quizData.length){
        
    } else {
        document.querySelector('h1').innerHTML = ''
        document.querySelector('.quiz-container').innerHTML = `<h2 class="final-score">You answered correctly ${correctAnswer}/${quizData.length}</h2>`
    }
    list.reset()
    loadQuiz()
}

