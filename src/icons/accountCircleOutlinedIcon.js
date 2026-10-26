import { initIcon } from "./icon.js";

//the url of the account circle outlined svg; resolved relative to this module
const URL_ACCOUNTCIRCLEOUTLINED = new URL('../../assets/icons/accountCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an account circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accountCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccountCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACCOUNTCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates an account circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accountCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccountCircleOutlinedIcon(element, ...properties);
    return element;
}
