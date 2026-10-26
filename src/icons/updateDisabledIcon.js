import { initIcon } from "./icon.js";

//the url of the update disabled svg; resolved relative to this module
const URL_UPDATEDISABLED = new URL('../../assets/icons/updateDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as an update disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/updateDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUpdateDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UPDATEDISABLED }, ...properties);
}

/**
 * Creates an update disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const updateDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initUpdateDisabledIcon(element, ...properties);
    return element;
}
