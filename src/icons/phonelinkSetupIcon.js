import { initIcon } from "./icon.js";

//the url of the phonelink setup svg; resolved relative to this module
const URL_PHONELINKSETUP = new URL('../../assets/icons/phonelinkSetup.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phonelink setup icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonelinkSetup.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonelinkSetupIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONELINKSETUP }, ...properties);
}

/**
 * Creates a phonelink setup icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonelinkSetupIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonelinkSetupIcon(element, ...properties);
    return element;
}
