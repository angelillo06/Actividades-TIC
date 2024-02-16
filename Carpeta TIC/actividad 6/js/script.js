function comprobar(){
    let numero;
    numero=parseInt(document.getElementById("numero").value, 10)
    if((numero % 2) == 0) {
        document.getElementById ("resultado").innerHTML="Par";
    }
    else{
        document.getElementById ("resultado").innerHTML="Imar";
    }
}