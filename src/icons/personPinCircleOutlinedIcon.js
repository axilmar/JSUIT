import { initIcon } from "./icon.js";

//the url of the person pin circle outlined svg; resolved relative to this module
const URL_PERSONPINCIRCLEOUTLINED = new URL('../../assets/icons/personPinCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person pin circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personPinCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonPinCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONPINCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a person pin circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personPinCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonPinCircleOutlinedIcon(element, ...properties);
    return element;
}
