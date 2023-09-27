import { LitElement, html, css } from "lit";
import "../src/mark-segmented-button";

export class MarkSegmentedButtonDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`<mark-segmented-button></mark-segmented-button>`;
  }
}
customElements.define("mark-segmented-button-demo", MarkSegmentedButtonDemo);
