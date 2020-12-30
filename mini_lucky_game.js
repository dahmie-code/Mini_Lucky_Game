function luckGame(){
    var randomLetter = document.getElementById("inputHere").value;
    var response = randomLetter.slice(2,3);
    document.getElementById("show").innerHTML = `Your Letter is: ${response}` ;
    
    var all = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
                'O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b',
                'c','d','e','f','g','h','i','j','k','l','m','n','o','p',
                'q','r','s','t','u','v','w','x','y','z'];

    var randomChar = all[Math.round(Math.random() * all.length 
        )];

      document.getElementById("theLetter").innerHTML = 
      `The Correct Letter is: ${randomChar}`;

      if(randomChar==response){
        var rightLetter = "Yippie, You are the Winner!";
            document.getElementById("message").innerHTML = rightLetter;
        } else {
             document.getElementById("message").innerHTML = "Argh! Try Again";
                }
             console.log(response);
}

/*function myFunction(){
var str = "Damilola Ogungbenro";
var thirdLetter = str.slice(0, 3);
document.getElementsById("demo").innerHTML = thirdLetter
}

function randomLetter(){
    var name;
    var thirdLetter;
    document.getElementById("demo").value 
    thirdLetter= name.slice (2, 3)
    document.getElementById("result").innerHTML = thirdLetter;
    }*/