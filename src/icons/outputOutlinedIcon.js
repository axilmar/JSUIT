import { initIcon } from "./icon.js";

//the url of the output outlined svg; resolved relative to this module
const URL_OUTPUTOUTLINED = new URL('../../assets/icons/outputOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an output outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/outputOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutputOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'outputOutlinedIcon', url: URL_OUTPUTOUTLINED }, ...properties);
}

/**
 * Creates an output outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outputOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOutputOutlinedIcon(element, ...properties);
    return element;
}
