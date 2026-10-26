import { initIcon } from "./icon.js";

//the url of the family restroom svg; resolved relative to this module
const URL_FAMILYRESTROOM = new URL('../../assets/icons/familyRestroom.svg', import.meta.url).href;

/**
 * Initializes an icon element as a family restroom icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/familyRestroom.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFamilyRestroomIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FAMILYRESTROOM }, ...properties);
}

/**
 * Creates a family restroom icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const familyRestroomIcon = (...properties) => {
    const element = document.createElement('div');
    initFamilyRestroomIcon(element, ...properties);
    return element;
}
