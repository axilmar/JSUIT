import { initIcon } from "./icon.js";

//the url of the temple buddhist outlined svg; resolved relative to this module
const URL_TEMPLEBUDDHISTOUTLINED = new URL('../../assets/icons/templeBuddhistOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a temple buddhist outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/templeBuddhistOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTempleBuddhistOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'templeBuddhistOutlinedIcon', url: URL_TEMPLEBUDDHISTOUTLINED }, ...properties);
}

/**
 * Creates a temple buddhist outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const templeBuddhistOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTempleBuddhistOutlinedIcon(element, ...properties);
    return element;
}
