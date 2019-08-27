import { helper } from '@ember/component/helper';

/**
 * Determine the min of two or more numbers.
 *
 * @public
 * @function mathMin
 * @param {number[]} The values to compare.
 * @returns {number} The smallest value.
 */
export function mathMin([...values]) {
  return Math.min(...values);
}

export default helper(mathMin);
