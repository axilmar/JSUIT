import { initIcon } from "./icon.js";

//the url of the done outline outlined svg; resolved relative to this module
const URL_DONEOUTLINEOUTLINED = new URL('../../assets/icons/doneOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a done outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doneOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoneOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doneOutlineOutlinedIcon', url: URL_DONEOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a done outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doneOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoneOutlineOutlinedIcon(element, ...properties);
    return element;
}
