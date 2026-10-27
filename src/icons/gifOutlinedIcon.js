import { initIcon } from "./icon.js";

//the url of the gif outlined svg; resolved relative to this module
const URL_GIFOUTLINED = new URL('../../assets/icons/gifOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gif outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gifOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGifOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gifOutlinedIcon', url: URL_GIFOUTLINED }, ...properties);
}

/**
 * Creates a gif outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gifOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGifOutlinedIcon(element, ...properties);
    return element;
}
