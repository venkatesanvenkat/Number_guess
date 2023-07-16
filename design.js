var a=Math.floor(Math.random()*100+1);
var count=0;
console.log(a);

function guessNumber()
{
   var b= parseInt(document.getElementById("guessfeild").value);
    if(b==a)
    {
        document.getElementById("result").textContent=("Congratulations!!!,You got the number in "+count+" tries");
    }
    else if(b<a)
    {
        count++;
        document.getElementById("result").textContent=("Try a Larger Number");
        
    }
    else if(b>a)
    {
        count++;
        document.getElementById("result").textContent=("Try a Smaller Number");
        
    }

}