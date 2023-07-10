const container = document.querySelector('#modalContainer');
const cancelButton = document.querySelector('#cancelButton').onclick = removeModal;
const btnClose = document.querySelector('#btn-close').onclick = removeModal;


/* Metodo para abrir modal de bootstrap */
function openBoostrapModal(component){
    container.insertAdjacentHTML('beforebegin', component);
    const modalContainer = document.querySelector('#myModal');
    var myModal = new bootstrap.Modal(modalContainer, {
        backdrop: 'static',
        keyboard: false,
        focus: true,
    })
    myModal.show()
}

function removeModal(){
    const modalContainer = document.querySelector('#myModal');
    modalContainer.remove();
}

/* Metodo para abrir modal luego de terminar procedimiento de API */
// const removeModal = () => {
//     console.log('remove modal')
//     const modalContainer = document.querySelector('#myModal');
//     modalContainer.remove();
// }


