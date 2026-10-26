import { initIcon } from "./icon.js";

//the url of the raw on outlined svg; resolved relative to this module
const URL_RAWONOUTLINED = new URL('../../assets/icons/rawOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a raw on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rawOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRawOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RAWONOUTLINED }, ...properties);
}

/**
 * Creates a raw on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rawOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRawOnOutlinedIcon(element, ...properties);
    return element;
}
