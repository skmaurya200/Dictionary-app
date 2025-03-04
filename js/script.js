// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
// function search() {
//     const mydict = {
//         "apple": "Apple is a fruit generally found in cold areas.",
//         "sk": "Sk is a simple boy",
//         "sun": "Sun is a star of our solar system",
//         "parrot": "Parrot is a bird",
//         "India": "India is great country located near indian ocean"
//     }

//     var word = document.getElementById("word").value.toLowerCase();
//     var meaning = document.getElementById("meaning");
//     if (word === "") {
//         alert("Enter a Word");
//     }
//     var defination = mydict[word];
//         // alert(defination);
//         if (defination) {
//             meaning.innerHTML = defination;
//         }
//         else{
//             meaning.innerHTML = "Word not found";
//         }
// }
async function search() {
    // var word = "Apple";
    var word = document.getElementById("word").value.toLowerCase();
    var url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    var res = await fetch(url);
    var data = await res.json();
    console.log(data);
    var mean = data[0].meanings[0].definitions[3].definition; 
//    console.log(mean)
    var meaning = document.getElementById("meaning");
    if (word === "") {
        alert("Enter a Word");
    }
    meaning.innerHTML = mean;
    // meaning.innerHTML = ""; 
}