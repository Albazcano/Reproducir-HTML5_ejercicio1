import {swapColor} from "./tableColors.js";
import {coverWords, displayWords} from "./wordsColors.js";

function selectCells() {
    let cells = document.getElementsByClassName("cells");
    let arrCells = Array.from(cells);

    arrCells.forEach(cell => {
      cell.addEventListener("click", () => {
          swapColor(cell.id);
      }); 
    });

    let hideBtn = document.getElementById("hide-btn");
    let showBtn = document.getElementById("show-btn"); 
    let words = document.getElementsByClassName("words");
    let arrWords = Array.from(words);

    hideBtn.addEventListener("click", () => {
        arrWords.forEach((word, i) => {
            setTimeout(() => {
                coverWords(word);
            }, i * 500);
        })
    })

    showBtn.addEventListener("click", () => {
        arrWords.forEach((word, i) => {
            setTimeout(() => {
                displayWords(word);
            }, i * 500);
        })
    })

    arrWords.forEach(word => {
        word.addEventListener("click", function () {
            coverWords();
        })
    })

}

selectCells();