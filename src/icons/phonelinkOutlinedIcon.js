import { initIcon } from "./icon.js";

//the url of the phonelink outlined svg; resolved relative to this module
const URL_PHONELINKOUTLINED = new URL('../../assets/icons/phonelinkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phonelink outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonelinkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonelinkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phonelinkOutlinedIcon', url: URL_PHONELINKOUTLINED }, ...properties);
}

/**
 * Creates a phonelink outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonelinkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonelinkOutlinedIcon(element, ...properties);
    return element;
}
