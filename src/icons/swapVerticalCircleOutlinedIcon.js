import { initIcon } from "./icon.js";

//the url of the swap vertical circle outlined svg; resolved relative to this module
const URL_SWAPVERTICALCIRCLEOUTLINED = new URL('../../assets/icons/swapVerticalCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swap vertical circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swapVerticalCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwapVerticalCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swapVerticalCircleOutlinedIcon', url: URL_SWAPVERTICALCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a swap vertical circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swapVerticalCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwapVerticalCircleOutlinedIcon(element, ...properties);
    return element;
}
