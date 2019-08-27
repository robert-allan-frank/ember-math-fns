import { helper } from '@ember/component/helper';

/**
 * Perform the expoential of two values.
 *
 * @public
 * @function mathPow
 * @param {number} base The base value.
 * @param {number} exponent The exponent value.
 * @returns {number} The exponential value.
 */
export function mathPow([base, exponent]) {
  return Math.pow(base, exponent);
}

export default helper(mathPow);
