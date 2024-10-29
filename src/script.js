const $btnSignIn= document.querySelector('.sign-in-btn'),/*Esto me permite  acceder al boton de sign in*/
      $btnSignUp = document.querySelector('.sign-up-btn'), /*Esto me permite acceder al  botón de sign up */
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => { /*Esto me permite  escuchar los eventos de click*/
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
})