import { initIcon } from "./icon.js";

//the url of the diversity3 outlined svg; resolved relative to this module
const URL_DIVERSITY3OUTLINED = new URL('../../assets/icons/diversity3Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a diversity3 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/diversity3Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiversity3OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIVERSITY3OUTLINED }, ...properties);
}

/**
 * Creates a diversity3 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const diversity3OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDiversity3OutlinedIcon(element, ...properties);
    return element;
}
