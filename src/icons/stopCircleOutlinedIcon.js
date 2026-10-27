import { initIcon } from "./icon.js";

//the url of the stop circle outlined svg; resolved relative to this module
const URL_STOPCIRCLEOUTLINED = new URL('../../assets/icons/stopCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stop circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stopCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStopCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stopCircleOutlinedIcon', url: URL_STOPCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a stop circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stopCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStopCircleOutlinedIcon(element, ...properties);
    return element;
}
