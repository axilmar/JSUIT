import { initIcon } from "./icon.js";

//the url of the check circle outlined svg; resolved relative to this module
const URL_CHECKCIRCLEOUTLINED = new URL('../../assets/icons/checkCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a check circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checkCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checkCircleOutlinedIcon', url: URL_CHECKCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a check circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checkCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckCircleOutlinedIcon(element, ...properties);
    return element;
}
