import { initIcon } from "./icon.js";

//the url of the three mp outlined svg; resolved relative to this module
const URL_THREEMPOUTLINED = new URL('../../assets/icons/threeMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreeMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'threeMpOutlinedIcon', url: URL_THREEMPOUTLINED }, ...properties);
}

/**
 * Creates a three mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threeMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThreeMpOutlinedIcon(element, ...properties);
    return element;
}
