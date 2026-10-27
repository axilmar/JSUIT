import { initIcon } from "./icon.js";

//the url of the my location outlined svg; resolved relative to this module
const URL_MYLOCATIONOUTLINED = new URL('../../assets/icons/myLocationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a my location outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/myLocationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMyLocationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'myLocationOutlinedIcon', url: URL_MYLOCATIONOUTLINED }, ...properties);
}

/**
 * Creates a my location outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const myLocationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMyLocationOutlinedIcon(element, ...properties);
    return element;
}
