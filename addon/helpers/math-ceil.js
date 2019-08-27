import { helper } from '@ember/component/helper';

/**
 * Round a value up to nearest int.
 *
 * @public
 * @function mathCeil
 * @param {number} value The value to round.
 * @returns A rounded up int.
 */
export function mathCeil([value]) {
  return Math.ceil(value);
}

export default helper(mathCeil);
