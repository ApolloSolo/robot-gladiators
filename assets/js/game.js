const playerName = prompt("Enter your robot's name.");
// ask player if they'd like to fight or run
const promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

const enemyNames = ["Roborto", "Magic Magna", "Titanium Tina"];
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      //const promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        const confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };

const startGame = function (){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (let i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0){
            alert(`Welcome to Robot Gladiators! Round ${i+1}`);
            enemyHealth = 50;
            let pickedEnemyName = enemyNames[i];
            fight(pickedEnemyName);
            playerHealth += playerHealth * 0.55;
        }
        else{
            alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
}

const endGame = function() {
    if(playerHealth > 0){
        window.alert("You win!")
    }
    else{
        window.alert("The game has now ended. Let's see how you did!");
    }

    let playAgainConfirm = confirm("Woild you like to play again?")

    if(playAgainConfirm){
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };

startGame();