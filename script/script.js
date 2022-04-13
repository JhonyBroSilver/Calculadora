// INPUT MODIFIER START
let outputScreen = document.getElementById("output-screen");
// INPUT MODIFIER END
// BUTTON DISPLAY START
function display(num){
    outputScreen.value += num;
}
// BUTTON DISPLAY END
// BUTTON EQUAL START
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Inválido");
    }
}
// BUTTON EQUAL END
// BUTTON CLEAR START
function Clear(){
    outputScreen.value = "";
}
// BUTTON CLEAR END
// BUTTON DEL START
function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}
// BUTTON DEL END