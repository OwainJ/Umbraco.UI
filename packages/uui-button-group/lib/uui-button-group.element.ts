import { LitElement, html, css } from 'lit';

/**
 *  Place <uui-button> elements in the slot. They will be nicely displayed.
 *  @element uui-button-group
 *  @slot - for buttons
 */
export class UUIButtonGroupElement extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
        align-items: stretch;
      }

      ::slotted(*) {
        --uui-button-border-radius: 0;
        flex-grow: 1;
      }
      ::slotted(*:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }
      ::slotted(*:first-child) {
        --uui-button-border-radius: var(--uui-size-border-radius, 3px) 0 0
          var(--uui-size-border-radius, 3px);
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 var(--uui-size-border-radius, 3px)
          var(--uui-size-border-radius, 3px) 0;
      }

      ::slotted(uui-dropdown) {
        --uui-dropdown-toggle-slot-button-border-radius: 0;
      }
      ::slotted(uui-dropdown:not(:first-child)) {
        --uui-dropdown-toggle-slot-button-merge-border-left: 1;
      }
      ::slotted(uui-dropdown:first-child) {
        --uui-dropdown-toggle-slot-button-border-radius: var(
            --uui-size-border-radius,
            3px
          )
          0 0 var(--uui-size-border-radius, 3px);
      }
      ::slotted(uui-dropdown:last-child) {
        --uui-dropdown-toggle-slot-button-border-radius: 0
          var(--uui-size-border-radius, 3px) var(--uui-size-border-radius, 3px)
          0;
      }

      ::slotted(*:hover) {
        z-index: 1;
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }
}