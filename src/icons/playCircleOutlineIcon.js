import { initIcon } from "./icon.js";

//the url of the play circle outline svg; resolved relative to this module
const URL_PLAYCIRCLEOUTLINE = new URL('../../assets/icons/playCircleOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play circle outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playCircleOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayCircleOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYCIRCLEOUTLINE }, ...properties);
}

/**
 * Creates a play circle outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playCircleOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayCircleOutlineIcon(element, ...properties);
    return element;
}
