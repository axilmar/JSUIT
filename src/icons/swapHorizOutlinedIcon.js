import { initIcon } from "./icon.js";

//the url of the swap horiz outlined svg; resolved relative to this module
const URL_SWAPHORIZOUTLINED = new URL('../../assets/icons/swapHorizOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swap horiz outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swapHorizOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwapHorizOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swapHorizOutlinedIcon', url: URL_SWAPHORIZOUTLINED }, ...properties);
}

/**
 * Creates a swap horiz outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swapHorizOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwapHorizOutlinedIcon(element, ...properties);
    return element;
}
