import { helper } from '@ember/component/helper';

/**
 * Round a value up or down to the nearest int.
 *
 * @public
 * @function mathRound
 * @param {number} value The value to round.
 * @returns {number} The rounded int.
 */
export function mathRound([value]) {
  return Math.round(value);
}

export default helper(mathRound);
