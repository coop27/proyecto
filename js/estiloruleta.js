class Boton{
	constructor(_texto){
		this.texto = _texto;
	}
	rellenar(){
		document.getElementById("boton").innerHTML=this.texto;
	}
}

class Audio{
	constructor(_pista){
		this.pista = _pista;
	}
	poner(){
		var audioElement = document.createElement('audio');
		audioElement.setAttribute('src', this.pista);
		document.getElementById("boton").addEventListener("click", function() {
			audioElement.play();
		});
	}
}

function inicio(){
	boton1 = new Boton("?A jugar!");
	boton1.rellenar();
	boton2 = new Boton("Doble click para parar");
	boton3 = new Boton("Click para jugar de nuevo");
	audio1 = new Audio('audio/audio.wav');
	audio1.poner();
}

var parar;
var premio;
function setup() {
	createCanvas(1354, 270);
	Panel1 = new Panel(1100, 35, 200, "green");
	Panel2 = new Panel(800, 35, 200, "red");
	Panel3 = new Panel(500, 35, 200, "blue");
	Panel4 = new Panel(200, 35, 200, "yellow");
	Panel5 = new Panel(-100, 35, 200, "pink");
	Panel6 = new Panel(-400, 35, 200, "orange"); 
}
function empezarJuego(){
	parar = 0;
	premio = 0;
}
function pararJuego(){
	parar = 1; 
	if(Panel1.x>467 && Panel1.x<667){
		document.getElementById("premio").innerHTML = "UN COCHE";
		premio = 1;
	}
	if(Panel2.x>467 && Panel2.x<667){
		document.getElementById("premio").innerHTML = "UN ORDENADOR";
		premio = 1;
	}
	if(Panel3.x>467 && Panel3.x<667){
		document.getElementById("premio").innerHTML = "UN VIAJE A MONGOLIA";
		premio = 1;
	}
	if(Panel4.x>467 && Panel4.x<667){
		document.getElementById("premio").innerHTML = "UN CALENDARIO";
		premio = 1;
	}
	if(Panel5.x>467 && Panel5.x<667){
		document.getElementById("premio").innerHTML = "UNA ALFOMBRA";
		premio = 1;
	}
	if(Panel6.x>467 && Panel6.x<667){
		document.getElementById("premio").innerHTML = "UN BOLIGRAFO";
		premio = 1;
	} 
	if(premio == 0){
		document.getElementById("premio").innerHTML = "NADA, esta vez ha tenido mala suerte, pruebe otra vez";
	}
}
function draw() {
	background(51, 255, 96);
	if(parar == 0){
		Panel1.construir();
		Panel1.mover();
		Panel2.construir();
		Panel2.mover();
		Panel3.construir();
		Panel3.mover();
		Panel4.construir();
		Panel4.mover();
		Panel5.construir();
		Panel5.mover();
		Panel6.construir();
		Panel6.mover();
		boton2.rellenar();
	}
	
	if(parar == 1){
		Panel1.detener();
		Panel2.detener();
		Panel3.detener();
		Panel4.detener();
		Panel5.detener();
		Panel6.detener();
		boton3.rellenar();
	}
	fill("red");
	triangle(647.5, 5, 687.5, 5, 667, 50);
}
class Panel{
	constructor(_x, _y, _d, _color){
		this.x = _x;
		this.y = _y;
		this.d = _d;
		this.color = _color;
	}
	construir(){
		noStroke();
		fill(this.color);
		rect(this.x, this.y, this.d, this.d);
	}
	mover(){
		this.x = this.x + 100;
		if(this.x-this.d > width){
			this.x=0-this.d;
		}
	}
	detener(){
		this.x = this.x;
		noStroke();
		fill(this.color);
		rect(this.x, this.y, this.d, this.d);
	}
}