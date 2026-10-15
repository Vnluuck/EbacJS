    const Rand = Math.floor(Math.random() * 100) + 1;
    console.log(Rand);
    function chute(){
    const numeroJogo = document.querySelector('input#numJ')
    const numJ = Number(numeroJogo.value)
    const res = document.querySelector('div#res')
    const tt = document.querySelector('p#tentativas')

    if(numJ > 100 || numJ < 1){
        window.alert('Digite um número válido entre 1 e 100')
    } else {
    for(let c = 1; c <= 6; c++){
    let tentativas = 6
             if(numJ > Rand){
                res.innerHTML = "O número que você chutou é maior que o número gerado"
                tentativas -= c
                tt.innerHTML = `${tentativas}`
            } if(numJ < Rand){
                res.innerHTML = "O número que você chutou é menor que o número gerado"
                tentativas -= c
                tt.innerHTML = `${tentativas}`
            } if(numJ == Rand){
                res.innerHTML = "Parabens! Você acertou"
                return c = 7
            }
        }
    if(tentativas == 0){
    res.innerHTML = "Suas tentativas acabaram :("
    }
    }
}