mainbox = document.getElementById('mainbox');
translated = document.getElementById('translated');
but = document.getElementById('but');
krater = document.getElementById('krater');
//when but pressed change translated text to "asd"
but.addEventListener('click', function(){
    if (mainbox.value.length > 0){
        translated.innerHTML = "Fordítás.....";
        //wait 10 seconds
        setTimeout(function(){
            translated.innerHTML = "Kráter";
            krater.style.display = "block";

        }, 10000);
    }
    else{
        translated.innerHTML = "Nem adtál meg szöveget!";
    }
});
