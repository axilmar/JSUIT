import { initIcon } from "./icon.js";

//the url of the av timer outlined svg; resolved relative to this module
const URL_AVTIMEROUTLINED = new URL('../../assets/icons/avTimerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an av timer outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/avTimerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAvTimerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'avTimerOutlinedIcon', url: URL_AVTIMEROUTLINED }, ...properties);
}

/**
 * Creates an av timer outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const avTimerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAvTimerOutlinedIcon(element, ...properties);
    return element;
}
