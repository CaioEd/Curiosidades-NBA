function question1() {
    const res = document.querySelector('#res')

    const buttons = document.querySelectorAll('.alternativa')

    const alternativas = [
        '16',
        '20',
        '17',
        '10'
    ]


    if(buttons.value == alternativas[2]){
        res.innerHTML = (`Você acertou`)
    } else{
        res.innerHTML = (`Você errou`)
    }
}