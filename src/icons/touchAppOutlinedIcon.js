import { initIcon } from "./icon.js";

//the url of the touch app outlined svg; resolved relative to this module
const URL_TOUCHAPPOUTLINED = new URL('../../assets/icons/touchAppOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a touch app outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/touchAppOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTouchAppOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'touchAppOutlinedIcon', url: URL_TOUCHAPPOUTLINED }, ...properties);
}

/**
 * Creates a touch app outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const touchAppOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTouchAppOutlinedIcon(element, ...properties);
    return element;
}
