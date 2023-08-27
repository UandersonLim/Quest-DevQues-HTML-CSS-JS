let fillField = document.querySelectorAll('.campo');
let botaoEnviar = document.querySelector('button');
let campoObrigatorio = document.querySelectorAll('small');


let count = 0;
fillField.forEach(input =>{
    input.addEventListener('change', () =>{
    if (input.value[count] !== ""){
        input.classList.add('border-green');
        campoObrigatorio[count].style.visibility = 'hidden';
        count++;
    }
    }
    )
})


function validationform(){
    for(let i = 0; i < fillField.length; i++){
      if(fillField[i].value === ""){
        fillField[i].classList.add('border');
        campoObrigatorio[i].style.visibility = 'visible';
      }else{
        fillField[i].classList.add('border-green')
        campoObrigatorio[i].style.visibility = 'hidden';
      }
    }

}
