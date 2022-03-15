export function coverWords() {
    let words = document.getElementsByClassName("words");
    let arrWords = Array.from(words);
    
    arrWords.forEach((word, i) => {
        setTimeout(() => {
            word.style.color = "transparent";
        }, i * 500);
    })
}

export function displayWords(word) {
    word.removeAttribute("style");
}