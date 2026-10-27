import { initIcon } from "./icon.js";

//the url of the local mall svg; resolved relative to this module
const URL_LOCALMALL = new URL('../../assets/icons/localMall.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local mall icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localMall.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalMallIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localMallIcon', url: URL_LOCALMALL }, ...properties);
}

/**
 * Creates a local mall icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localMallIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalMallIcon(element, ...properties);
    return element;
}
