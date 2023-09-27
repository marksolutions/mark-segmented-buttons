import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mark-segmented-button")
export class MarkSegmentedButton extends LitElement {
  static override styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  override render() {
    return html`segmented button`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mark-segmented-button": MarkSegmentedButton;
  }
}
