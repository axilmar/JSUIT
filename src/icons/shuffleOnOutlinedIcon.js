import { initIcon } from "./icon.js";

//the url of the shuffle on outlined svg; resolved relative to this module
const URL_SHUFFLEONOUTLINED = new URL('../../assets/icons/shuffleOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shuffle on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shuffleOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShuffleOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shuffleOnOutlinedIcon', url: URL_SHUFFLEONOUTLINED }, ...properties);
}

/**
 * Creates a shuffle on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shuffleOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShuffleOnOutlinedIcon(element, ...properties);
    return element;
}
