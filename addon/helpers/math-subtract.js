import { helper } from '@ember/component/helper';

/**
 * Subtract two or more values.
 *
 * @public
 * @function mathSubtract
 * @param {...number} operands The numbers to subtract.
 * @returns {number} The subtracted value.
 */
export function mathSubtract([...operands]) {
  // must have at least one operand
  if (operands.length === 0) {
    return 0;
  }

  // initial value will be first value in operands
  const initialValue = operands[0];

  // use remaining values for reduce array
  const remainingValues = operands.slice(1, operands.length);

  // start with first value and subtract each additional value
  return remainingValues.reduce((left, right) => {
    // ensure values are numeric
    return parseFloat(left) - parseFloat(right);
  }, initialValue);
}

export default helper(mathSubtract);
