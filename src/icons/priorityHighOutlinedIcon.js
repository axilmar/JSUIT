import { initIcon } from "./icon.js";

//the url of the priority high outlined svg; resolved relative to this module
const URL_PRIORITYHIGHOUTLINED = new URL('../../assets/icons/priorityHighOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a priority high outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/priorityHighOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPriorityHighOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'priorityHighOutlinedIcon', url: URL_PRIORITYHIGHOUTLINED }, ...properties);
}

/**
 * Creates a priority high outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const priorityHighOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPriorityHighOutlinedIcon(element, ...properties);
    return element;
}
