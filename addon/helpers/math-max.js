import { helper } from '@ember/component/helper';

/**
 * Determine the max of two or more numbers.
 *
 * @public
 * @function mathMax
 * @param {number[]} The values to compare.
 * @returns {number} The largest value.
 */
export function mathMax([...values]) {
  return Math.max(...values);
}

export default helper(mathMax);
