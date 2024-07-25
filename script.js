let hinty = document.querySelector('.hint p');
let words = document.querySelector('.words');
let hangmanimg = document.querySelector('.left img');
let word;
let correctword = document.querySelector('.fail b');
console.log(correctword)
let Wrongguess = 0;
let Totalchance = 6;
let keyboard = document.querySelector('.keyboard');
const allHangmanQuestions = [
    { word: "pyramid", hint: "Ancient structure in Egypt" },
    { word: "butterfly", hint: "A colorful winged insect" },
    { word: "volcano", hint: "A mountain that erupts" },
    { word: "galaxy", hint: "A system of stars" },
    { word: "oxygen", hint: "Essential gas for breathing" },
    { word: "tornado", hint: "A destructive rotating column of air" },
    { word: "library", hint: "A place with a collection of books" },
    { word: "jupiter", hint: "The largest planet in our solar system" },
    { word: "elephant", hint: "The largest land animal" },
    { word: "bicycle", hint: "A two-wheeled vehicle" },
    { word: "cactus", hint: "A plant found in deserts" },
    { word: "chocolate", hint: "A sweet treat made from cocoa" },
    { word: "computer", hint: "An electronic device for processing data" },
    { word: "rainbow", hint: "A multicolored arc in the sky" },
    { word: "kangaroo", hint: "A marsupial from Australia" },
    { word: "guitar", hint: "A stringed musical instrument" },
    { word: "cinnamon", hint: "A spice obtained from the inner bark of trees" },
    { word: "origami", hint: "The art of paper folding" },
    { word: "microscope", hint: "An instrument for viewing very small objects" },
    { word: "asteroid", hint: "A small rocky body orbiting the sun" },
    { word: "submarine", hint: "A watercraft capable of underwater operation" },
    { word: "telescope", hint: "An instrument for observing distant objects" },
    { word: "pineapple", hint: "A tropical fruit with spiky skin" }
];
let reset = ()=>{
    Wrongguess = 0;
    document.querySelector('.fail').style.display = "none";
    document.querySelector('.guesscount b').innerHTML = `${Wrongguess}/ ${Totalchance}`
    hangmanimg.src = `hangman-${Wrongguess}.svg`
            document.querySelector('.victory').style.display = "none";
    words.innerHTML = word.split("").map(() => `<li></li>`).join("");
}
function generateWord() {
    let que = allHangmanQuestions[(Math.floor(Math.random() * 23))]
    word = que.word;
    console.log(word);
    console.log(que.hint);
    hinty.innerHTML = que.hint;
    reset();
}
generateWord()
let initgame = (button, clickedletter) => {
    if (word.includes(clickedletter)) {
        console.log(button, clickedletter);
        [...word].forEach((letter, index) => {
            if (letter === clickedletter) {
                words.querySelectorAll("li")[index].innerHTML = letter;
            }
        });
        if ([...words.querySelectorAll("li")].every(li => li.innerHTML !== "")) {
            document.querySelector('.victory').style.display = "flex";
        }
    }
    else {
        console.log("Wrong Guess");
        if (Wrongguess < Totalchance) {
            Wrongguess++;
            document.querySelector('.guesscount b').innerHTML = `${Wrongguess}/ ${Totalchance}`
            hangmanimg.src = `hangman-${Wrongguess}.svg`
        }
        if(Wrongguess===Totalchance){
            document.querySelector('.fail').style.display = "flex";
            correctword.innerHTML= word;
        }
    }
}
for (let i = 97; i <= 122; i++) {
    let words = String.fromCharCode(i);
    let button = document.createElement("button")
    button.innerText = words;
    keyboard.appendChild(button);
    button.addEventListener("click", e => initgame(e.target, String.fromCharCode(i)));
}
document.querySelector('.playagain').addEventListener("click", generateWord);
document.querySelector('.playagain2').addEventListener("click", generateWord);