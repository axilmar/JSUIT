import { initIcon } from "./icon.js";

//the url of the shuffle outlined svg; resolved relative to this module
const URL_SHUFFLEOUTLINED = new URL('../../assets/icons/shuffleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shuffle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shuffleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShuffleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shuffleOutlinedIcon', url: URL_SHUFFLEOUTLINED }, ...properties);
}

/**
 * Creates a shuffle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shuffleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShuffleOutlinedIcon(element, ...properties);
    return element;
}
