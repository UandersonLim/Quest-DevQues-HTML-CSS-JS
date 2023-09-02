let fillField = document.querySelectorAll('.campo');
let botaoEnviar = document.querySelector('button');
let campoObrigatorio = document.querySelectorAll('small');

botaoEnviar.addEventListener('click', (e) =>{
  e.preventDefault()
let count = 0
  fillField.forEach((input) => {
    if(input.value) {
      input.classList.add('border-green')
      campoObrigatorio[count].style.visibility = 'hidden'
      count++
    }else{
      input.classList.remove('border-green')
      input.classList.add('border')
      campoObrigatorio[count].style.visibility = 'visible'
      count++
    }
  })
})