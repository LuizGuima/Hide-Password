const showHideInput = (inputOverlay, inputPassword, inputIcon) =>{
    const overlay = document.getElementById(inputOverlay),
          input =document.getElementById(inputPassword),
          iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () =>{
        //Mudar senha para texto
        if(input.type === 'password'){
            //Troca para texto
            input.type = 'text'

            //Mudar o ícone
            iconEye.classList.add('bxs-show')
        }
        else{
            //Voltar para senha
            input.type='password'
            
            //Remover ícone
            iconEye.classList.remove('bxs-show')
        }

        overlay.classList.toggle('overlay-content')
    })
}

showHideInput('input-overlay','input-password','input-icon')