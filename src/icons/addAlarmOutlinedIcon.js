import { initIcon } from "./icon.js";

//the url of the add alarm outlined svg; resolved relative to this module
const URL_ADDALARMOUTLINED = new URL('../../assets/icons/addAlarmOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add alarm outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addAlarmOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddAlarmOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addAlarmOutlinedIcon', url: URL_ADDALARMOUTLINED }, ...properties);
}

/**
 * Creates an add alarm outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addAlarmOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddAlarmOutlinedIcon(element, ...properties);
    return element;
}
