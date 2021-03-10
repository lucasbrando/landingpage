function showhidecontent() {
    if(document.querySelector('#content').style.display == 'none') {
        document.querySelector('#content').style.display = 'block';
        document.querySelector('#bg').style.display = 'block';
    } else {
        document.querySelector('#content').style.display = 'none';
        document.querySelector('#bg').style.display = 'none';
    }    
}

showhidecontent();