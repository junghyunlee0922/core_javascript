import { getNode } from './getNode.js';
import { addClass, removeClass } from './css.js';
import { isString } from '../utils/typeOf.js';

/**
 *
 * @param {HTMLElement} node
 * @param {String} message
 * @param {Number} timeout
 * @returns void
 */

export function showAlert(node, message, timeout) {
  if (isString(node)) {
    node = getNode(node);
  }

  node.textContent = message;
  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}
