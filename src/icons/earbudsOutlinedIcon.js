import { initIcon } from "./icon.js";

//the url of the earbuds outlined svg; resolved relative to this module
const URL_EARBUDSOUTLINED = new URL('../../assets/icons/earbudsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an earbuds outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/earbudsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEarbudsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'earbudsOutlinedIcon', url: URL_EARBUDSOUTLINED }, ...properties);
}

/**
 * Creates an earbuds outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const earbudsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEarbudsOutlinedIcon(element, ...properties);
    return element;
}
