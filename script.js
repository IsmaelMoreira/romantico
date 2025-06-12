// Objeto para armazenar as respostas da pessoa amada
const loveAnswers = {
    color: '', // Cor que representa nosso amor
    size: '',  // Tamanho do seu abraço acolhedor
    flower: '' // Flor que simboliza nosso romance
};

// Elementos do DOM
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const puzzleContainer = document.getElementById('puzzle-container');
const startBtn = document.getElementById('start-btn');

// Elementos das perguntas
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');

// Elementos de feedback
const feedback1 = document.getElementById('feedback1');
const feedback2 = document.getElementById('feedback2');
const feedback3 = document.getElementById('feedback3');
const colorFeedback = document.getElementById('color-feedback');
const heightFeedback = document.getElementById('height-feedback');
const flowerFeedback = document.getElementById('flower-feedback');

// Elementos de confirmação
const confirmBtn = document.getElementById('confirm-btn');
const changeBtn = document.getElementById('change-btn');

// Elementos do puzzle
const completionMessage = document.getElementById('completion-message');
const finalMessage = document.getElementById('final-message');
const heartTarget = document.getElementById('heart-target');

// Iniciar nossa jornada de amor
startBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    question1.classList.remove('hidden');
    quizContainer.style.animation = 'fadeIn 1s';
});

// Pergunta 1 - A cor do nosso amor
const colorOptions = document.querySelectorAll('.color-option');
const nextBtn1 = question1.querySelector('.next-btn');

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        loveAnswers.color = option.dataset.color;
        nextBtn1.disabled = false;
    });
});

nextBtn1.addEventListener('click', () => {
    question1.classList.add('hidden');
    const colorPoems = {
        '#ff0000': 'Vermelho como a paixão que arde em meu coração por você!',
        '#ff66b3': 'Rosa como os momentos doces que compartilhamos juntos!',
        '#0000ff': 'Azul como o céu que testemunha nosso amor infinito!',
        '#00ff00': 'Verde como a esperança de um futuro ao seu lado!',
        '#ffff00': 'Amarelo como a luz que você traz para minha vida!',
        '#ffa500': 'Laranja como o entusiasmo que sinto quando te vejo!'
    };
    colorFeedback.textContent = colorPoems[loveAnswers.color] || 'Essa cor é tão especial quanto o seu sorriso!';
    feedback1.classList.remove('hidden');
});

// Feedback 1 para Pergunta 2
feedback1.querySelector('.next-btn').addEventListener('click', () => {
    feedback1.classList.add('hidden');
    question2.classList.remove('hidden');
});

// Pergunta 2 - A medida do seu abraço
const heightInput = document.getElementById('height-input');
const heightValue = document.getElementById('height-value');
const nextBtn2 = question2.querySelector('.next-btn');

heightInput.addEventListener('input', () => {
    const height = heightInput.value;
    heightValue.textContent = `${height}cm`;
    loveAnswers.size = `${height}cm`;
});

nextBtn2.addEventListener('click', () => {
    question2.classList.add('hidden');
    const height = parseInt(heightInput.value);
    let romanticMessage;

    if (height < 155) {
        romanticMessage = `Seus ${height}cm são perfeitos para eu te envolver em meus braços e sussurrar "eu te amo" no seu ouvido!`;
    } else if (height < 170) {
        romanticMessage = `Com ${height}cm, você se encaixa perfeitamente no meu abraço, como se fôssemos feitos um para o outro!`;
    } else {
        romanticMessage = `Seus ${height}cm de elegância me fazem olhar para cima e admirar a mulher incrível que você é!`;
    }

    heightFeedback.textContent = romanticMessage;
    feedback2.classList.remove('hidden');
});

// Feedback 2 para Pergunta 3
feedback2.querySelector('.next-btn').addEventListener('click', () => {
    feedback2.classList.add('hidden');
    question3.classList.remove('hidden');
});

// Pergunta 3 - A flor do nosso romance
const flowerSelect = document.getElementById('flower-select');
const nextBtn3 = question3.querySelector('.next-btn');

flowerSelect.addEventListener('change', () => {
    if (flowerSelect.value) {
        nextBtn3.disabled = false;
        loveAnswers.flower = flowerSelect.value;
    } else {
        nextBtn3.disabled = true;
    }
});

