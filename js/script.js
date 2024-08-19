
// Mudando a cor da navbar sobre a div booking

window.addEventListener('scroll', alterarCorNavbar);


function alterarCorNavbar(){
    const navbar = document.querySelector('nav');
    const booking = document.querySelector('.booking');
    const bookingRect= booking.getBoundingClientRect();

    if(bookingRect.top < 50){
        navbar.classList.add('navbar-solid');
    }else{
        navbar.classList.remove('navbar-solid');
    }
}


// Carrossel


const clientes = document.querySelectorAll('.cliente');
let clienteAtual = 0;

function mostrarSlide(index) {
    clientes.forEach((cliente, i)=> {
        if(i=== index){
            cliente.style.display = 'block';

        }else{
            cliente.style.display = 'none';
        }
    });
}

function prox() {
    clienteAtual = (clienteAtual + 1) % clientes.length;
    mostrarSlide(clienteAtual);
}

function ant() {
    clienteAtual = (clienteAtual -1 + clientes.length) % clientes.length;
    mostrarSlide(clienteAtual)
}

document.querySelector('.ant').addEventListener('click', ant);

document.querySelector('.prox').addEventListener('click', prox);

// Mostra o primeiro cliente ao carregar pagina

mostrarSlide(clienteAtual);