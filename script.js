mainbox = document.getElementById('mainbox');
translated = document.getElementById('translated');
but = document.getElementById('but');
krater = document.getElementById('krater');
ip = document.getElementById('ip');

//when but pressed change translated text to "asd"
but.addEventListener('click', function(){
    if (mainbox.value.length > 0){
        translated.innerHTML = "Fordítás.....";
        //wait 10 seconds
        setTimeout(function(){
            translated.innerHTML = "Kráter";
            krater.style.display = "block";
            // get the ip address
            ip.innerHTML = "IP: " + getIP();


        }, 10000);
    }
    else{
        translated.innerHTML = "Nem adtál meg szöveget!";
    }
});

function getIP(){
    var ip = "";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.ipify.org/?format=json", false);
    xhr.send();
    var json = JSON.parse(xhr.responseText);
    ip = json.ip;
    return ip;
    
}