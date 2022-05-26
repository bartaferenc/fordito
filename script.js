mainbox = document.getElementById('mainbox');
translated = document.getElementById('translated');
but = document.getElementById('but');

//when but pressed change translated text to "asd"
but.addEventListener('click', function(){
    translated.innerHTML = "Fordítás.....";
    //wait 10 seconds
    setTimeout(function(){
        translated.innerHTML = "Kráter";
    }, 10000);
});
