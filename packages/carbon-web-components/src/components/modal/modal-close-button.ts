/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, LitElement } from 'lit-element';
import Close20 from '@carbon/icons/lib/close/20';
import settings from 'carbon-components/es/globals/js/settings';
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import styles from './modal.scss';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

const { prefix } = settings;

/**
 * Modal close button.
 *
 * @element bx-modal-close-button
 * @csspart button The button.
 * @csspart close-icon The close icon.
 */
@customElement(`${prefix}-modal-close-button`)
class BXModalCloseButton extends FocusMixin(LitElement) {
  /**
   * The assistive text for the button.
   */
  @property({ attribute: 'assistive-text' })
  assistiveText = 'Close';

  createRenderRoot() {
    return this.attachShadow({
      mode: 'open',
      delegatesFocus:
        Number((/Safari\/(\d+)/.exec(navigator.userAgent) ?? ['', 0])[1]) <=
        537,
    });
  }

  render() {
    const { assistiveText } = this;
    return html`
      <button
        part="button"
        aria-label="${ifNonNull(assistiveText)}"
        class="${prefix}--modal-close"
        title="${ifNonNull(assistiveText)}">
        ${Close20({
          part: 'close-icon',
          class: `${prefix}--modal-close__icon`,
        })}
      </button>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default BXModalCloseButton;
