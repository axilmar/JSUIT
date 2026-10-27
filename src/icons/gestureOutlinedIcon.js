import { initIcon } from "./icon.js";

//the url of the gesture outlined svg; resolved relative to this module
const URL_GESTUREOUTLINED = new URL('../../assets/icons/gestureOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gesture outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gestureOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGestureOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gestureOutlinedIcon', url: URL_GESTUREOUTLINED }, ...properties);
}

/**
 * Creates a gesture outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gestureOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGestureOutlinedIcon(element, ...properties);
    return element;
}
