import { initIcon } from "./icon.js";

//the url of the punch clock outlined svg; resolved relative to this module
const URL_PUNCHCLOCKOUTLINED = new URL('../../assets/icons/punchClockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a punch clock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/punchClockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPunchClockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'punchClockOutlinedIcon', url: URL_PUNCHCLOCKOUTLINED }, ...properties);
}

/**
 * Creates a punch clock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const punchClockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPunchClockOutlinedIcon(element, ...properties);
    return element;
}
