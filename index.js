let chars = document.getElementById("char"),
    words = document.getElementById("word"),
    sentences = document.getElementById("sentence"),
    spaces = document.getElementById("space");

const textArea = document.querySelector("#text"),
        btn = document.getElementById("btn");

let inputValues = [chars, words, sentences, spaces];

function setInitialValueToZero(){
    inputValues.forEach(value => value.innerHTML = 0);
}

setInitialValueToZero();


btn.addEventListener("click", () => {
    let text = textArea.value;
    chars.innerHTML = text.length;
    words.innerHTML = text.match(/[a-zA-Z]+/g).length;
   sentences.innerHTML = text.match(/\056/g).length;
    spaces.innerHTML = text.match(/\s/g).length;
});

