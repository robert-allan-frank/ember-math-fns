import { helper } from '@ember/component/helper';

/**
 * Negate/invert the sign of a value.
 *
 * @public
 * @function mathNegate
 * @param {number} value The value to invert.
 * @returns An inverted value.
 */
export function mathNegate([value]) {
  return value * -1;
}

export default helper(mathNegate);
