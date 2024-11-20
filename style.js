let includeNumber = false;
let includeSpCharaters = false;
let totalLength = 6;

function passwordGenerator() {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let password = "";
    if (includeNumber) {
        str = str + "0123456789"
    }
    if (includeSpCharaters) {
        str = str + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    }
    for (let i = 0; i < totalLength; i++) {
        randomNumber=Math.floor(Math.random() * (str.length - 1))
        randomLetter = str[randomNumber]
        // console.log(randomNumber)
        password = password + randomLetter;
    }
    console.log(password);

    //show in screen
    passwordField=document.querySelector("#password");
    passwordField.value=password


}
passwordGenerator();

function handleNumber(){
    console.log("ok")
}

//handle click
number=document.querySelector("#hangleNumber")
number.addEventListener("click",(e)=>{
   includeNumber=!includeNumber
   console.log(includeNumber)
   passwordGenerator()
})
spCharater=document.querySelector("#handleSpcCharacter")
spCharater.addEventListener("click",(e)=>{
    includeSpCharaters=!includeSpCharaters
   console.log(includeSpCharaters)
   passwordGenerator()
})

//handle range
range=document.querySelector("#handleRange")
range.addEventListener("change",(e)=>{
totalLength=e.target.value
lengthText=document.querySelector("#lengthText")
lengthText.innerText=totalLength

passwordGenerator()})

//for copy
//first select all
passwordField=document.querySelector("#password");
passwordField.addEventListener("click",(e)=>{
value=passwordField.select();
 })

//for copy

copyBtn=document.querySelector("#copyBtn")
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(passwordField.value)
})

//new btn
newBtn=document.querySelector("#newBtn")
newBtn.addEventListener("click",()=>{
    passwordGenerator()    
})

//clearBtn
clearBtn=document.querySelector("#clearBtn")
clearBtn.addEventListener("click",()=>{
    passwordField.value="" ;
})