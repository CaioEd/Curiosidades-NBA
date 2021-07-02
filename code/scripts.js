function responder() {
    const res = document.querySelector('.res')
    
    const buttonClick = document.querySelector('.alternativa.correta')

    const buttons = {
        altrnativa1: '16',
        alternativa2: '20',
        alternativa3: '17',
        alternativa4: '10'
    }

    if (buttonClick.value = buttons.alternativa3){
        res.innerHTML = (`acertou`)
    } else{
        res.innerHTML = (`errou`)
    }
}

