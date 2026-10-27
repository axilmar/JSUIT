import { initIcon } from "./icon.js";

//the url of the psychology alt outlined svg; resolved relative to this module
const URL_PSYCHOLOGYALTOUTLINED = new URL('../../assets/icons/psychologyAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a psychology alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/psychologyAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPsychologyAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'psychologyAltOutlinedIcon', url: URL_PSYCHOLOGYALTOUTLINED }, ...properties);
}

/**
 * Creates a psychology alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const psychologyAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPsychologyAltOutlinedIcon(element, ...properties);
    return element;
}
