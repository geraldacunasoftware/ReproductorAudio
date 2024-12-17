function Audio(){        
    
    var audio,play,barra,progreso,maximo;
    maximo = 600;
    this.reproductor = () => {
    
     audio = document.getElementById('audio');
     play = document.getElementById('play');
     barra = document.getElementById('barra');
     progreso = document.getElementById('progreso');
    
     play.addEventListener('click',this.reproducir);
    
     barra.addEventListener('click',this.adelantos,false);
    
    }
    this.reproducir = () =>{
        if ((audio.paused == false) && (audio.ended)== false) {
            audio.pause();
            play.innerHTML="Play"
        }else{
            audio.play();
            play.innerHTML="Pause"
            bucle=setInterval(this.estado,25);
        }
    }    
    this.estado = () =>{
        if (audio.ended==false) {
            var total = parseInt(audio.currentTime*maximo/audio.duration);
            progreso.style.width=total+"px"
        }
    }
    this.adelantos = (posicion)=>{
        if((audio.paused == false) && (audio.ended)==false){
            var posicionX = posicion.pageX-barra.offsetLeft;
            var nuevoTiempo = posicionX*audio.duration/maximo;
            audio.currentTime=nuevoTiempo;
            progreso.style.width=posicionX+"px";
        }
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    const pagina = new Audio();
    pagina.reproductor();
});