import { helper } from '@ember/component/helper';

/**
 * Determine if a number is positive, negative, or zero.
 *
 * @public
 * @function mathSign
 * @param {number} value The value to compare.
 * @returns {number} 0 if 0, 1 if positive, -1 if negative.
 */
export function mathSign([value]) {
  return Math.sign(value);
}

export default helper(mathSign);
