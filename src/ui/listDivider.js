import { initLi } from "../html/li.js";
import { initDividerBase } from "./dividerBase.js";

/**
 * Initializes an instance of HTMLLIElement as a divider of a list, looking like MUI's Divider.
 *
 * It invokes the function `initLi(element, ...properties)`.
 *
 * The element gets the class 'divider', the role 'separator', and the properties `orientation` ('horizontal' or 'vertical') and
 * `variant` ('stretch', 'inset' or 'middle'); see `initDividerBase`.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initListDivider = (element, ...properties) => {
    console.assert(element instanceof HTMLLIElement);
    element.setAttribute('role', 'separator');
    initDividerBase(element);
    initLi(element, { additionalClassName: 'listDivider' }, ...properties);
}

/**
 * Creates a divider for a list.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const listDivider = (...properties) => {
    const element = document.createElement('li');
    initListDivider(element, ...properties);
    return element;
}
