import { initIcon } from "./icon.js";

//the url of the phonelink erase outlined svg; resolved relative to this module
const URL_PHONELINKERASEOUTLINED = new URL('../../assets/icons/phonelinkEraseOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phonelink erase outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonelinkEraseOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonelinkEraseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONELINKERASEOUTLINED }, ...properties);
}

/**
 * Creates a phonelink erase outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonelinkEraseOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonelinkEraseOutlinedIcon(element, ...properties);
    return element;
}
