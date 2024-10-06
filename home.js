function rollDice(){
    const numOfDice=document.getElementById("numOfDice").value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];
    for (let i=0; i < numOfDice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="diceImages/${value}.png">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML=images.join('');
}

//authentic.html
function generateCaptcha(){

const captchaLength = 8;
const incNumbers = true, incLowerAlphabets = true, incUpperAlphabets = true, incSymbols = true;

const numbers = '0123456789';
const lowerAlphabets = 'abcdefghijklmnopqrstuvwxyz';
const upperAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '!@#%&';

let allowedChar = '';

allowedChar += incNumbers ? numbers : '';
allowedChar += incLowerAlphabets ? lowerAlphabets : '';
allowedChar += incUpperAlphabets ? upperAlphabets : '';
allowedChar += incSymbols ? symbols : '';
console.log(allowedChar);

for(i=0; i<=captchaLength; i++){
    randomIndex = Math.floor(Math.random()*allowedChar.length);
    console.log(randomIndex);
}

}

generateCaptcha();