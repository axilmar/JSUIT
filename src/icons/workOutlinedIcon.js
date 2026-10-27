import { initIcon } from "./icon.js";

//the url of the work outlined svg; resolved relative to this module
const URL_WORKOUTLINED = new URL('../../assets/icons/workOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a work outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/workOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWorkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'workOutlinedIcon', url: URL_WORKOUTLINED }, ...properties);
}

/**
 * Creates a work outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const workOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWorkOutlinedIcon(element, ...properties);
    return element;
}
