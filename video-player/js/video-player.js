
function start(){
    // the full size of playing bar
    barsize=600;
    
    // getting the elements 
    mymovie=document.getElementById('myvideo');
    playbutton=document.getElementById('playbutton');
    bar=document.getElementById('defaultbar');
    progressbar=document.getElementById('progressbar');
    
    playbutton.addEventListener('click', playorpause, false);
    bar.addEventListener('click', clickedbar,false);
    
    
}


function playorpause(){
    if (!mymovie.paused && !mymovie.ended){
        mymovie.pause();
        playbutton.innerHTML='play';
        // clearInterval stops updateBar function from executing 
        window.clearInterval(updateBar);
    }else{
        mymovie.play();
        playbutton.innerHTML='pause'; 
        
        // setInterval execute update function every 500msec
        updateBar=setInterval(update, 500) //500msec
    } 
    
}


function update(){
    if (!mymovie.ended){
        var size=parseInt(mymovie.currentTime*barsize/mymovie.duration);
        progressbar.style.width=size+'px';
    }else{
    progressbar.style.width=0+'px';
    playbutton.innerHTML='play'; 
    window.clearInterval(updateBar);
        
    }
}

// e is event : the action that user does
// e.page returns the position of the event on the page
function clickedbar(e){
    if(!mymovie.paused && !mymovie.ended){
        //element.offsetLeft: returns the horizontal offset position of an element
        var mouseX=e.pageX-bar.offsetLeft;
        var newtime=(mouseX*mymovie.duration)/barsize;
        mymovie.currentTime=newtime;
        progressbar.style.width=mouseX+'px';
    }
    
}


window.addEventListener('load', start, false)








