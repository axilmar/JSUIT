import { initIcon } from "./icon.js";

//the url of the access alarm outlined svg; resolved relative to this module
const URL_ACCESSALARMOUTLINED = new URL('../../assets/icons/accessAlarmOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an access alarm outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessAlarmOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessAlarmOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACCESSALARMOUTLINED }, ...properties);
}

/**
 * Creates an access alarm outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessAlarmOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessAlarmOutlinedIcon(element, ...properties);
    return element;
}
