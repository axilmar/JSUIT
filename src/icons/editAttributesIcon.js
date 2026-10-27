import { initIcon } from "./icon.js";

//the url of the edit attributes svg; resolved relative to this module
const URL_EDITATTRIBUTES = new URL('../../assets/icons/editAttributes.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit attributes icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editAttributes.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditAttributesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'editAttributesIcon', url: URL_EDITATTRIBUTES }, ...properties);
}

/**
 * Creates an edit attributes icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editAttributesIcon = (...properties) => {
    const element = document.createElement('div');
    initEditAttributesIcon(element, ...properties);
    return element;
}
