import { initIcon } from "./icon.js";

//the url of the play circle filled white svg; resolved relative to this module
const URL_PLAYCIRCLEFILLEDWHITE = new URL('../../assets/icons/playCircleFilledWhite.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play circle filled white icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playCircleFilledWhite.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayCircleFilledWhiteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYCIRCLEFILLEDWHITE }, ...properties);
}

/**
 * Creates a play circle filled white icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playCircleFilledWhiteIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayCircleFilledWhiteIcon(element, ...properties);
    return element;
}
