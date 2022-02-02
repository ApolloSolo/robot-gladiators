const playerName = prompt("Enter your robot's name.");
// ask player if they'd like to fight or run
const promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
const randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};
let playerHealth = randomNumber(75, 110);
let playerAttack = 10;
let playerMoney = randomNumber(40, 60);

const enemyNames = ["Roborto", "Magic Magna", "Titanium Tina"];
let enemyHealth = randomNumber(40, 60);
let enemyAttack = 12;

const damage = randomNumber(playerAttack - 3, playerAttack)

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
      enemyHealth = Math.max(0, enemyHealth - damage);
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
      playerHealth = Math.max(0, playerHealth - damage);;
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
            // if player is still alive and we're not at the last enemy in the array
            if(playerHealth > 0 && i < enemyNames.length - 1){
              let storeConfirm = confirm("This fight is over. Would you like to enter the shop?")

              if(storeConfirm){
                shop();
              }
            }
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

const shop = function() {
  let shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

  switch(shopOptionPrompt){
    case "REFILL":
    case "refill":
      if(playerMoney >= 7){
        alert("Refilling player's health by 20 for $7");

        //increase player health and decrease money
        playerHealth += 20;
        playerMoney -= 7;
      }
      else{
        alert("You don't have enough money to refill your health.")
      }
      
      break;
    case "UPGRADE":
    case "upgrade":
      if(playerMoney >= 7){
        alert("Upgrading player's attack by 6 for $7");
      
        //Increase attack and decrease money
        playerAttack += 6;
        playerMoney -= 7;
      }
      else{
        alert("You don't have enough money to upgrade your attack power.")
      }
      
      break;
    case "LEAVE":
    case "leave":
      alert("Leaving the store");
      break;
    default:
      alert("You did not pick a valid option. Try again.");

      shop();
      break;
  }
}

startGame();