import React from 'react'
import './store-modal.css'

export default class Modal extends React.Component {
    // startModal(modalID) {
    //     const modal = document.getElementById(modalID);

    //     if(localStorage.closeModal !== modalID) {
    //         if(modal) {
    //             modal.classList.add('show-modal');
    //             modal.addEventListener('select', (event) => {
    //                 if(event.target.id == modalID || event.target.className == 'close-modal') {
    //                     modal.classList.remove('show-modal');
    //                     localStorage.closeModal = modalID;
    //                 }
    //             });
    //         }
    //     }
        
    //     const action = document.querySelector('button-element');
    //     action.addEventListener('select', () => startModal('store-modal'));
    // }

    render() {
        return (
            <div id="store-modal" class="modal-container">
                <div class="modal-content">
                    <button class="close-modal">X</button>
                    <p>FUNCIONA!!! SIM, FUNCIONA!!!</p>
                </div>
            </div>
        )
    }
}