import { html, LitElement, unsafeCSS } from "lit";
import style from "./style.scss";

export class DscButton extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  constructor() {
    super();
  }

  render() {
    return html` <button><slot></slot></button>`;
  }
}
customElements.define("dsc-button", DscButton);
