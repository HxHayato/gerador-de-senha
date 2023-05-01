const senha = document.querySelector('.txt-senha')
const btnCopiar = document.querySelector('.copiar')
const range = document.getElementById('num-caracter')
const txtRange = document.querySelector('.txt-range')
const check = document.querySelectorAll('.check')
const btnGerar = document.querySelector('.gerar')
const modalCopiar = document.querySelector('.confirmacao-copiar')

range.oninput = function () {
    txtRange.innerHTML = this.value
    gerarSenha()
}

btnGerar.addEventListener('click', (e) => {
    gerarSenha()
})

check.forEach((botao) => {
    botao.addEventListener('click', () => {
        gerarSenha()
    })
})

btnCopiar.addEventListener('click', (e) => {
    copiarSenha()
})

let listaPossivel = ''

function gerarSenha () {
    const lMinuscula = document.querySelector('#letra-minusc')
    const lMaiuscula = document.querySelector('#letra-maiusc')
    const numero = document.querySelector('#numero')
    const simbolo = document.querySelector('#simbolo')
    let senhaGerada = ''

    if (lMinuscula.checked) {
        listaPossivel += 'abcdefghijklmnopqrstuvwxyz'
    }

    if (lMaiuscula.checked) {
        listaPossivel += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    
    if (numero.checked) {
        listaPossivel += '0123456789'
    }
    
    if (simbolo.checked) {
        listaPossivel += "!#$%&'*,.:;<=>?@^_`|~"
    }

    for(let i = 0; i < range.value; i++){
        let pote = Math.floor(Math.random()*listaPossivel.length)
        senhaGerada += listaPossivel.slice(pote, pote+1)
    }
    
    senha.value = senhaGerada
    listaPossivel = ''
}

function copiarSenha () {
    navigator.clipboard.writeText(senha.value)

    .then(function () {
        modalCopiar.style.display = 'flex'
        modalCopiar.innerHTML = 'Copiado com sucesso!'
        setTimeout(esconderModal, 4000)
    })
    .catch(function(erro) {
        modalCopiar.style.display = 'flex'
        modalCopiar.innerHTML = `Erro ao copiar: ${erro}`
        setTimeout(esconderModal, 4000)
    })
}

function esconderModal () {
    modalCopiar.style.display = 'none'
}