nextBtn3.addEventListener('click', () => {
    question3.classList.add('hidden');
    const flowerRomance = {
        'rose': 'A rosa vermelha, símbolo do nosso amor ardente e eterno!',
        'sunflower': 'O girassol, que como eu, se volta para você, minha luz!',
        'daisy': 'A margarida, pura e simples como o nosso amor verdadeiro!',
        'tulip': 'A tulipa, elegante e única como cada momento ao seu lado!',
        'lily': 'O lírio, majestoso como o respeito e admiração que tenho por você!'
    };
    flowerFeedback.textContent = flowerRomance[loveAnswers.flower] || 'Essa flor é tão bela quanto o seu coração!';
    feedback3.classList.remove('hidden');
});

// Confirmação do nosso amor
confirmBtn.addEventListener('click', () => {
    quizContainer.classList.add('hidden');
    puzzleContainer.classList.remove('hidden');
    prepareOurLovePuzzle();
});

changeBtn.addEventListener('click', () => {
    feedback3.classList.add('hidden');
    question1.classList.remove('hidden');
});

// Preparar o quebra-cabeça do nosso amor
function prepareOurLovePuzzle() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    pieces.forEach(piece => {
        piece.style.backgroundColor = loveAnswers.color;
    });
    setupLoveConnection();
}

// Sistema de conexão amorosa (drag and drop)
function setupLoveConnection() {
    const pieces = document.querySelectorAll('.puzzle-piece');

    pieces.forEach(piece => {
        piece.addEventListener('dragstart', dragStartLove);
    });

    heartTarget.addEventListener('dragover', dragOverLove);
    heartTarget.addEventListener('dragenter', dragEnterLove);
    heartTarget.addEventListener('dragleave', dragLeaveLove);
    heartTarget.addEventListener('drop', dropLove);
}

let lovedPiece = null;

function dragStartLove(e) {
    lovedPiece = e.target;
    setTimeout(() => {
        e.target.style.opacity = '0.5';
    }, 0);
}

function dragOverLove(e) {
    e.preventDefault();
}

function dragEnterLove(e) {
    e.preventDefault();
    e.target.classList.add('heartbeat');
}

function dragLeaveLove(e) {
    e.target.classList.remove('heartbeat');
}

function dropLove(e) {
    e.preventDefault();
    e.target.classList.remove('heartbeat');

    if (lovedPiece) {
        e.target.appendChild(lovedPiece);
        lovedPiece.style.opacity = '1';
        checkLoveCompletion();
    }
}

// Verificar se nosso amor está completo
function checkLoveCompletion() {
    if (heartTarget.querySelectorAll('.puzzle-piece').length === 3) {
        setTimeout(() => {
            const pieces = heartTarget.querySelectorAll('.puzzle-piece');
            pieces.forEach(piece => {
                piece.style.opacity = '0';
            });

            const ourHeart = document.createElement('div');
            ourHeart.className = 'our-heart';
            Object.assign(ourHeart.style, {
                backgroundColor: loveAnswers.color,
                opacity: '0',
                width: '100px',
                height: '95px',
                zIndex: '10',
                clipPath: 'path("M50,30 C50,0 100,0 100,30 C100,55 75,75 50,95 C25,75 0,55 0,30 C0,0 50,0 50,30 Z")',
                transition: 'opacity 1.5s ease-in-out',
                margin: 'auto'
            });
            heartTarget.appendChild(ourHeart);

            setTimeout(() => {
                ourHeart.style.opacity = '1';

                setTimeout(() => {
                    createRomanticConfetti();
                    revealHeartfeltMessage();
                }, 2000);
            }, 500);
        }, 1000);
    }
}

// Mensagem final cheia de amor
function revealHeartfeltMessage() {
    completionMessage.classList.add('hidden');
    finalMessage.innerHTML = `
        <h2>Nosso Amor Está Completo 💖</h2>
        <p>Com a cor <strong>${loveAnswers.color}</strong>, um abraço de <strong>${loveAnswers.size}</strong> e a beleza da flor <strong>${loveAnswers.flower}</strong>,</p>
        <p>construímos juntos algo único, especial e eterno. Te amo! 🌹✨</p>
    `;
    finalMessage.classList.remove('hidden');
}

