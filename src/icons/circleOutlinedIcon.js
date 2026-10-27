import { initIcon } from "./icon.js";

//the url of the circle outlined svg; resolved relative to this module
const URL_CIRCLEOUTLINED = new URL('../../assets/icons/circleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/circleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'circleOutlinedIcon', url: URL_CIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const circleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCircleOutlinedIcon(element, ...properties);
    return element;
}
