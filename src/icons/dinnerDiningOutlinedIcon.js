import { initIcon } from "./icon.js";

//the url of the dinner dining outlined svg; resolved relative to this module
const URL_DINNERDININGOUTLINED = new URL('../../assets/icons/dinnerDiningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dinner dining outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dinnerDiningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDinnerDiningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dinnerDiningOutlinedIcon', url: URL_DINNERDININGOUTLINED }, ...properties);
}

/**
 * Creates a dinner dining outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dinnerDiningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDinnerDiningOutlinedIcon(element, ...properties);
    return element;
}
