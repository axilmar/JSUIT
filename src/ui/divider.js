import { initHr } from "../html/hr.js";
import { initDividerBase } from "./dividerBase.js";

/**
 * Initializes an instance of HTMLHRElement as a divider, looking like MUI's Divider.
 *
 * It invokes the function `initHr(element, ...properties)`.
 *
 * The element gets the class 'divider', and the properties `orientation` ('horizontal' or 'vertical') and `variant` ('stretch', 'inset'
 * or 'middle'); see `initDividerBase`.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDivider = (element, ...properties) => {
    console.assert(element instanceof HTMLHRElement);
    initDividerBase(element);
    initHr(element, ...properties);
}

/**
 * Creates a divider.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const divider = (...properties) => {
    const element = document.createElement('hr');
    initDivider(element, ...properties);
    return element;
}
