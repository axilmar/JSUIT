import { initIcon } from "./icon.js";

//the url of the source outlined svg; resolved relative to this module
const URL_SOURCEOUTLINED = new URL('../../assets/icons/sourceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a source outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sourceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSourceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOURCEOUTLINED }, ...properties);
}

/**
 * Creates a source outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sourceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSourceOutlinedIcon(element, ...properties);
    return element;
}
