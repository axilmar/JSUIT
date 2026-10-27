import { initIcon } from "./icon.js";

//the url of the diamond outlined svg; resolved relative to this module
const URL_DIAMONDOUTLINED = new URL('../../assets/icons/diamondOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a diamond outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/diamondOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiamondOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'diamondOutlinedIcon', url: URL_DIAMONDOUTLINED }, ...properties);
}

/**
 * Creates a diamond outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const diamondOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDiamondOutlinedIcon(element, ...properties);
    return element;
}
