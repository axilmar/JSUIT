import { initIcon } from "./icon.js";

//the url of the diversity1 outlined svg; resolved relative to this module
const URL_DIVERSITY1OUTLINED = new URL('../../assets/icons/diversity1Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a diversity1 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/diversity1Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiversity1OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'diversity1OutlinedIcon', url: URL_DIVERSITY1OUTLINED }, ...properties);
}

/**
 * Creates a diversity1 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const diversity1OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDiversity1OutlinedIcon(element, ...properties);
    return element;
}
