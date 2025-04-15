const formDOM = document.querySelector( '#form' );
const modalDOM = document.querySelector( '#modal' );
const btnCloseDOM = document.querySelector( '#btn_close-modal' );


function openModal() {
    modalDOM.open = true
}

function closeModal() {
    modalDOM.open = false
}

function sendEmail() {
    formDOM.addEventListener(
      
      
      
      'submit', (e) => {
        e.preventDefault()

        const params = {
            name: document.querySelector( ' #name ' ).value,
            email: document.querySelector( ' #email ' ).value,
            subject: document.querySelector( ' #subject ' ).value,
            message: document.querySelector( ' #message ' ).value,
        };
        if(params.name && params.email && params.subject && params.message) {

    
        emailjs.send('service_bjv6x0s', 'template_v2bcxp8', params).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              openModal()
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
    });
}