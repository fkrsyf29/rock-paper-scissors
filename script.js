const rulesBtn = document.querySelector('.rules-btn').addEventListener('click', () => {
    rules.classList.add('active')
    document.querySelector('.choices').classList.toggle('active');
    document.querySelector('.overlay').style.display = 'block'
});
const closeBtn = document.querySelector('.close-btn').addEventListener('click', () => {
    rules.classList.remove('active');
    document.querySelector('.overlay').style.display = 'none'

});
const playAgain = document.querySelector('.play-again').addEventListener('click', () => {
    gameSection.style.backgroundImage = 'url(/images/bg-triangle.svg)'
    gameSection.style.opacity = '1'
    decisionSection.style.display = 'none'
    document.querySelector('.player-choice').style.boxShadow = 'none'
    document.querySelector('.house-choice').style.boxShadow = 'none'
})


const gameSection = document.querySelector('.game-section');
const playerDecision = document.querySelector('.player-choice');
const decisionSection = document.querySelector('.decision-section');
const rules = document.querySelector('.rules');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const decision = document.querySelector('.decision')

const choices = [
    '/images/assets/Rock.png',
    '/images/assets/Paper.png',
    '/images/assets/Scissors.png',
]

let count = 0

rock.addEventListener('click', () => {
    gameSection.style.backgroundImage = 'none'
    gameSection.style.opacity = '0'
    playerDecision.src = choices[0];
    playerDecision.classList.add('active');
    document.querySelector('.house-choice').classList.add('active');
    decision.classList.add('active');
    decisionSection.style.display = 'flex';
    document.querySelector('.player-decision h1').classList.add('active');
    document.querySelector('.house-decision h1').classList.add('active');

    setTimeout(indicateWinner, 2000)

    const housePick = choices[Math.floor(Math.random() * choices.length)]
    if (housePick === choices[0]) {
        document.querySelector('.verdict').innerHTML = 'It\'s a tie';
        document.querySelector('.house-choice').src = choices[0];
        document.querySelector('.play-again').style.color = 'hsl(229, 25%, 31%)';
    } else if (housePick === choices[1]) {
        document.querySelector('.verdict').innerHTML = 'You Lose';
        document.querySelector('.house-choice').src = choices[1];
        document.querySelector('.play-again').style.color = 'red';
    } else {
        document.querySelector('.verdict').innerHTML = 'You Win';
        document.querySelector('.house-choice').src = choices[2];
        document.querySelector('.play-again').style.color = 'green';
    }
})

function indicateWinner() {
    if (decision.classList.contains('active') && document.querySelector('.verdict').textContent.includes('You Win')) {
        document.querySelector('.player-choice').style.boxShadow = '0 0 0 60px hsla(214, 47%, 23%, .6), 0 0 0 120px hsla(214, 47%, 23%, .4), 0 0 0 180px hsla(214, 47%, 23%, .2)';
        count = count + 1;
        document.querySelector('.count').innerHTML = count;
    } else if (decision.classList.contains('active') && document.querySelector('.verdict').textContent.includes('You Lose')) {
        document.querySelector('.house-choice').style.boxShadow = '0 0 0 60px hsla(214, 47%, 23%, .6), 0 0 0 120px hsla(214, 47%, 23%, .4), 0 0 0 180px hsla(214, 47%, 23%, .2)'
        document.querySelector('.count').classList.remove('active');
    }
}

paper.addEventListener('click', () => {
    gameSection.style.backgroundImage = 'none';
    gameSection.style.opacity = '0';
    playerDecision.src = choices[1];
    playerDecision.classList.add('active');
    document.querySelector('.house-choice').classList.add('active');
    decision.classList.add('active');
    decisionSection.style.display = 'flex';
    document.querySelector('.player-decision h1').classList.add('active');
    document.querySelector('.house-decision h1').classList.add('active');

    setTimeout(indicateWinner, 2000)

    const housePick = choices[Math.floor(Math.random() * choices.length)]

    if (housePick === choices[0]) {
        document.querySelector('.verdict').innerHTML = 'You Win';
        document.querySelector('.house-choice').src = choices[0];
        document.querySelector('.play-again').style.color = 'green';
    } else if (housePick === choices[1]) {
        document.querySelector('.verdict').innerHTML = 'It\'s a tie';
        document.querySelector('.house-choice').src = choices[1];
        document.querySelector('.play-again').style.color = 'hsl(229, 25%, 31%)';
    } else {
        document.querySelector('.verdict').innerHTML = 'You Lose';
        document.querySelector('.house-choice').src = choices[2];
        document.querySelector('.play-again').style.color = 'red';
    }
})

scissors.addEventListener('click', () => {
    gameSection.style.backgroundImage = 'none';
    gameSection.style.opacity = '0';
    playerDecision.src = choices[2]
    decisionSection.style.display = 'flex';
    playerDecision.classList.add('active');
    document.querySelector('.house-choice').classList.add('active');
    decision.classList.add('active');
    document.querySelector('.player-decision h1').classList.add('active');
    document.querySelector('.house-decision h1').classList.add('active');

    setTimeout(indicateWinner, 2000)

    const housePick = choices[Math.floor(Math.random() * choices.length)]

    if (housePick === choices[0]) {
        document.querySelector('.verdict').innerHTML = 'You Lose';
        document.querySelector('.house-choice').src = choices[0];
        document.querySelector('.play-again').style.color = 'red';
    } else if (housePick === choices[1]) {
        document.querySelector('.verdict').innerHTML = 'You Win';
        document.querySelector('.house-choice').src = choices[1];
        document.querySelector('.play-again').style.color = 'green';
    } else {
        document.querySelector('.verdict').innerHTML = 'It\'s a tie';
        document.querySelector('.house-choice').src = choices[2];
        document.querySelector('.play-again').style.color = 'hsl(229, 25%, 31%)';
    }
})
