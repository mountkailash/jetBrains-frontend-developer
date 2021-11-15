


document.getElementById("upper-case").addEventListener("click", function () {
    let words = document.querySelector("textarea").value.toUpperCase().split(' ');
    document.querySelector("textarea").value = words.join(' ');

});

document.getElementById("lower-case").addEventListener("click", function () {
   let lower =  document.querySelector("textarea").value.toLowerCase().split('');
    document.querySelector("textarea").value = lower.join('');

});

document.getElementById("proper-case").addEventListener("click", function () {
    let captializeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
let lower = document.querySelector("textarea").value;
let word = lower.split(' ').map(captializeString);
document.querySelector("textarea").value = word.join(' ');
});

document.getElementById("sentence-case").addEventListener("click", function () {
    let sentenceString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
   let  sentence = document.querySelector("textarea").value;
     let capitalWord = (str) => str.split('. ').map
     (sentenceString).join('. ');
    document.querySelector("textarea").value = capitalWord(sentence);
});

//setTimeout (function () {}, 30000)
//jest.clearAllTimers()
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
// start file download
document.getElementById("save-text-file").addEventListener("click",async () => {
    let text = document.getElementById("text-area").value;

    //let filename = "text.txt"
    download("text.txt", text);

    }, false);








