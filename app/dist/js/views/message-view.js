import { View } from './view.js';
export class MessageView extends View {
    template(model) {
        return `
        <p class="alert alert-info fw-bold fs-6 text-center">
          ${model}
        </p>
      `;
    }
}
//# sourceMappingURL=message-view.js.map