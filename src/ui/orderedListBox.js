import { initOl } from "../html/ol.js";
import { adoptStyleSheet } from "../utility/utility.js";

import listBoxStyleSheet from './listBox.css' with { type: 'css' };
import orderedListBoxStyleSheet from './orderedListBox.css' with { type: 'css' };

adoptStyleSheet(listBoxStyleSheet);
adoptStyleSheet(orderedListBoxStyleSheet);

/**
 * Initializes an instance of HTMLOListElement as an ordered list box, looking like the list box (see `initListBox`), with numbered items.
 *
 * It invokes the function `initOl(element, ...properties)`.
 *
 * The element gets the classes 'listBox' and 'orderedListBox' by default; an `additionalClassName` property adds further classes.
 * Its children are usually list items (see `listItem`), which are numbered from 1, in a secondary text color, before their children. The attributes
 * 'start' and 'reversed' of the list are not used.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOrderedListBox = (element, ...properties) => {
    console.assert(element instanceof HTMLOListElement);
    initOl(element, { additionalClassName: 'listBox orderedListBox' }, ...properties);
}

/**
 * Creates an ordered list box.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const orderedListBox = (...properties) => {
    const element = document.createElement('ol');
    initOrderedListBox(element, ...properties);
    return element;
}
