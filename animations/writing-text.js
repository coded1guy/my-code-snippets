let sentenceString = "NIPHI GLOBAL SERVICES LIMITED";
sentenceArr = sentenceString.split("");
console.log(sentenceArr);
let sentence = document.querySelector("h1 > span#sentence");

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  
  const doSomething = async () => {
    for(let i = 0; i < sentenceArr.length; i++) {
        await sleep(20)
        // if(i == 5 || i == 12 || i == 21) {
        //     sentence.innerHTML += `<br>`;
        // }
        // else {
            sentence.innerHTML += sentenceArr[i];
        //}
        if(i == (sentenceArr.length - 1)) {
            setTimeout(() => {
                document.querySelector("h1 > #cursor").style.visibility = "hidden";
            }, 3500);
        }
    }
  }
  
  doSomething()
