import { helper } from '@ember/component/helper';

/**
 * Increment a number by 1.
 *
 * @public
 * @function mathIncrement
 * @param {number} value The value to increment.
 * @returns An incremented value.
 */
export function mathIncrement([value]) {
  return value += 1;
}

export default helper(mathIncrement);
