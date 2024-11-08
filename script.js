const B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const I = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const N = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const G = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const O = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

let bDrawn = [];
let iDrawn = [];
let nDrawn = [0];
let gDrawn = [];
let oDrawn = [];

let slotB1 = document.querySelector('.value-B1');
let slotB2 = document.querySelector('.value-B2');
let slotB3 = document.querySelector('.value-B3');
let slotB4 = document.querySelector('.value-B4');
let slotB5 = document.querySelector('.value-B5');

let slotI1 = document.querySelector('.value-I1');
let slotI2 = document.querySelector('.value-I2');
let slotI3 = document.querySelector('.value-I3');
let slotI4 = document.querySelector('.value-I4');
let slotI5 = document.querySelector('.value-I5');

let slotN1 = document.querySelector('.value-N1');
let slotN2 = document.querySelector('.value-N2');
// let slotFree = document.querySelector('.free');
let slotN4 = document.querySelector('.value-N4');
let slotN5 = document.querySelector('.value-N5');

let slotG1 = document.querySelector('.value-G1');
let slotG2 = document.querySelector('.value-G2');
let slotG3 = document.querySelector('.value-G3');
let slotG4 = document.querySelector('.value-G4');
let slotG5 = document.querySelector('.value-G5');

let slotO1 = document.querySelector('.value-O1');
let slotO2 = document.querySelector('.value-O2');
let slotO3 = document.querySelector('.value-O3');
let slotO4 = document.querySelector('.value-O4');
let slotO5 = document.querySelector('.value-O5');


//Start Button para sa bingo cards
let startGame = document.getElementById('start_btn');
let getStartButton = document.querySelector('.start-holder');
let getDrawButton = document.querySelector('.draw-holder');
let getRestart = document.getElementById('play-again-btn');

getRestart.addEventListener('click', ()=> {
  location.reload();
})



startGame.addEventListener('click',()=>{
  while (bDrawn.length != 5){
    gameStart()
    getStartButton.style.display = 'none';
    getDrawButton.style.display = 'flex';
  }
  
})


function gameStart() {

let randomIndex = Math.floor(Math.random() * 15);
let drawAnyB = B[randomIndex]; 
let drawAnyI = I[randomIndex];
let drawAnyN = N[randomIndex];
let drawAnyG = G[randomIndex];
let drawAnyO = O[randomIndex];

  if (bDrawn.length == 0) {
    bDrawn.push(drawAnyB);
  }
  else if (bDrawn.length != 0) {
    if (bDrawn.includes(drawAnyB)) { 
    }
    else { 
     bDrawn.push(drawAnyB); 
    } 
    slotB1.innerHTML = bDrawn[0];
    slotB2.innerHTML = bDrawn[1];
    slotB3.innerHTML = bDrawn[2];
    slotB4.innerHTML = bDrawn[3];
    slotB5.innerHTML = bDrawn[4];
  }

  if (iDrawn.length == 0) {
    iDrawn.push(drawAnyI);
  }
  else if (iDrawn.length != 0) {
    if (iDrawn.includes(drawAnyI)) {
    }
    else {
      iDrawn.push(drawAnyI);
    }
    slotI1.innerHTML = iDrawn[0];
    slotI2.innerHTML = iDrawn[1];
    slotI3.innerHTML = iDrawn[2];
    slotI4.innerHTML = iDrawn[3];
    slotI5.innerHTML = iDrawn[4];
  }

  if (nDrawn.length == 0) {
    nDrawn.push(drawAnyN);
  }
  else if (nDrawn.length != 0) {
    if (nDrawn.includes(drawAnyN)) {
    }
    else {
      nDrawn.push(drawAnyN);
    }
    slotN1.innerHTML = nDrawn[1];
    slotN2.innerHTML = nDrawn[2];
    slotN4.innerHTML = nDrawn[3];
    slotN5.innerHTML = nDrawn[4];
  }

  if (gDrawn.length == 0) {
    gDrawn.push(drawAnyG);
  }
  else if (gDrawn.length != 0) {
    if (gDrawn.includes(drawAnyG)) {
    }
    else {
      gDrawn.push(drawAnyG);
    }
    slotG1.innerHTML = gDrawn[0];
    slotG2.innerHTML = gDrawn[1];
    slotG3.innerHTML = gDrawn[2];
    slotG4.innerHTML = gDrawn[3];
    slotG5.innerHTML = gDrawn[4];
  }

  if (oDrawn.length == 0) {
    oDrawn.push(drawAnyO);
  }
  else if (oDrawn.length != 0) {
    if (oDrawn.includes(drawAnyO)) {
    }
    else {
      oDrawn.push(drawAnyO);
    }
    slotO1.innerHTML = oDrawn[0];
    slotO2.innerHTML = oDrawn[1];
    slotO3.innerHTML = oDrawn[2];
    slotO4.innerHTML = oDrawn[3];
    slotO5.innerHTML = oDrawn[4];
  }
}

