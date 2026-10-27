import { initIcon } from "./icon.js";

//the url of the hub outlined svg; resolved relative to this module
const URL_HUBOUTLINED = new URL('../../assets/icons/hubOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hub outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hubOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHubOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hubOutlinedIcon', url: URL_HUBOUTLINED }, ...properties);
}

/**
 * Creates a hub outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hubOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHubOutlinedIcon(element, ...properties);
    return element;
}
