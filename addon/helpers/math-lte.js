import { helper } from '@ember/component/helper';

/**
 * Determine if each value is less than equal to each subsequent value.
 *
 * @public
 * @function mathLte
 * @param {...numbers} operands The numbers to compare.
 * @return {boolean} True if all operands are equal.
 */
export function mathLte([...operands]) {
  // range check at least 2 operands
  if (operands.length < 2) {
    return false;
  }

  // iterate starting with second operand
  for (let i = 1; i < operands.length; i++) {
    // ensure previous value is less than equal to current value
    if (operands[i - 1] <= operands[i]) {
      continue;
    }

    return false;
  }

  return true;
}

export default helper(mathLte);
