(function(){
    'use strict';

        const startGame = document.getElementById('startgame');
        const gameControl = document.getElementById('gamecontrol');
        const game = document.getElementById('game');
        const score = document.getElementById('score');
        const actionArea = document.getElementById('actions');
        const resetscore = new Audio('media/resetscore.mp3');
        const applause = new Audio('media/applause.mp3');

        const gameData = {
            dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
            players: ['Player 1', 'Player 2'],
            score: [0,0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 29
            
        };

        startGame.addEventListener('click', function(){
            gameData.index = Math.round(Math.random());
            gameControl.innerHTML = '<h2>The Game Has Started</h2>';
            gameControl.innerHTML += '<button id= "quit">Quit game</button>';

            document.getElementById('quit').addEventListener('click', function(){
                location.reload();
            });

            console.log(gameData.index);
            setUpTurn(); //call setupturn function here
        });
        //step 1: randomly select who goes first
        function setUpTurn() {
            game.innerHTML = `<p><h3>Roll the dice for ${gameData.players[gameData.index]}</h3></p>`;
            actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
            document.getElementById('roll').addEventListener('click', function(){
                throwDice();
            });
         
        //step 2: selected player goes first and game has begun
        function throwDice() {
            actionArea.innerHTML = '';
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;
            game.innerHTML = `<p><h3>Roll the dice for ${gameData.players[gameData.index]}</h3></p>`;
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                                <img src="${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum= gameData.roll1 + gameData.roll2;
            console.log(gameData);

            // if two 1's are rolled
            if(gameData.roll1 === 1 || gameData.roll2 === 1) {
                game.innerHTML += '<p>Oh no! You rolled a one! :(</p>';
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                
                resetscore.play();
                showCurrentScore();
                
                setTimeout(setUpTurn, 2000);
            }

            //if neither die is a 1
            else {
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Roll again</button> <button id="pass">Pass</button>';

                document.getElementById('rollagain').addEventListener('click', function(){
                    setUpTurn();
                });

                document.getElementById('pass').addEventListener('click', function() {
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });

                checkWinningCondition();
            }
        }
            //check which player wins
            function checkWinningCondition(){
                if(gameData.score[gameData.index] > gameData.gameEnd){
                    score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

                    applause.play();
                    actionArea.innerHTML = '';
                    document.getElementById('quit').innerHTML = "Play again";
                }
                else {
                    showCurrentScore();
                }

            }

            //score counted for both players
            function showCurrentScore(){
                score.innerHTML = `<p>Current Score: <br> ${gameData.players[0]}: <strong>${gameData.score[0]}</strong> <br>${gameData.players[1]}: <strong>${gameData.score[1]}</strong></p>`;
            }
        }
}());