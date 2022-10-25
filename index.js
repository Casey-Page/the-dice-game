function rollDice (){   
     
    // Generate random first dice value
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice .dice-one').setAttribute('src' ,'images/dice' + randomNumber1 + '.png');

    // Generate random second dice value
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice .dice-two').setAttribute('src' ,'images/dice' + randomNumber2 + '.png');

    // Conditional logic to determine winner or draw
    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerHTML = "Player 2 Wins!";
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector('h1').innerHTML = "It's a Draw!";
    } 
}