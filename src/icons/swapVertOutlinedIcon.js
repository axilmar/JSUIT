import { initIcon } from "./icon.js";

//the url of the swap vert outlined svg; resolved relative to this module
const URL_SWAPVERTOUTLINED = new URL('../../assets/icons/swapVertOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swap vert outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swapVertOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwapVertOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swapVertOutlinedIcon', url: URL_SWAPVERTOUTLINED }, ...properties);
}

/**
 * Creates a swap vert outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swapVertOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwapVertOutlinedIcon(element, ...properties);
    return element;
}
