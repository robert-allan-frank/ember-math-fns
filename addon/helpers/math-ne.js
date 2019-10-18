import { helper } from '@ember/component/helper';

/**
 * Determine if two or more are not equal.
 *
 * @public
 * @function mathNe
 * @param {...numbers} operands The numbers to compare.
 * @return {boolean} True if all operands are equal.
 */
export function mathNe([...operands]) {
  // range check at least 2 operands
  if (operands.length < 2) {
    return false;
  }

  // get first value
  const first = operands[0];

  // compare first with each subsequent value for a non match
  return operands.slice(1).some(value => value !== first);
}

export default helper(mathNe);
