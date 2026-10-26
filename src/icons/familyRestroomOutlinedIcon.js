import { initIcon } from "./icon.js";

//the url of the family restroom outlined svg; resolved relative to this module
const URL_FAMILYRESTROOMOUTLINED = new URL('../../assets/icons/familyRestroomOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a family restroom outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/familyRestroomOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFamilyRestroomOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FAMILYRESTROOMOUTLINED }, ...properties);
}

/**
 * Creates a family restroom outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const familyRestroomOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFamilyRestroomOutlinedIcon(element, ...properties);
    return element;
}
