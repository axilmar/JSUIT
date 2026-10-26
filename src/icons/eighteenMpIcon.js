import { initIcon } from "./icon.js";

//the url of the eighteen mp svg; resolved relative to this module
const URL_EIGHTEENMP = new URL('../../assets/icons/eighteenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eighteen mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eighteenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEighteenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EIGHTEENMP }, ...properties);
}

/**
 * Creates an eighteen mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eighteenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initEighteenMpIcon(element, ...properties);
    return element;
}
