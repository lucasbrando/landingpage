function showhidecontent() {
    if(document.querySelector('#content').classList.contains('contentclose')) {
        document.querySelector('#content').classList.remove('contentclose');
        document.querySelector('#content').classList.add('contentopen');
    } else {
        document.querySelector('#content').classList.remove('contentopen');
        document.querySelector('#content').classList.add('contentclose');
    }    
}
