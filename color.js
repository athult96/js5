function changeColor(){
let a=document.getElementById("selectcolor").value;
if(a=="Red"){
    document.getElementById("text").style.color="red";
} else if (a=="Green"){
    document.getElementById("text").style.color="green";
} else if (a=="Blue"){
    document.getElementById("text").style.color="blue";
} else if (a=="Yellow"){
    document.getElementById("text").style.color="yellow";
}

}