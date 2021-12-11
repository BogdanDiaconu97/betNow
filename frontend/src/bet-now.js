import { html, LitElement } from 'lit-element';

export class BetNow extends LitElement {
  render() {
    return html`Welcome player!`;
  }
}

window.customElements.define('bet-now', BetNow);
