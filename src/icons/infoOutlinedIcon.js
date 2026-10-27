import { initIcon } from "./icon.js";

//the url of the info outlined svg; resolved relative to this module
const URL_INFOOUTLINED = new URL('../../assets/icons/infoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an info outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/infoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInfoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'infoOutlinedIcon', url: URL_INFOOUTLINED }, ...properties);
}

/**
 * Creates an info outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const infoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInfoOutlinedIcon(element, ...properties);
    return element;
}
