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
let currentCaptcha ='';
function generateCaptcha(){

const captchaLength = 6;
const   incNumbers = true, 
        incLowerAlphabets = true, 
        incUpperAlphabets = true, 
        incSymbols = true;

const numbers = '0123456789';
const lowerAlphabets = 'abcdefghijklmnopqrstuvwxyz';
const upperAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '!@#%&';

let allowedChar = '';

allowedChar += incNumbers ? numbers : '';
allowedChar += incLowerAlphabets ? lowerAlphabets : '';
allowedChar += incUpperAlphabets ? upperAlphabets : '';
allowedChar += incSymbols ? symbols : '';

let captcha = '';

for(i=0; i<captchaLength; i++){
    randomIndex = Math.floor(Math.random()*allowedChar.length);
    captcha += allowedChar[randomIndex];
}     
    document.getElementById('resultCaptcha').textContent = captcha;
    currentCaptcha = captcha; 
}


function verify(){
    const verifyCaptcha = document.getElementById('verifyCaptcha').value;
    if (verifyCaptcha === ''){
        alert('Please enter the captcha');
        return;
    }
    if (verifyCaptcha === currentCaptcha){
        //flag
        localStorage.setItem('captchaVerified', 'true');
        window.location.href = 'home.html';
    }else{
        alert(`Captcha verification failed`);
    }
}
