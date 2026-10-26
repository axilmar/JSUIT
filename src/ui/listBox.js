import { initUl } from "../html/ul.js";
import { adoptStyleSheet } from "../utility/utility.js";
import { defineNonVirtualCountProperty } from "./virtualListBox.js";

import listBoxStyleSheet from './listBox.css' with { type: 'css' };

adoptStyleSheet(listBoxStyleSheet);

/**
 * Initializes an instance of HTMLUListElement as a list box, looking like MUI's List inside a Box with a thin border.
 *
 * It invokes the function `initUl(element, ...properties)`.
 *
 * The element gets the class 'listBox' by default; an `additionalClassName` property adds further classes.
 * It has no bullets, MUI's vertical padding, and a thin border with rounded corners. Its children are usually list items (see `listItem`).
 *
 * The element gets the property 'nonVirtualCount' (the default is 32): when the list has more children, it switches to virtualized drawing, which
 * renders only the visible items, so that it supports a great number of them; see `defineNonVirtualCountProperty`.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initListBox = (element, ...properties) => {
    console.assert(element instanceof HTMLUListElement);
    defineNonVirtualCountProperty(element);
    initUl(element, { additionalClassName: 'listBox' }, ...properties);
}

/**
 * Creates a list box.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const listBox = (...properties) => {
    const element = document.createElement('ul');
    initListBox(element, ...properties);
    return element;
}
