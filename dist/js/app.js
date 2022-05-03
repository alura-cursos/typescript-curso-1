import { NegociacaoController } from "./controllers/NegociacaoController.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
