import { initIcon } from "./icon.js";

//the url of the system update svg; resolved relative to this module
const URL_SYSTEMUPDATE = new URL('../../assets/icons/systemUpdate.svg', import.meta.url).href;

/**
 * Initializes an icon element as a system update icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/systemUpdate.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSystemUpdateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SYSTEMUPDATE }, ...properties);
}

/**
 * Creates a system update icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const systemUpdateIcon = (...properties) => {
    const element = document.createElement('div');
    initSystemUpdateIcon(element, ...properties);
    return element;
}
