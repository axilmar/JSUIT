import { initIcon } from "./icon.js";

//the url of the play circle filled outlined svg; resolved relative to this module
const URL_PLAYCIRCLEFILLEDOUTLINED = new URL('../../assets/icons/playCircleFilledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play circle filled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playCircleFilledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayCircleFilledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYCIRCLEFILLEDOUTLINED }, ...properties);
}

/**
 * Creates a play circle filled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playCircleFilledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayCircleFilledOutlinedIcon(element, ...properties);
    return element;
}
