import { initIcon } from "./icon.js";

//the url of the bloodtype outlined svg; resolved relative to this module
const URL_BLOODTYPEOUTLINED = new URL('../../assets/icons/bloodtypeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bloodtype outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bloodtypeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBloodtypeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLOODTYPEOUTLINED }, ...properties);
}

/**
 * Creates a bloodtype outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bloodtypeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBloodtypeOutlinedIcon(element, ...properties);
    return element;
}
