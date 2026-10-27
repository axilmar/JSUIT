import { initIcon } from "./icon.js";

//the url of the park outlined svg; resolved relative to this module
const URL_PARKOUTLINED = new URL('../../assets/icons/parkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a park outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/parkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initParkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'parkOutlinedIcon', url: URL_PARKOUTLINED }, ...properties);
}

/**
 * Creates a park outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const parkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initParkOutlinedIcon(element, ...properties);
    return element;
}
