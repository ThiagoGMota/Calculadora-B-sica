function insert (num){  // criamos uma funçao chamada insert e vai receber um parâmetro (nesse exemplo "num")
    let numero = document.getElementById("resultado").innerHTML ;//criamos uma let que recebera numero clicado e o colocara no "resultado" ´por meio do getelement
    document.getElementById('resultado').innerHTML = numero + num // a let numero + num vai fazer com que o numero clicado nao suma
}
// para o botao de apagar tudo "C"
function clean(){
    document.getElementById("resultado").innerHTML = "";
}
//botao backspace
function backspace(){
    let apagar1 = document.getElementById('resultado').innerHTML 
    document.getElementById('resultado').innerHTML = apagar1.substring(0, apagar1.length - 1)
}
// botao resultado
function equals() {
    let resultado = document.getElementById('resultado').innerHTML 
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado)
    }
}
// Função para calcular a raiz quadrada
function sqrt() {
    var num = document.getElementById('resultado').innerHTML;
    var res = Math.sqrt(num);
    document.getElementById('resultado').innerHTML = res;
}
function thanks(){
    alert("Obrigado por usar nossa Calculadora!");
    let Obrigado = "thanks for using"
    document.getElementById('resultado').innerHTML = Obrigado
}