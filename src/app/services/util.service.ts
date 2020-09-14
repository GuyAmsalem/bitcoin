
export const utilService = {
    getRandom,
    makeLorem,
    makeId,
    getRandomColor,
    scrollTo,
    expandTextArea,
    getRandomHexColor,
    daysInMonth
}


let words = []
_populateWords()

//The maximum is exclusive and the minimum is inclusive
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function makeId(length = 5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function daysInMonth () {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
}

function expandTextArea(textarea) {
    var heightLimit = 200;
    textarea.style.height = "";
    textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
}

// Returns a lorem with 'length' chars.
function makeLorem(length) {
    var randStr = '';
    while (randStr.length < length) {
        var word = words[getRandom(1, 28)];
        randStr += word + ' ';
    }
    randStr = randStr[0].toUpperCase() + randStr.substr(1)
    return randStr;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomHexColor() {
    return ['#98d38d', '#f4e25c', '#fcc06c', '#5ba7d4', '#d6a6e9',
        , '#5bd5e9', '#0d1826', '4d4c7d', 'ffb6b6', '527318', 'ffe75e', '5f6caf', '42dee1', 'a35638']
}

//Private

function _populateWords() {
    words[1] = "escapology"
    words[2] = "brightwork"
    words[3] = "verkrampte"
    words[4] = "protectrix"
    words[5] = "nudibranch"
    words[6] = "grandchild"
    words[7] = "newfangled"
    words[8] = "flugelhorn"
    words[9] = "mythologer"
    words[10] = "pluperfect"
    words[11] = "jellygraph"
    words[12] = "quickthorn"
    words[13] = "rottweiler"
    words[14] = "technician"
    words[15] = "cowpuncher"
    words[16] = "middlebrow"
    words[17] = "jackhammer"
    words[18] = "triphthong"
    words[19] = "wunderkind"
    words[20] = "dazzlement"
    words[21] = "jabberwock"
    words[22] = "witchcraft"
    words[23] = "pawnbroker"
    words[24] = "thumbprint"
    words[25] = "motorcycle"
    words[26] = "cryptogram"
    words[27] = "torchlight"
    words[28] = "bankruptcy"
}

