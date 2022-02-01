let text = document.getElementById("testo").textContent;

//Statistiche testo
console.log("Statistiche testo:");
console.log("Numero caratteri: ", text.length);

function replaceWithSpaces(text) {
    text = text.replace(/,/g, "");
    text = text.replace(/;/g, "");
    text = text.replace(/:/g, "");
    text = text.replace(/'/g, " ");
    text = text.replace(/\./g, "");
    return text;
}

function countWords(text) {
    if (text === "") {
        return 0;
    }
    let array = [];
    array = text.split(" ");
    return array.length;
}
console.log("Numero parole: ", (countWords(replaceWithSpaces(text))));

function repeatedWords(text) {
    let array = [];
    let array2 = [];
    array = text.toLowerCase().split(" ");
    for (const word of array) {
        let count = 0;
        for (const words of array) {
            if (word === words) {
                count++
            }
        }
        let countedWord = "La parola \"" + word + "\" compare " + count;
        if (count === 1) {
            countedWord += " volta."
        } else {
            countedWord += " volte."
        }
        array2.push(countedWord);
    }
    let setCountedWords = [...new Set(array2)];
    for (const element of setCountedWords) {
        console.log(element);
    }
}
repeatedWords(replaceWithSpaces(text));

function repeatedChars(text){
    if (text === "") {
        return "Non ci sono caratteri da contare";
    }
    let array = [];
    let array2 = [];
    array = text.toLowerCase().split("");
    for (const char of array) {
        let count = 0;
        for (const chars of array) {
            if (char === chars) {
                count++
            }
        }
        let countedChar;
        if (char === " ") {
            countedChar = "Il carattere \"spazio\" compare " + count; 
        } else {
            countedChar = "Il carattere \"" + char + "\" compare " + count;
        }
        if (count === 1) {
            countedChar += " volta."
        } else {
            countedChar += " volte."
        }
        array2.push(countedChar);
    }
    let setCountedChar = [...new Set(array2)];
    let countedChars = "";
    for (const element of setCountedChar) {
        countedChars += element + "\n";
    }
    return countedChars;
}

//Funzione di ricerca

function searchWord(text, word) {
    let array = [];
    text = replaceWithSpaces(text);
    array = text.split(" ");
    let arrayOfIndexes = [];
    let index = 0;
    while (index <= array.length) {
        if (array[index] === word) {
            arrayOfIndexes.push(index)
        }
        index++;
    }
    console.log("La parola", word, "si trova agli indici ", ...arrayOfIndexes);
}

searchWord(text, "Milziade");

//Prompt di ricerca

function startSearch(){
    let array = [];
    let text2 = replaceWithSpaces(text);
    array = text2.toLowerCase().split(" ");
    let arrayOfIndexes = [];
    let word = prompt("inserisci la parola da cercare");
    word = word.toLowerCase();
    let index = 0;
    while (index <= array.length) {
        if (array[index] === word) {
            arrayOfIndexes.push(index)
        }
        index++;
    }
    if (arrayOfIndexes.length === 0) {
        alert("Non sono riuscito a trovare questa parola")
    } else if (arrayOfIndexes.length === 1) {
        alert("La parola " + word + " si trova all'indice " + arrayOfIndexes);    
    } else {
        alert("La parola " + word + " si trova agli indici " + arrayOfIndexes);
    }
}

let stats = "Numero caratteri: " + text.length + "\nNumero parole: " + (countWords(replaceWithSpaces(text))) + "\n\nRipetizione Parole:\n" + repeatedWordsForPage(replaceWithSpaces(text))+ "\nRipetizione Caratteri:\n" + repeatedChars(replaceWithSpaces(text));

function repeatedWordsForPage(text) {
    if (text === "") {
        return "Non ci sono parole da contare\n";
    }
    let array = [];
    let array2 = [];
    array = text.toLowerCase().split(" ");
    for (const word of array) {
        let count = 0;
        for (const words of array) {
            if (word === words) {
                count++
            }
        }
        let countedWord = "La parola \"" + word + "\" compare " + count;
        if (count === 1) {
            countedWord += " volta."
        } else {
            countedWord += " volte."
        }
        array2.push(countedWord);
    }
    let setCountedWords = [...new Set(array2)];
    let countedWords = "";
    for (const element of setCountedWords) {
        countedWords += element + "\n";
    }
    return countedWords;
}
document.getElementById("stats").innerText = stats;
function refresh(){
    text = document.getElementById("testo").textContent;
    stats = "Numero caratteri: " + text.length + "\nNumero parole: " + (countWords(replaceWithSpaces(text))) + "\n\nRipetizione Parole:\n" + repeatedWordsForPage(replaceWithSpaces(text)) + "\nRipetizione Caratteri:\n" + repeatedChars(replaceWithSpaces(text));
    document.getElementById("stats").innerText = stats;
}