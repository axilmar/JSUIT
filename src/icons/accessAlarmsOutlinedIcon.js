import { initIcon } from "./icon.js";

//the url of the access alarms outlined svg; resolved relative to this module
const URL_ACCESSALARMSOUTLINED = new URL('../../assets/icons/accessAlarmsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an access alarms outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessAlarmsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessAlarmsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accessAlarmsOutlinedIcon', url: URL_ACCESSALARMSOUTLINED }, ...properties);
}

/**
 * Creates an access alarms outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessAlarmsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessAlarmsOutlinedIcon(element, ...properties);
    return element;
}
