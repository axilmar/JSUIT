import { initIcon } from "./icon.js";

//the url of the sell outlined svg; resolved relative to this module
const URL_SELLOUTLINED = new URL('../../assets/icons/sellOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sell outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sellOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSellOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sellOutlinedIcon', url: URL_SELLOUTLINED }, ...properties);
}

/**
 * Creates a sell outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sellOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSellOutlinedIcon(element, ...properties);
    return element;
}
