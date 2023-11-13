import { View } from './view.js';

export class MessageView extends View<string> {
  protected template(model: string): string {
    return `
        <p class="alert alert-info fw-bold fs-6 text-center">
          ${model}
        </p>
      `;
  }
}
