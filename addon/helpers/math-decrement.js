import { helper } from '@ember/component/helper';

/**
 * Decrement a number by 1.
 *
 * @public
 * @function mathDecrement
 * @param {number} value The value to decrement.
 * @returns An decremented value.
 */
export function mathDecrement([value]) {
  return value -= 1;
}

export default helper(mathDecrement);
