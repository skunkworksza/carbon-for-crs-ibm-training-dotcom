import settings from 'carbon-components/es/globals/js/settings';
import { customElement } from 'lit-element';
import BXTableRow from './table-row';

const { prefix } = settings;

/**
 * Data table header row.
 */
@customElement(`${prefix}-table-header-row` as any)
class BXTableHeaderRow extends BXTableRow {
  /**
   * The name of the custom event fired before this row is selected/unselected upon a user gesture.
   * Cancellation of this event stops the user-initiated change in selection.
   */
  static get eventBeforeChangeSelection() {
    return `${prefix}-table-change-selection-all`;
  }
}

export default BXTableHeaderRow;
