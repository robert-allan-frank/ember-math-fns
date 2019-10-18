import { helper } from '@ember/component/helper';

/**
 * Determine if two or more are exact equals.
 *
 * @public
 * @function mathEq
 * @param {...number} operands The numbers to compare.
 * @return {boolean} True if all operands are equal.
 */
export function mathEq([...operands]) {
  // range check at least 2 operands
  if (operands.length < 2) {
    return false;
  }

  // get first value
  const first = operands[0];

  // compare first with each subsequent value for a match
  return operands.slice(1).every(value => value === first);
}

export default helper(mathEq);
