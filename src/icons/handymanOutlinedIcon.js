import { initIcon } from "./icon.js";

//the url of the handyman outlined svg; resolved relative to this module
const URL_HANDYMANOUTLINED = new URL('../../assets/icons/handymanOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a handyman outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/handymanOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHandymanOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'handymanOutlinedIcon', url: URL_HANDYMANOUTLINED }, ...properties);
}

/**
 * Creates a handyman outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const handymanOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHandymanOutlinedIcon(element, ...properties);
    return element;
}