let getShowHistory = document.querySelector('.draw-button');
let getDrawWrapper = document.querySelector('.draw-wrapper');
let getDrawContainer = document.querySelector('.draw-container');
let getScoreContainer = document.querySelector('.score-container');
let getReturnButton = document.getElementById('return-btn');

getReturnButton.addEventListener('click', () => {
  getDrawContainer.style.width = '30%';
  getScoreContainer.style.width = '30%';
  getDrawWrapper.style.display = 'none';
  getShowHistory.style.display = 'flex';
})



getShowHistory.addEventListener('click', ()=>{
  getDrawContainer.style.width = '40%';
  getScoreContainer.style.width = '20%';
  getDrawWrapper.style.display = 'flex';
  getShowHistory.style.display = 'none';
})

let bBall = [];
let iBall = [];
let nBall = [0];
let gBall = [];
let oBall = [];

let letterIn = document.querySelector('.winning-letter');
let numberIn = document.querySelector('.winning-number');
let historyBIn = document.querySelector('.nabolang-B');
let historyIIn = document.querySelector('.nabolang-I');
let historyNIn = document.querySelector('.nabolang-N');
let historyGIn = document.querySelector('.nabolang-G');
let historyOIn = document.querySelector('.nabolang-O');


//Draw button
let drawWinningNumbers = document.getElementById('draw-btn');

const bubunutin = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
                  31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
                  61,62,63,64,65,66,67,68,69,70,71,72,73,73,74,75];
const nabunotNa = [];
const bawalUmulit = [];
const nabunotB = [];
const nabunotI = [];
const nabunotN = [];
const nabunotG = [];
const nabunotO = [];
const shadedSlot = [];

let getWinnerContainer = document.querySelector('.winner-container');
let getBackground = document.getElementsByTagName("body")[0];

let getScore = document.querySelector('.score-wrapper');

let getEnter = document.getElementById('enter-btn');
let getEnterClose = document.querySelector('.enter-name');
let getNameValue = document.getElementById('text');
let getTextShake = document.getElementById('text-shake');

getEnter.addEventListener('click', ()=> {
  if (getNameValue.value == ' ' || getNameValue.value == ''){
    getTextShake.style.animation = 'shake 1s infinite';
  } else {
    getBackground.style.backdropFilter = 'blur(8px)';
    getEnterClose.style.display = 'none';
  }

})

drawWinningNumbers.addEventListener('click', ()=> {
  getScore.style.display = 'flex';
  if (nabunotNa.length != 75) {
    letsDraw();
  }
  if (shadedSlot.length == 24) {
    getBackground.style.backdropFilter = 'none';
    getWinnerContainer.style.display = 'flex';
  }
  })

