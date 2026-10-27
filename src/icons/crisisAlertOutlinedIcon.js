import { initIcon } from "./icon.js";

//the url of the crisis alert outlined svg; resolved relative to this module
const URL_CRISISALERTOUTLINED = new URL('../../assets/icons/crisisAlertOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crisis alert outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crisisAlertOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCrisisAlertOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'crisisAlertOutlinedIcon', url: URL_CRISISALERTOUTLINED }, ...properties);
}

/**
 * Creates a crisis alert outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const crisisAlertOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCrisisAlertOutlinedIcon(element, ...properties);
    return element;
}
