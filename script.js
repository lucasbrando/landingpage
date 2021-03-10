function showhidecontent() {
    if(document.querySelector('#content').style.display == 'none') {
        document.querySelector('#content').style.display = 'block';
    } else {
        document.querySelector('#content').style.display = 'none';
    }    
}

showhidecontent();