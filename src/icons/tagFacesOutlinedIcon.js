import { initIcon } from "./icon.js";

//the url of the tag faces outlined svg; resolved relative to this module
const URL_TAGFACESOUTLINED = new URL('../../assets/icons/tagFacesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tag faces outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tagFacesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTagFacesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tagFacesOutlinedIcon', url: URL_TAGFACESOUTLINED }, ...properties);
}

/**
 * Creates a tag faces outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tagFacesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTagFacesOutlinedIcon(element, ...properties);
    return element;
}