function letsDraw() {
  let randomBunotIndex = Math.floor(Math.random() * bubunutin.length);
  let randomBunotNumber = bubunutin[randomBunotIndex];

  if(nabunotNa.length == 0){
    nabunotNa.push(randomBunotNumber);
    let spliceBawalMaulit = bubunutin.splice(randomBunotIndex, 1);
    bawalUmulit.push(spliceBawalMaulit);

  } else if (nabunotNa.length != 0){
    if (nabunotNa.includes(randomBunotNumber)) {
      // let spliceBawalMaulit = bubunutin.splice(randomBunotIndex, 1);
      // bawalUmulit.push(spliceBawalMaulit);
    }

    else {
      nabunotNa.push(randomBunotNumber);
      let spliceBawalMaulit = bubunutin.splice(randomBunotIndex, 1);
      bawalUmulit.push(spliceBawalMaulit);
    }
  }

  if(randomBunotNumber >= 1 && randomBunotNumber <= 15){
    nabunotB.push(randomBunotNumber);
    historyBIn.innerHTML = "B: " + nabunotB;
    letterIn.innerHTML = "B";
    numberIn.innerHTML = randomBunotNumber;
    
    if(bDrawn.includes(randomBunotNumber)){
      if(bDrawn[0] == randomBunotNumber) {
        document.getElementById('letter-B1').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (bDrawn[1] == randomBunotNumber) {
        document.getElementById('letter-B2').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }   
      else if (bDrawn[2] == randomBunotNumber) {
        document.getElementById('letter-B3').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (bDrawn[3] == randomBunotNumber) {
        document.getElementById('letter-B4').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (bDrawn[4] == randomBunotNumber) {
        document.getElementById('letter-B5').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }            
    }
  }

  else if (randomBunotNumber >= 16 && randomBunotNumber <= 30) {
    nabunotI.push(randomBunotNumber);
    historyIIn.innerHTML = "I: "+ nabunotI;
    letterIn.innerHTML = "I";
    numberIn.innerHTML = randomBunotNumber;

    if (iDrawn.includes(randomBunotNumber)) {
      if (iDrawn[0] == randomBunotNumber) {
        document.getElementById('letter-I1').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (iDrawn[1] == randomBunotNumber) {
        document.getElementById('letter-I2').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (iDrawn[2] == randomBunotNumber) {
        document.getElementById('letter-I3').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (iDrawn[3] == randomBunotNumber) {
        document.getElementById('letter-I4').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (iDrawn[4] == randomBunotNumber) {
        document.getElementById('letter-I5').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
    }
  }

  else if (randomBunotNumber >= 31 && randomBunotNumber <= 45) {
    nabunotN.push(randomBunotNumber);
    historyNIn.innerHTML = "N: " + nabunotN;
    letterIn.innerHTML = "N";
    numberIn.innerHTML = randomBunotNumber;

    if (nDrawn.includes(randomBunotNumber)) {
      if (nDrawn[1] == randomBunotNumber) {
        document.getElementById('letter-N1').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (nDrawn[2] == randomBunotNumber) {
        document.getElementById('letter-N2').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (nDrawn[3] == randomBunotNumber) {
        document.getElementById('letter-N4').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (nDrawn[4] == randomBunotNumber) {
        document.getElementById('letter-N5').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
    }
  }

  else if (randomBunotNumber >= 46 && randomBunotNumber <= 60) {
    nabunotG.push(randomBunotNumber);
    historyGIn.innerHTML = "G: " + nabunotG;
    letterIn.innerHTML = "G";
    numberIn.innerHTML = randomBunotNumber;

    if (gDrawn.includes(randomBunotNumber)) {
      if (gDrawn[0] == randomBunotNumber) {
        document.getElementById('letter-G1').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (gDrawn[1] == randomBunotNumber) {
        document.getElementById('letter-G2').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (gDrawn[2] == randomBunotNumber) {
        document.getElementById('letter-G3').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (gDrawn[3] == randomBunotNumber) {
        document.getElementById('letter-G4').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (gDrawn[4] == randomBunotNumber) {
        document.getElementById('letter-G5').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
    }
  }

  else if (randomBunotNumber >= 61 && randomBunotNumber <= 75) {
    nabunotO.push(randomBunotNumber);
    historyOIn.innerHTML = "O: " + nabunotO;
    letterIn.innerHTML = "O";
    numberIn.innerHTML = randomBunotNumber;

    if (oDrawn.includes(randomBunotNumber)) {
      if (oDrawn[0] == randomBunotNumber) {
        document.getElementById('letter-O1').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (oDrawn[1] == randomBunotNumber) {
        document.getElementById('letter-O2').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (oDrawn[2] == randomBunotNumber) {
        document.getElementById('letter-O3').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (oDrawn[3] == randomBunotNumber) {
        document.getElementById('letter-O4').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
      else if (oDrawn[4] == randomBunotNumber) {
        document.getElementById('letter-O5').style.backgroundColor = "#F9E0BB";
        shadedSlot.push(randomBunotNumber);
      }
    }
  }
}
