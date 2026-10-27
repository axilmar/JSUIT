import { initIcon } from "./icon.js";

//the url of the call missed outlined svg; resolved relative to this module
const URL_CALLMISSEDOUTLINED = new URL('../../assets/icons/callMissedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call missed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callMissedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallMissedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callMissedOutlinedIcon', url: URL_CALLMISSEDOUTLINED }, ...properties);
}

/**
 * Creates a call missed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callMissedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallMissedOutlinedIcon(element, ...properties);
    return element;
}
