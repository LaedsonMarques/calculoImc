/*
@Autor:
Laedson Marques
*/




function  calcular(){

altura = document.imcForm.elements["altura"].value
peso = document.imcForm.elements["peso"].value


imc = peso / (altura * altura)

if(imc < 18.5){
    alert("Você está abaixo do peso.")
}
else if(imc >= 18.5 && imc < 25){
    alert("Você está com peso normal.")
}
else if(imc >= 25 && imc < 30){
    alert("Você está com sobrepeso.")
}
else if(imc >= 30 && imc < 40){
    alert("Você está com obesidade.")
}
else{
    alert("Você está com obesidade grave.")
}

}