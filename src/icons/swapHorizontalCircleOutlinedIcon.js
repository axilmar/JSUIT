import { initIcon } from "./icon.js";

//the url of the swap horizontal circle outlined svg; resolved relative to this module
const URL_SWAPHORIZONTALCIRCLEOUTLINED = new URL('../../assets/icons/swapHorizontalCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swap horizontal circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swapHorizontalCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwapHorizontalCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWAPHORIZONTALCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a swap horizontal circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swapHorizontalCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwapHorizontalCircleOutlinedIcon(element, ...properties);
    return element;
}
