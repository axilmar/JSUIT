import { initIcon } from "./icon.js";

//the url of the door sliding outlined svg; resolved relative to this module
const URL_DOORSLIDINGOUTLINED = new URL('../../assets/icons/doorSlidingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a door sliding outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doorSlidingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoorSlidingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOORSLIDINGOUTLINED }, ...properties);
}

/**
 * Creates a door sliding outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doorSlidingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoorSlidingOutlinedIcon(element, ...properties);
    return element;
}
