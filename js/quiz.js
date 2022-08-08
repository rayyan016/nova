function right()
{
    var i = document.getElementById("correct");
    var j = document.getElementById("incorrect");
    i.style.display="block";
    j.style.display="none";
}

function wrong()
{
    var i = document.getElementById("incorrect");
    var j = document.getElementById("correct");
    i.style.display="block";
    j.style.display="none";
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
