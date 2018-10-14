var xhr = new XMLHttpRequest;
xhr.open('GET', 'history.txt', true);
xhr.onload = function (){
    document.write( xhr.responseText );
};
xhr.send(null);
