$(document).ready(function() {
    setTimeout(function(){
            let loading = document.getElementById('loader');
            let loadingscreen = document.getElementById('loaderbg');
            loading.style.display = "none";
            loadingscreen.style.display = "none";
          },1000);
    })

var pedidos = [];

var lista = document.getElementById("carrinho").hasChildNodes();

if (lista == true){
    document.getElementById("sempedido").style.display = "none";
    document.getElementById("fazpedido").style.display = "block";
    document.getElementById("totalpedidos").style.display = "block";
} else {
    document.getElementById("sempedido").style.display = "block";
    document.getElementById("fazpedido").style.display = "none";
    document.getElementById("totalpedidos").style.display = "none";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-15vh";
  }
  prevScrollpos = currentScrollPos;
}


function revela(a, b){
    switch(a,b){
        case a, 0:
            $(document).mouseup(function (e) { 
                if ($(e.target).closest("#"+a+"").length 
                            === 0) { 
                    $("#"+a+"").hide(); 
                } 
            }); 
             document.getElementById(a).style.display = "block";
            break;
        case a, 1: 
            document.getElementById(a).style.display = "none";
            break;
    }
}

function adiciona(a) {
    pedidos.push(a+"<br>");
    var str = a;
    var res = str.charAt(str.length-5)+str.charAt(str.length-4);
    document.getElementById("carrinho").innerHTML = "<li>"+pedidos.join("")+"</li>";

    alert('Item adicionado a seus pedidos');

    document.getElementById('resulttotal').value = Number(document.getElementById('resulttotal').value) + Number(res);

    var lista = document.getElementById("carrinho").hasChildNodes();

    if (lista == true){
    document.getElementById("sempedido").style.display = "none";
    document.getElementById("fazpedido").style.display = "block";
    document.getElementById("totalpedidos").style.display = "block";
    } else {
    document.getElementById("sempedido").style.display = "block";
    document.getElementById("fazpedido").style.display = "none";
    document.getElementById("totalpedidos").style.display = "none";
    }



}

function calcularIMC(){
    var input = document.getElementById("peso");
    var input2 = document.getElementById("altura");
    if ((input && input.value)&&(input2 && input2.value)) {
        var altura = document.getElementById('altura').value;
        var peso = document.getElementById('peso').value;

        altura = altura.replace(",",".");
        peso = peso.replace(",","."); 

        altura = Number(altura);
        peso = Number(peso);
        
        var imc = peso/(altura*altura)

        document.getElementById('resultado').value = Math.round(imc*100)/100;
        console.log(imc)
        if (imc < 16){
            alert("Baixo peso III");
        } else if (imc >= 16 && imc < 17){
            alert("Baixo peso II");
        } else if (imc >= 17 && imc < 18.50){
            alert("Baixo peso I");
        } else if (imc >= 18.50 && imc < 25){
            alert("Peso ideal");
        } else if (imc >= 25 && imc < 30){
            alert("Sobrepeso");
        } else if (imc >= 30 && imc < 35){
            alert("Obesidade grau I");
        } else if (imc >= 35 && imc < 40){
            alert("Obesidade grau II");
        } else{
            alert("Obesidade grau III");
        }
    } else{

    }
}

function abreFinalizar() {
    document.getElementById("finalizar").style.width = "100%";
    var a = document.getElementById("carrinho");
    var clone = a.cloneNode(true);
    document.getElementById("pedidosfinais").appendChild(clone);
    document.getElementById("resulttotalfinal").value = document.getElementById("resulttotal").value;
  }
  
function fechaFinalizar() {
    document.getElementById("finalizar").style.width = "0%";
    const node = document.getElementById("pedidosfinais");
    node.innerHTML = '';
}
