import { initIcon } from "./icon.js";

//the url of the person add disabled svg; resolved relative to this module
const URL_PERSONADDDISABLED = new URL('../../assets/icons/personAddDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person add disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personAddDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonAddDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONADDDISABLED }, ...properties);
}

/**
 * Creates a person add disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personAddDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonAddDisabledIcon(element, ...properties);
    return element;
}
