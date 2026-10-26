import { initIcon } from "./icon.js";

//the url of the local mall outlined svg; resolved relative to this module
const URL_LOCALMALLOUTLINED = new URL('../../assets/icons/localMallOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local mall outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localMallOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalMallOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALMALLOUTLINED }, ...properties);
}

/**
 * Creates a local mall outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localMallOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalMallOutlinedIcon(element, ...properties);
    return element;
}
