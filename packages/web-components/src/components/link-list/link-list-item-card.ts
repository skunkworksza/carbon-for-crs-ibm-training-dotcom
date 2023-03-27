/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from 'lit-element';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';
import DDSCardLink from '../card-link/card-link';
import styles from './link-list.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Link list item.
 *
 * @element dds-link-list-item-card
 */
@customElement(`${ddsPrefix}-link-list-item-card`)
class DDSLinkListItem extends DDSCardLink {
  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'listitem');
    }
    super.connectedCallback();
  }

  static get stableSelector() {
    return `${ddsPrefix}--link-list-item-card`;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static get styles() {
    return css`
      ${super.styles}${styles}
    `;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSLinkListItem;
