document.querySelector('.menu-btn').addEventListener('click',() => {    //Esta linea sirve para acceder al evento de nuestro html
    document.querySelector('.nav-menu').classList.toggle('show');   
    /*
    document.querySelector = selecciona un elemento de nuestro documento " .nav-menu " 
    classList.toggle('show')  = agregamos una clase a ese elemento y por medio de toggle va a mostrar o quitar la clase show dependiendo si ya lo tiene
    
    */
});
