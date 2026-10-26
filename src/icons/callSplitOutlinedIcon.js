import { initIcon } from "./icon.js";

//the url of the call split outlined svg; resolved relative to this module
const URL_CALLSPLITOUTLINED = new URL('../../assets/icons/callSplitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call split outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callSplitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallSplitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALLSPLITOUTLINED }, ...properties);
}

/**
 * Creates a call split outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callSplitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallSplitOutlinedIcon(element, ...properties);
    return element;
}
