/*
Case Sensitive = reconhece letras maiusculas e minusculas.

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName ()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector ('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML ='Nome inválido!'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = '#05F29B'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexof('@') == -1 || email.value.indexof('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = '#05F29B'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Excedeu a quantidade permitida de caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário preenchido corretamente.')
    }else{
        alert('Formulário inválido, preencha corretamente antes de enviar ...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '450px'
    mapa.style.height = '200px'
}