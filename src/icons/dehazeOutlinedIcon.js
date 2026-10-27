import { initIcon } from "./icon.js";

//the url of the dehaze outlined svg; resolved relative to this module
const URL_DEHAZEOUTLINED = new URL('../../assets/icons/dehazeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dehaze outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dehazeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDehazeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dehazeOutlinedIcon', url: URL_DEHAZEOUTLINED }, ...properties);
}

/**
 * Creates a dehaze outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dehazeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDehazeOutlinedIcon(element, ...properties);
    return element;
}
