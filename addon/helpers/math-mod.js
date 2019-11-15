import { helper } from '@ember/component/helper';

/**
 * Perform the modulus of two values.
 *
 * @public
 * @function mathMod
 * @param {number} value The value.
 * @param {number} divisor The divisor.
 * @returns {number} The remainder value.
 */
export function mathMod([value, divisor]) {
  return value % divisor;
}

export default helper(mathMod);
