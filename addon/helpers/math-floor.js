import { helper } from '@ember/component/helper';

/**
 * Round a value down to nearest int.
 *
 * @public
 * @function mathFloor
 * @param {number} value The value to round.
 * @returns A rounded down int.
 */
export function mathFloor([value]) {
  return Math.floor(value);
}

export default helper(mathFloor);