// Confetes românticos
function createRomanticConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = loveAnswers.color;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}// Objeto para armazenar as respostas da pessoa amada
const loveAnswers = {
    color: '', // Cor que representa nosso amor
    size: '',  // Tamanho do seu abraço acolhedor
    flower: '' // Flor que simboliza nosso romance
};

// Elementos do DOM
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const puzzleContainer = document.getElementById('puzzle-container');
const startBtn = document.getElementById('start-btn');

// Elementos das perguntas
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');

// Elementos de feedback
const feedback1 = document.getElementById('feedback1');
const feedback2 = document.getElementById('feedback2');
const feedback3 = document.getElementById('feedback3');
const colorFeedback = document.getElementById('color-feedback');
const heightFeedback = document.getElementById('height-feedback');
const flowerFeedback = document.getElementById('flower-feedback');

// Elementos de confirmação
const confirmBtn = document.getElementById('confirm-btn');
const changeBtn = document.getElementById('change-btn');

// Elementos do puzzle
const completionMessage = document.getElementById('completion-message');
const finalMessage = document.getElementById('final-message');
const heartTarget = document.getElementById('heart-target');

// Iniciar nossa jornada de amor
startBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    question1.classList.remove('hidden');
    quizContainer.style.animation = 'fadeIn 1s';
});

// Pergunta 1 - A cor do nosso amor
const colorOptions = document.querySelectorAll('.color-option');
const nextBtn1 = question1.querySelector('.next-btn');

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        loveAnswers.color = option.dataset.color;
        nextBtn1.disabled = false;
    });
});

nextBtn1.addEventListener('click', () => {
    question1.classList.add('hidden');
    const colorPoems = {
        '#ff0000': 'Vermelho como a paixão que arde em meu coração por você!',
        '#ff66b3': 'Rosa como os momentos doces que compartilhamos juntos!',
        '#0000ff': 'Azul como o céu que testemunha nosso amor infinito!',
        '#00ff00': 'Verde como a esperança de um futuro ao seu lado!',
        '#ffff00': 'Amarelo como a luz que você traz para minha vida!',
        '#ffa500': 'Laranja como o entusiasmo que sinto quando te vejo!'
    };
    colorFeedback.textContent = colorPoems[loveAnswers.color] || 'Essa cor é tão especial quanto o seu sorriso!';
    feedback1.classList.remove('hidden');
});

// Feedback 1 para Pergunta 2
feedback1.querySelector('.next-btn').addEventListener('click', () => {
    feedback1.classList.add('hidden');
    question2.classList.remove('hidden');
});

// Pergunta 2 - A medida do seu abraço
const heightInput = document.getElementById('height-input');
const heightValue = document.getElementById('height-value');
const nextBtn2 = question2.querySelector('.next-btn');

heightInput.addEventListener('input', () => {
    const height = heightInput.value;
    heightValue.textContent = `${height}cm`;
    loveAnswers.size = `${height}cm`;
});

nextBtn2.addEventListener('click', () => {
    question2.classList.add('hidden');
    const height = parseInt(heightInput.value);
    let romanticMessage;

    if (height < 155) {
        romanticMessage = `Seus ${height}cm são perfeitos para eu te envolver em meus braços e sussurrar "eu te amo" no seu ouvido!`;
    } else if (height < 170) {
        romanticMessage = `Com ${height}cm, você se encaixa perfeitamente no meu abraço, como se fôssemos feitos um para o outro!`;
    } else {
        romanticMessage = `Seus ${height}cm de elegância me fazem olhar para cima e admirar a mulher incrível que você é!`;
    }

    heightFeedback.textContent = romanticMessage;
    feedback2.classList.remove('hidden');
});

// Feedback 2 para Pergunta 3
feedback2.querySelector('.next-btn').addEventListener('click', () => {
    feedback2.classList.add('hidden');
    question3.classList.remove('hidden');
});

// Pergunta 3 - A flor do nosso romance
const flowerSelect = document.getElementById('flower-select');
const nextBtn3 = question3.querySelector('.next-btn');

flowerSelect.addEventListener('change', () => {
    if (flowerSelect.value) {
        nextBtn3.disabled = false;
        loveAnswers.flower = flowerSelect.value;
    } else {
        nextBtn3.disabled = true;
    }
});

