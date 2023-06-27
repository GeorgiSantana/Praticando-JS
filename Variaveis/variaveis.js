// var 
// let
// const

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area)

//let altura = 5;
//let comprimento = 7;
//let area;
//let forma = "retângulo"
//area = altura * comprimento
//console.log(area)

//if (forma=== "retângulo") {
//  area = altura * comprimento;
//} else {
//area = (altura * comprimento) / 2;
//}

//console.log(area)

const altura = 5;
const comprimento = 7;
let area;
const quadrado = altura * comprimento;
const triangulo = (altura * comprimento) / 2;
area = triangulo;


if (area === quadrado) {

    area = altura * comprimento;
} else {

    if (area === triangulo) {

        area = (altura * comprimento) / 2;
    }

}

console.log(area)
