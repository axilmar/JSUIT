import { initIcon } from "./icon.js";

//the url of the system update alt svg; resolved relative to this module
const URL_SYSTEMUPDATEALT = new URL('../../assets/icons/systemUpdateAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a system update alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/systemUpdateAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSystemUpdateAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'systemUpdateAltIcon', url: URL_SYSTEMUPDATEALT }, ...properties);
}

/**
 * Creates a system update alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const systemUpdateAltIcon = (...properties) => {
    const element = document.createElement('div');
    initSystemUpdateAltIcon(element, ...properties);
    return element;
}
