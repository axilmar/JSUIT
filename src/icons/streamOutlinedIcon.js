import { initIcon } from "./icon.js";

//the url of the stream outlined svg; resolved relative to this module
const URL_STREAMOUTLINED = new URL('../../assets/icons/streamOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stream outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/streamOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStreamOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'streamOutlinedIcon', url: URL_STREAMOUTLINED }, ...properties);
}

/**
 * Creates a stream outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const streamOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStreamOutlinedIcon(element, ...properties);
    return element;
}
