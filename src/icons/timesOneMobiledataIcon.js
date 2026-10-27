import { initIcon } from "./icon.js";

//the url of the times one mobiledata svg; resolved relative to this module
const URL_TIMESONEMOBILEDATA = new URL('../../assets/icons/timesOneMobiledata.svg', import.meta.url).href;

/**
 * Initializes an icon element as a times one mobiledata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timesOneMobiledata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimesOneMobiledataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timesOneMobiledataIcon', url: URL_TIMESONEMOBILEDATA }, ...properties);
}

/**
 * Creates a times one mobiledata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timesOneMobiledataIcon = (...properties) => {
    const element = document.createElement('div');
    initTimesOneMobiledataIcon(element, ...properties);
    return element;
}
