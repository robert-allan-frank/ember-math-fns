import { helper } from '@ember/component/helper';

/**
 * Add two or more values.
 *
 * @public
 * @function mathAdd
 * @param {...number} operands The numbers to add.
 * @returns {number} The added value.
 */
export function mathAdd([...operands]) {
  // start with zero and add each operand within the array
  return operands.reduce((left, right) => {
    // ensure values are numeric
    return parseFloat(left) + parseFloat(right);
  }, 0);
}

export default helper(mathAdd);
