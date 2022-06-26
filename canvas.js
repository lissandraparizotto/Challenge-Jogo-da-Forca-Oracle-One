var canva = document.querySelector("#forca")
var pincel = canva.getContext('2d')

function desenhaForca(){
    pincel.lineWidth = 10 
    pincel.fillStyle = 'darkblue'
    pincel.strokeStyle = 'darkblue'
    pincel.beginPath()
    pincel.moveTo(100, 350)
    pincel.lineTo(20, 390)
    pincel.lineTo(180, 390)
    pincel.closePath()
    pincel.stroke()

    pincel.beginPath();
    pincel.moveTo(100, 350)
    pincel.lineTo(100, 100)
    pincel.moveTo(100, 100)
    pincel.lineTo(300, 100)
    pincel.moveTo(300, 100)
    pincel.lineTo(300, 150)
    pincel.stroke()

    pincel.beginPath();
    pincel.moveTo(100, 170)
    pincel.lineTo(170, 100)
    pincel.stroke()
 }
 desenhaForca()

function desenhaTraco(){ 
    pincel.font = '10px Inter'
    pincel.fillStyle = 'darkblue'
    pincel.lineWidth = 3 
    var x = 350
    var y = 350
    for (var i=0; i < arrayPalavra.length; i++){
        pincel.beginPath();
        pincel.moveTo(x, y)
        pincel.lineTo(x + 50, y)
        pincel.stroke();
        x = x + 60
    }
}
function desenhaLetraCerta(letra){
    pincel.font = '50px Inter'
    pincel.fillStyle = 'darkblue'
    pincel.fillText(letra, x1, 340)
}

function desenhaLetraErrada(letra){
    pincel.font = '50px Inter'
    pincel.fillStyle = 'darkblue'
    pincel.fillText(letra, x2, 100)
}

function desenhaCabeca() {
    pincel.lineWidth = 10 
    pincel.beginPath()
    pincel.arc(300, 170, 25, 0, 2 * Math.PI)
    pincel.fillStyle = 'darkblue'
    pincel.strokeStyle = 'darkblue'
    pincel.stroke()
}
  
function desenhaCorpo() {
    pincel.fillStyle = 'darkblue'
    pincel.lineWidth = 10
    pincel.beginPath()
    pincel.moveTo(300, 195)
    pincel.lineTo(300, 250)
    pincel.stroke()
    pincel.closePath()  
}
  
function desenhaBracoE() {
    pincel.fillStyle = 'darkblue'
    pincel.lineWidth = 10
    pincel.beginPath()
    pincel.moveTo(300, 195)
    pincel.lineTo(260, 220)
    pincel.stroke()
    pincel.closePath() 
}
  
function desenhaBracoD() {
    pincel.fillStyle = 'darkblue'
    pincel.lineWidth = 10
    pincel.beginPath()
    pincel.moveTo(300, 195)
    pincel.lineTo(340, 220)
    pincel.stroke()
    pincel.closePath()
}

function desenhaPernaE() {
    pincel.fillStyle = 'darkblue'
    pincel.lineWidth = 10
    pincel.beginPath()
    pincel.moveTo(300, 250)
    pincel.lineTo(260, 290) 
    pincel.stroke()
    pincel.closePath()
}
 
function desenhaPernaD() {
    pincel.fillStyle = 'darkblue'
    pincel.lineWidth = 10
    pincel.beginPath()
    pincel.moveTo(300, 250)
    pincel.lineTo(340, 290)
    pincel.stroke()
    pincel.closePath()
}

function desenhaMensagemVenceu(){
    pincel.font = '30px Inter'
    pincel.fillStyle = 'darkblue'
    pincel.fillText("VOCÊ VENCEU!",600,150)
    
}

function desenhaMensagemPerdeu(){
    pincel.font = '30px Inter'
    pincel.fillStyle = 'darkred'
    pincel.fillText("VÔCE PERDEU!", 600, 150) 
    pincel.fillText(`A palavra era ${palavraSelecionada}`, 710, 200)   
}

