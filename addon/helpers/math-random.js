import { helper } from '@ember/component/helper';

/**
 * Get a random seed between 0 and 1.
 *
 * @public
 * @function mathRandom
 * @returns {number} A random seed.
 */
export function mathRandom() {
  return Math.random();
}

export default helper(mathRandom);
