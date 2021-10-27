/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import BXAccordion from 'carbon-web-components/es/components/accordion/accordion';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import './filter-panel-input-select';
import styles from './filter-panel.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Filter group renders the entire accordion group.
 *
 * @element dds-filter-group
 */
@customElement(`${ddsPrefix}-filter-group`)
class DDSFilterGroup extends StableSelectorMixin(BXAccordion) {
  /**
   * Extends BXAccordion component
   */
  static get stableSelector() {
    return `${ddsPrefix}-filter-group`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSFilterGroup;
