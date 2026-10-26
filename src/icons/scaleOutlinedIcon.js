import { initIcon } from "./icon.js";

//the url of the scale outlined svg; resolved relative to this module
const URL_SCALEOUTLINED = new URL('../../assets/icons/scaleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a scale outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scaleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScaleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCALEOUTLINED }, ...properties);
}

/**
 * Creates a scale outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scaleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScaleOutlinedIcon(element, ...properties);
    return element;
}
