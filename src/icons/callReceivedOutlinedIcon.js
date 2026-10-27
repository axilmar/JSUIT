import { initIcon } from "./icon.js";

//the url of the call received outlined svg; resolved relative to this module
const URL_CALLRECEIVEDOUTLINED = new URL('../../assets/icons/callReceivedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call received outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callReceivedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallReceivedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callReceivedOutlinedIcon', url: URL_CALLRECEIVEDOUTLINED }, ...properties);
}

/**
 * Creates a call received outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callReceivedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallReceivedOutlinedIcon(element, ...properties);
    return element;
}
