import { NegotiationController } from './controllers/negotiation_controller.js'
import { Negotiations } from './models/negotiations.js'
import { NegotiationView } from './views/negotiation-view.js'

const controller = new NegotiationController()
const form = document.querySelector('.form')

form.addEventListener('submit', event => {
  event.preventDefault()
  controller.add()
})

const model = new Negotiations()
const negotiationView = new NegotiationView('#negotiationView')
const template = negotiationView.template(model)
