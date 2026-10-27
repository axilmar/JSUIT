import { initIcon } from "./icon.js";

//the url of the temple buddhist svg; resolved relative to this module
const URL_TEMPLEBUDDHIST = new URL('../../assets/icons/templeBuddhist.svg', import.meta.url).href;

/**
 * Initializes an icon element as a temple buddhist icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/templeBuddhist.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTempleBuddhistIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'templeBuddhistIcon', url: URL_TEMPLEBUDDHIST }, ...properties);
}

/**
 * Creates a temple buddhist icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const templeBuddhistIcon = (...properties) => {
    const element = document.createElement('div');
    initTempleBuddhistIcon(element, ...properties);
    return element;
}
