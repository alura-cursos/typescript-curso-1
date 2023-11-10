import { View } from './view.js';

export class MessageView extends View<string> {
  protected template(model: string): string {
    return `
        <p class="alert alert-info font-weight-bold">
          ${model}
        </p>
      `;
  }
}
