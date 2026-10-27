import { initIcon } from "./icon.js";

//the url of the check circle outline outlined svg; resolved relative to this module
const URL_CHECKCIRCLEOUTLINEOUTLINED = new URL('../../assets/icons/checkCircleOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a check circle outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checkCircleOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckCircleOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checkCircleOutlineOutlinedIcon', url: URL_CHECKCIRCLEOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a check circle outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checkCircleOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckCircleOutlineOutlinedIcon(element, ...properties);
    return element;
}
