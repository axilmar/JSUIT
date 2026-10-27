import { initIcon } from "./icon.js";

//the url of the add alert outlined svg; resolved relative to this module
const URL_ADDALERTOUTLINED = new URL('../../assets/icons/addAlertOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add alert outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addAlertOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddAlertOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addAlertOutlinedIcon', url: URL_ADDALERTOUTLINED }, ...properties);
}

/**
 * Creates an add alert outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addAlertOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddAlertOutlinedIcon(element, ...properties);
    return element;
}
