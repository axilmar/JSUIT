import { initIcon } from "./icon.js";

//the url of the icecream outlined svg; resolved relative to this module
const URL_ICECREAMOUTLINED = new URL('../../assets/icons/icecreamOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an icecream outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/icecreamOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIcecreamOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ICECREAMOUTLINED }, ...properties);
}

/**
 * Creates an icecream outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const icecreamOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initIcecreamOutlinedIcon(element, ...properties);
    return element;
}
