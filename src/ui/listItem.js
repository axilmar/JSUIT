import { initLi } from "../html/li.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "../utility/utility.js";

import listItemStyleSheet from './listItem.css' with { type: 'css' };

adoptStyleSheet(listItemStyleSheet);

/**
 * Initializes an instance of HTMLLIElement as a list item, looking like MUI's ListItem.
 *
 * It invokes the function `initLi(element, ...properties)`.
 *
 * The element gets the class 'listItem' by default; an `additionalClassName` property adds further classes.
 * Its children are aligned horizontally, centered vertically, with a gap of 16px, inside MUI's padding (8px vertical, 16px horizontal).
 *
 * The element gets the property 'displaySize', which accepts 'small', 'medium' (the default) and 'large'. The medium size is MUI's list item;
 * the small size is MUI's dense one (4px vertical padding, a 0.875rem font). MUI has no large list item, so the large size extends them:
 * 12px vertical padding and a 1.25rem font.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initListItem = (element, ...properties) => {
    console.assert(element instanceof HTMLLIElement);
    defineDisplaySizeProperty(element, 'listItem-small', 'listItem-large');
    initLi(element, { additionalClassName: 'listItem' }, ...properties);
}

/**
 * Creates a list item.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const listItem = (...properties) => {
    const element = document.createElement('li');
    initListItem(element, ...properties);
    return element;
}
