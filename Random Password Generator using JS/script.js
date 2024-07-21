
function generatePassword(){
    
    const length = document.getElementById("passLength").value;
    const includeUppercase = document.getElementById("includeUCase");
    const includeLowercase = document.getElementById("includeLCase");
    const includeNumbers = document.getElementById("includeNum");
    const includeSymbols = document.getElementById("includeSym");

    const result = document.getElementById("result");
    let password = "";
    let allowedChars = "";

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=-~";


    allowedChars += includeUppercase.checked ? uppercase : "";
    allowedChars += includeLowercase.checked ? lowercase : "";
    allowedChars += includeNumbers.checked ? numbers : "";
    allowedChars += includeSymbols.checked ? symbols : "";

    if(length<=0){
        result.textContent = `Password length must be atleast 1`;
    }
    else if(allowedChars.length === 0){
        result.textContent = `Include atleast one set of characters for the password`;
    }
    else{
        for(let i=0; i<length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
            result.textContent = `Generated password: ${password}`;
        }
    }


}


