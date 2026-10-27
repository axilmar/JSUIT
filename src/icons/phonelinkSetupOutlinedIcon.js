import { initIcon } from "./icon.js";

//the url of the phonelink setup outlined svg; resolved relative to this module
const URL_PHONELINKSETUPOUTLINED = new URL('../../assets/icons/phonelinkSetupOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phonelink setup outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonelinkSetupOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonelinkSetupOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phonelinkSetupOutlinedIcon', url: URL_PHONELINKSETUPOUTLINED }, ...properties);
}

/**
 * Creates a phonelink setup outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonelinkSetupOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonelinkSetupOutlinedIcon(element, ...properties);
    return element;
}
