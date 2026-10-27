import { initIcon } from "./icon.js";

//the url of the done outlined svg; resolved relative to this module
const URL_DONEOUTLINED = new URL('../../assets/icons/doneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a done outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doneOutlinedIcon', url: URL_DONEOUTLINED }, ...properties);
}

/**
 * Creates a done outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoneOutlinedIcon(element, ...properties);
    return element;
}
