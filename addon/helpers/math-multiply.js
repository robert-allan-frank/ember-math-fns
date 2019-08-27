import { helper } from '@ember/component/helper';

/**
 * Multiply two or more values.
 *
 * @public
 * @function mathMultiply
 * @param {numbers[]} operands The numbers to multiply.
 * @returns {number} The multipied value.
 */
export function mathMultiply([...operands]) {
  // start with one and multiply each operand within the array
  return operands.reduce((left, right) => {
    // ensure values are numeric
    return parseFloat(left) * parseFloat(right);
  }, 1);
}

export default helper(mathMultiply);
