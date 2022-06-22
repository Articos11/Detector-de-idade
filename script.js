function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.getElementById('txtano');
    let res = document.querySelector('div#res');
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        let fSex = document.getElementsByName('radsex');
        let idade = ano - Number(fAno.value)
        let gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança 
                img.setAttribute('src', 'bebe-h.png')
                img.style.maxWidth = '250px'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-h.png')
                img.style.maxWidth = '250px'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-h.png')
                img.style.maxWidth = '250px'
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-h.png')
                img.style.maxWidth = '250px'
            }
        } else if (fSex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança 
                img.setAttribute('src', 'bebe-m.png')
                img.style.maxWidth= '250px'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
                img.style.maxWidth= '250px'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.png')
                img.style.maxWidth= '250px'
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.png')
                img.style.maxWidth= '250px'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}