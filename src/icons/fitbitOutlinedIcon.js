import { initIcon } from "./icon.js";

//the url of the fitbit outlined svg; resolved relative to this module
const URL_FITBITOUTLINED = new URL('../../assets/icons/fitbitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fitbit outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fitbitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFitbitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fitbitOutlinedIcon', url: URL_FITBITOUTLINED }, ...properties);
}

/**
 * Creates a fitbit outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fitbitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFitbitOutlinedIcon(element, ...properties);
    return element;
}
