mainbox = document.getElementById('mainbox');
translated = document.getElementById('translated');
but = document.getElementById('but');
krater = document.getElementById('krater');
ip = document.getElementById('ip');

but.addEventListener('click', function(){
    if (mainbox.value.length > 0){
        translated.innerHTML = "Fordítás.....";
        //wait 10 seconds
        setTimeout(function(){
            translated.innerHTML = "Kráter";
            
            
            //change the 'translated' background image to 'kukac.png'
            translated.style.backgroundImage = "url('kukac.png')";
            krater.addEventListener('click', function(){
                document.body.style.backgroundColor = "green";
            }
            );
        }, 10000);
    }
    else{
        translated.innerHTML = "Nem adtál meg szöveget!";
    }
});

