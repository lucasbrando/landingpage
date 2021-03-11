function showhidecontent() {
    if(document.querySelector('#content').style.display == 'none') {
        document.querySelector('#content').classList.add('contentopen');
    } else {
        document.querySelector('#content').classList.remove('contentopen');
        document.querySelector('#content').classList.add('contentclose');
    }    
}
