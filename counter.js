// Counter

let counterDitector = document.getElementById('counterDitector');
let countElements = document.getElementsByClassName('count-container');
let countNumbers = [];
let countStatus = false;
let sticky2 = counterDitector.offsetTop;
let ms = 200; // milisecond
for (let i = 0; i< countElements.length; i++) {
    countNumbers.push(parseInt(countElements[i].innerText));
    countElements[i].innerText = 0;
}
function countIncreaserNums() {
    myArray = [];
    for (let i = 0; i < countNumbers.length; ++i) {
        let j = Math.round(countNumbers[i] / ms);
        if (j > 0) myArray.push(j);
        else myArray.push(Math.round(ms / (countNumbers[i] * (-1))));
    }
    
    return myArray;
}

function timeCounter(nums, cnums) {
    let x = nums.length;
    for (let i = 0; i < x; ++i){
        let x1 = nums[i];
        let z1 = 0;
        let cnum = cnums[i];
        let ctime = 1;
        if (cnum < 1) {
            ctime = cnum * (-1) + 20;
            cnum = 1;
        }
        let y1 = setInterval(function() {
            if (z1 < x1) z1 += cnum;
            else {
                z1 = x1;
                clearInterval(y1);
            }
            countElements[i].innerText = z1;
        },ctime);
    }
}
function startCountdown() {
    if (window.pageYOffset >= sticky2 - window.innerHeight){
        timeCounter(countNumbers, countIncreaserNums());
        countStatus = true;
    }
}

window.onscroll = function () {
    if (countStatus === false) {
        startCountdown();
    }
};
