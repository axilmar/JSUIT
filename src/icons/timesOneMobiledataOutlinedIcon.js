import { initIcon } from "./icon.js";

//the url of the times one mobiledata outlined svg; resolved relative to this module
const URL_TIMESONEMOBILEDATAOUTLINED = new URL('../../assets/icons/timesOneMobiledataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a times one mobiledata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timesOneMobiledataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimesOneMobiledataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TIMESONEMOBILEDATAOUTLINED }, ...properties);
}

/**
 * Creates a times one mobiledata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timesOneMobiledataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTimesOneMobiledataOutlinedIcon(element, ...properties);
    return element;
}
