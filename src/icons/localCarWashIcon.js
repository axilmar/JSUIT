import { initIcon } from "./icon.js";

//the url of the local car wash svg; resolved relative to this module
const URL_LOCALCARWASH = new URL('../../assets/icons/localCarWash.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local car wash icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localCarWash.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalCarWashIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localCarWashIcon', url: URL_LOCALCARWASH }, ...properties);
}

/**
 * Creates a local car wash icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localCarWashIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalCarWashIcon(element, ...properties);
    return element;
}
