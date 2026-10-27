import { initIcon } from "./icon.js";

//the url of the try outlined svg; resolved relative to this module
const URL_TRYOUTLINED = new URL('../../assets/icons/tryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a try outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tryOutlinedIcon', url: URL_TRYOUTLINED }, ...properties);
}

/**
 * Creates a try outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTryOutlinedIcon(element, ...properties);
    return element;
}
