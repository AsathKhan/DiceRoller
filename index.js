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

        //catptcha Expiry
        const expiryTime = new Date().getTime() + 5 * 60 * 1000;
        localStorage.setItem('captchaExpiry', expiryTime);

        window.location.href = 'home.html';
    }else{
        alert(`Captcha verification failed`);
    }
}

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >=12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").innerHTML = `${timeString} <span class="meridiem">${meridiem}</span>` ;
}
updateClock();
setInterval(updateClock, 1000);