nextBtn3.addEventListener('click', () => {
    question3.classList.add('hidden');
    const flowerRomance = {
        'rose': 'A rosa vermelha, símbolo do nosso amor ardente e eterno!',
        'sunflower': 'O girassol, que como eu, se volta para você, minha luz!',
        'daisy': 'A margarida, pura e simples como o nosso amor verdadeiro!',
        'tulip': 'A tulipa, elegante e única como cada momento ao seu lado!',
        'lily': 'O lírio, majestoso como o respeito e admiração que tenho por você!'
    };
    flowerFeedback.textContent = flowerRomance[loveAnswers.flower] || 'Essa flor é tão bela quanto o seu coração!';
    feedback3.classList.remove('hidden');
});

// Confirmação do nosso amor
confirmBtn.addEventListener('click', () => {
    quizContainer.classList.add('hidden');
    puzzleContainer.classList.remove('hidden');
    prepareOurLovePuzzle();
});

changeBtn.addEventListener('click', () => {
    feedback3.classList.add('hidden');
    question1.classList.remove('hidden');
});

// Preparar o quebra-cabeça do nosso amor
function prepareOurLovePuzzle() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    pieces.forEach(piece => {
        piece.style.backgroundColor = loveAnswers.color;
    });
    setupLoveConnection();
}

// Sistema de conexão amorosa (drag and drop)
function setupLoveConnection() {
    const pieces = document.querySelectorAll('.puzzle-piece');

    pieces.forEach(piece => {
        piece.addEventListener('dragstart', dragStartLove);
    });

    heartTarget.addEventListener('dragover', dragOverLove);
    heartTarget.addEventListener('dragenter', dragEnterLove);
    heartTarget.addEventListener('dragleave', dragLeaveLove);
    heartTarget.addEventListener('drop', dropLove);
}

let lovedPiece = null;

function dragStartLove(e) {
    lovedPiece = e.target;
    setTimeout(() => {
        e.target.style.opacity = '0.5';
    }, 0);
}

function dragOverLove(e) {
    e.preventDefault();
}

function dragEnterLove(e) {
    e.preventDefault();
    e.target.classList.add('heartbeat');
}

function dragLeaveLove(e) {
    e.target.classList.remove('heartbeat');
}

function dropLove(e) {
    e.preventDefault();
    e.target.classList.remove('heartbeat');

    if (lovedPiece) {
        e.target.appendChild(lovedPiece);
        lovedPiece.style.opacity = '1';
        checkLoveCompletion();
    }
}

// Verificar se nosso amor está completo
function checkLoveCompletion() {
    if (heartTarget.querySelectorAll('.puzzle-piece').length === 3) {
        setTimeout(() => {
            const pieces = heartTarget.querySelectorAll('.puzzle-piece');
            pieces.forEach(piece => {
                piece.style.opacity = '0';
            });

            const ourHeart = document.createElement('div');
            ourHeart.className = 'our-heart';
            Object.assign(ourHeart.style, {
                backgroundColor: loveAnswers.color,
                opacity: '0',
                width: '100px',
                height: '95px',
                zIndex: '10',
                clipPath: 'path("M50,30 C50,0 100,0 100,30 C100,55 75,75 50,95 C25,75 0,55 0,30 C0,0 50,0 50,30 Z")',
                transition: 'opacity 1.5s ease-in-out',
                margin: 'auto'
            });
            heartTarget.appendChild(ourHeart);

            setTimeout(() => {
                ourHeart.style.opacity = '1';

                setTimeout(() => {
                    createRomanticConfetti();
                    revealHeartfeltMessage();
                }, 2000);
            }, 500);
        }, 1000);
    }
}

// Mensagem final cheia de amor
function revealHeartfeltMessage() {
    completionMessage.classList.add('hidden');
    finalMessage.innerHTML = `
        <h2>Nosso Amor Está Completo 💖</h2>
        <p>Com a cor <strong>${loveAnswers.color}</strong>, um abraço de <strong>${loveAnswers.size}</strong> e a beleza da flor <strong>${loveAnswers.flower}</strong>,</p>
        <p>construímos juntos algo único, especial e eterno. Te amo! 🌹✨</p>
    `;
    finalMessage.classList.remove('hidden');
}

// Confetes românticos
function createRomanticConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = loveAnswers.color;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}
