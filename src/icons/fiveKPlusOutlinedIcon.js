import { initIcon } from "./icon.js";

//the url of the five k plus outlined svg; resolved relative to this module
const URL_FIVEKPLUSOUTLINED = new URL('../../assets/icons/fiveKPlusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a five k plus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiveKPlusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiveKPlusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIVEKPLUSOUTLINED }, ...properties);
}

/**
 * Creates a five k plus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiveKPlusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFiveKPlusOutlinedIcon(element, ...properties);
    return element;
}
