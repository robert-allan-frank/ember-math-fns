import { helper } from '@ember/component/helper';

/**
 * Determine the absolute value of a number.
 *
 * @public
 * @function mathAbs
 * @param {number} value The value to abs.
 * @returns {number} The positive absolute value.
 */
export function mathAbs([value]) {
  return Math.abs(value);
}

export default helper(mathAbs);
