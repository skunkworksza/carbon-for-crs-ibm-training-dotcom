/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, LitElement } from 'lit-element';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';
import styles from './quote.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The source bottom copy content of quote.
 *
 * @element dds-quote-source-bottom-copy
 */
@customElement(`${ddsPrefix}-quote-source-bottom-copy`)
class DDSQuoteSourceBottomCopy extends LitElement {
  /**
   * The shadow slot this source bottom copy content should be in.
   */
  @property({ reflect: true })
  slot = 'source-bottom-copy';

  render() {
    return html` <slot></slot> `;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static styles = styles;
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSQuoteSourceBottomCopy;
