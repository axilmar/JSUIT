import { initIcon } from "./icon.js";

//the url of the supervised user circle outlined svg; resolved relative to this module
const URL_SUPERVISEDUSERCIRCLEOUTLINED = new URL('../../assets/icons/supervisedUserCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a supervised user circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/supervisedUserCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSupervisedUserCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUPERVISEDUSERCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a supervised user circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const supervisedUserCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSupervisedUserCircleOutlinedIcon(element, ...properties);
    return element;
}
