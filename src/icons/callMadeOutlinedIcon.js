import { initIcon } from "./icon.js";

//the url of the call made outlined svg; resolved relative to this module
const URL_CALLMADEOUTLINED = new URL('../../assets/icons/callMadeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call made outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callMadeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallMadeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALLMADEOUTLINED }, ...properties);
}

/**
 * Creates a call made outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callMadeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallMadeOutlinedIcon(element, ...properties);
    return element;
}
