import { initIcon } from "./icon.js";

//the url of the punch clock svg; resolved relative to this module
const URL_PUNCHCLOCK = new URL('../../assets/icons/punchClock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a punch clock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/punchClock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPunchClockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'punchClockIcon', url: URL_PUNCHCLOCK }, ...properties);
}

/**
 * Creates a punch clock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const punchClockIcon = (...properties) => {
    const element = document.createElement('div');
    initPunchClockIcon(element, ...properties);
    return element;
}
