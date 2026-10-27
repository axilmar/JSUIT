import { initIcon } from "./icon.js";

//the url of the gesture svg; resolved relative to this module
const URL_GESTURE = new URL('../../assets/icons/gesture.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gesture icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gesture.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGestureIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gestureIcon', url: URL_GESTURE }, ...properties);
}

/**
 * Creates a gesture icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gestureIcon = (...properties) => {
    const element = document.createElement('div');
    initGestureIcon(element, ...properties);
    return element;
}
