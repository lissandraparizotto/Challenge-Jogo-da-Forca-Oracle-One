var button = document.querySelector ("#iniciar-jogo")
var reiniciar = document.querySelector ("#reiniciar-jogo")
var palavras = ["BISCOITO","ALFACE","MORANGO","PIPOCA","BATATA","PESSEGO","UVA","CEBOLA","ABACAXI","CEREJA"]
var palavraSelecionada = []
var arrayPalavra = []
var lis = document.querySelectorAll('li')
var erros = 0
var acerto = 0
var acertos = []
const botaoCadastrarPalavra = document.getElementById("cadastrarPalavra")
const inputPalavraNova = document.getElementById("palavraNova")
let temPalavra

function selecionarPalavra(){
    palavraSelecionada = [palavras[Math.floor(Math.random() * palavras.length)]]
    for(var i=0; i < palavraSelecionada.length; i++){
        arrayPalavra = palavraSelecionada[i].toUpperCase()  
    }
}

function valida(){
    x2=500  
    for(var l = 0; l < lis.length; l++) {
        lis[l].addEventListener('click', function() {
            x1=350 
            acertos = []
            for(lc=0; lc<arrayPalavra.length; lc++){
                if((this.textContent) == arrayPalavra[lc]){
                    desenhaLetraCerta(this.textContent)
                    acertos.push(this.textContent)
                    acerto++
                }
                x1=x1+60
            }
            if(((this.textContent) != arrayPalavra[lc]) && acertos.length<1){
                desenhaLetraErrada(this.textContent)
                erros++
                desenhaBonecoForca()
            }
            if(acerto == arrayPalavra.length){
                desenhaMensagemVenceu()
            }
            x2 = x2 + 50
        })
    }
}

function desenhaBonecoForca(){
    if(erros == 1){
        desenhaCabeca()
    }
    if(erros==2){
        desenhaCorpo()
    }
    if(erros == 3){
        desenhaBracoD()
    }
    if(erros==4){
        desenhaBracoE()
    }
    if(erros == 5){
        desenhaPernaD()
    }
    if(erros==6){
        desenhaPernaE()
        desenhaMensagemPerdeu()
    }
}

function iniciar(){
    desenhaForca()
    selecionarPalavra() 
    desenhaTraco() 
    valida()
}

function restart(){
    location.reload() 
}

reiniciar.addEventListener("click", restart)
button.addEventListener("click", iniciar)

botaoCadastrarPalavra.addEventListener("click", function(){
    temPalavra = false; //reseta a variável - se em algum momento virou true, volta a ser false
    for(var i = 0; i < palavras.length; i++) {
        if(inputPalavraNova.value.toUpperCase() == palavras[i]) {
            temPalavra = true;
            break; //interrompe o for quando já achou a palavra no array - palavra já cadastrada
        }
    }

    if(temPalavra) {
        alert("Palavra já cadastrada anteriormente!")
    } else {
        palavras.push(inputPalavraNova.value.toUpperCase())
        alert("Palavra cadastrada com sucesso!")
        inputPalavraNova.value = ""
    }
})
