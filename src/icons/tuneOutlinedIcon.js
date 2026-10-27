import { initIcon } from "./icon.js";

//the url of the tune outlined svg; resolved relative to this module
const URL_TUNEOUTLINED = new URL('../../assets/icons/tuneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tune outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tuneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTuneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tuneOutlinedIcon', url: URL_TUNEOUTLINED }, ...properties);
}

/**
 * Creates a tune outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tuneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTuneOutlinedIcon(element, ...properties);
    return element;
}
