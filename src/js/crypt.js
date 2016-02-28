/**
 * Created by ericblobb on 2/27/16.
 */

function encrypt() {
    var ciphertxt = document.getElementById("ciphertxt");
    var plaintxt = document.getElementById("plaintxt");

    var alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphaLow = alphaUp.toLowerCase();
    
    var result = "";
    
    for (var i = 0; i < plaintxt.value.length; i++) {
        if (!isNaN(plaintxt.value[i])) {
            result += plaintxt.value[i];
        }

        else if (plaintxt.value[i] === plaintxt.value[i].toUpperCase()) {
            for (var j = 0; j < alphaUp.length - 26; j++) {
                if (plaintxt.value[i] === alphaUp[j]) {
                    result += alphaUp[j + 13];
                }
            }
        }

        else if (plaintxt.value[i] === plaintxt.value[i].toLowerCase()) {
            for (var k = 0; k < alphaLow.length - 26; k++) {
                if (plaintxt.value[i] === alphaLow[k]) {
                    result += alphaLow[k + 13];
                }
            }
        }

        else {
            result += plaintxt.value[i];
        }
    }
    
    ciphertxt.value = result;
}

function decrypt() {
    var ciphertxt = document.getElementById("ciphertxt");
    var plaintxt = document.getElementById("plaintxt");

    var alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphaLow = alphaUp.toLowerCase();

    var result= "";

    for (var i = 0; i < ciphertxt.value.length; i++) {
        if (!isNaN(ciphertxt.value[i])) {
            result += ciphertxt.value[i];
        }

        else if (ciphertxt.value[i] === ciphertxt.value[i].toUpperCase()) {
            for (var j = alphaUp.length - 1; j >= alphaUp.length - 26; j--) {
                if (ciphertxt.value[i] === alphaUp[j]) {
                    result += alphaUp[j - 13];
                }
            }
        }

        else if (ciphertxt.value[i] === ciphertxt.value[i].toLowerCase()) {
            for (var k = alphaLow.length - 1; k >= alphaLow.length - 26; k--) {
                if (ciphertxt.value[i] === alphaLow[k]) {
                    result += alphaLow[k - 13];
                }
            }
        }

        else {
            result += ciphertxt.value[i];
        }
    }

    plaintxt.value = result;
}

function clearPlain() {
    var plaintxt = document.getElementById("plaintxt");
    plaintxt.value = "";
}

function clearCiph() {
    var ciphertxt = document.getElementById("ciphertxt");
    ciphertxt.value = "";
}