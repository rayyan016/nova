
function scoreDisplayOnLoad()
{
    if(typeof(sessionStorage.clickcount) == "undefined")
    {
        document.getElementById("scC").innerHTML = "Correct = 0";    
    }
    else
        document.getElementById("scC").innerHTML = "Correct = " + sessionStorage.clickcount;
}

function scoreDisplayCorrect()
{
    if(typeof(Storage) !== "undefined") 
    {
        if (sessionStorage.clickcount) 
        {
          sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } 
        else 
        {
          sessionStorage.clickcount = 1;
        }
        document.getElementById("scC").innerHTML = "Correct = " + sessionStorage.clickcount;
    } 
    else 
    {
        document.getElementById("scC").innerHTML = "Sorry, your browser does not support web storage...";
    }

}

// function scoreDisplayIncorrect()
// {
//     if(typeof(Storage) !== "undefined") 
//     {
//         if (sessionStorage.clickcount) 
//         {
//           sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
//         } 
//         else 
//         {
//           sessionStorage.clickcount = 1;
//         }
//         document.getElementById("scI").innerHTML = "Incorrect = " + sessionStorage.clickcount;
//     } 
//     else 
//     {
//         document.getElementById("scI").innerHTML = "Sorry, your browser does not support web storage...";
//     }

// }

function right()
{
    var i = document.getElementById("correct");
    var j = document.getElementById("incorrect");
    i.style.display="block";
    j.style.display="none";
    // score+=1;
    // var scorevar = document.getElementById("scC");
    // scorevar.innerHTML = " Correct = "+score;
}

function wrong()
{
    var i = document.getElementById("incorrect");
    var j = document.getElementById("correct");
    i.style.display="block";
    j.style.display="none";
    // scoren-=1;
}

function randomise()
{
    var n = Math.floor(Math.random() * 10) + 1;
    var next = document.getElementById("next");
//     var num = document.getElementById("rando");
//     num.innerHTML = "Random number = "+n;
    next.href = "q"+n+".html";
}

// function random_display()
// {
//     var i = document.getElementById("rando");
//     i.style.display="block";
// }
