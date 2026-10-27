import { initIcon } from "./icon.js";

//the url of the rowing outlined svg; resolved relative to this module
const URL_ROWINGOUTLINED = new URL('../../assets/icons/rowingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rowing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rowingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRowingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rowingOutlinedIcon', url: URL_ROWINGOUTLINED }, ...properties);
}

/**
 * Creates a rowing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rowingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRowingOutlinedIcon(element, ...properties);
    return element;
}
