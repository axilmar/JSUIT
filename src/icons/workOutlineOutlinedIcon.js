import { initIcon } from "./icon.js";

//the url of the work outline outlined svg; resolved relative to this module
const URL_WORKOUTLINEOUTLINED = new URL('../../assets/icons/workOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a work outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/workOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWorkOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'workOutlineOutlinedIcon', url: URL_WORKOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a work outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const workOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWorkOutlineOutlinedIcon(element, ...properties);
    return element;
}
