import { helper } from '@ember/component/helper';

/**
 * Determine if two or more are not equal.
 *
 * @public
 * @function mathNe
 * @param {...number} operands The numbers to compare.
 * @return {boolean} True if all operands are equal.
 */
export function mathNe([...operands]) {
  // range check at least 2 operands
  if (operands.length < 2) {
    return false;
  }

  // get first value
  const first = operands.shift();

  // compare first with each subsequent value for a non match
  return operands.some(value => value !== first);
}

export default helper(mathNe);
