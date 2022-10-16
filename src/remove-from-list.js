const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let current = l;
  let count = 0;
  const newArr = [];

  while (current) {
    if (current.value === k) {
      count += 1;
      newArr.push(count);
      current = current.next;
    } else {
      count += 1;
      current = current.next;
    }
  }

  if (newArr.length < 1) {
    return l;
  }

  newArr.forEach((index, number) => {
    current = l;
    if (index - number === 1) {
      l.value = current.next.value;
      current.next = current.next.next;
    } else {
      let previous = null;
      let i = 1;

      while (i < index - number) {
        previous = current;
        current = current.next;
        i += 1;
      }
      previous.next = current.next;
    }
  });
  return l;
}

module.exports = {
  removeKFromList
};
