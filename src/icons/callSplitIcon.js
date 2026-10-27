import { initIcon } from "./icon.js";

//the url of the call split svg; resolved relative to this module
const URL_CALLSPLIT = new URL('../../assets/icons/callSplit.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call split icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callSplit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallSplitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callSplitIcon', url: URL_CALLSPLIT }, ...properties);
}

/**
 * Creates a call split icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callSplitIcon = (...properties) => {
    const element = document.createElement('div');
    initCallSplitIcon(element, ...properties);
    return element;
}
