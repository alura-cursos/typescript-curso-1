import { NegotiationController } from './controllers/negotiation_controller.js';

const controller = new NegotiationController();
const form = document.querySelector('.form');
const btnImport = document.querySelector('#btnImport');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
  });
} else {
  throw new Error('Form not found');
}

if (btnImport) {
  btnImport.addEventListener('click', () => {
    controller.importData();
  });
} else {
  throw new Error('Button not found');
}
