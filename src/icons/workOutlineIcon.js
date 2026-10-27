import { initIcon } from "./icon.js";

//the url of the work outline svg; resolved relative to this module
const URL_WORKOUTLINE = new URL('../../assets/icons/workOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a work outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/workOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWorkOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'workOutlineIcon', url: URL_WORKOUTLINE }, ...properties);
}

/**
 * Creates a work outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const workOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initWorkOutlineIcon(element, ...properties);
    return element;
}
