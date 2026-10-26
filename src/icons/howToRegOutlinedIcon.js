import { initIcon } from "./icon.js";

//the url of the how to reg outlined svg; resolved relative to this module
const URL_HOWTOREGOUTLINED = new URL('../../assets/icons/howToRegOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a how to reg outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/howToRegOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHowToRegOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOWTOREGOUTLINED }, ...properties);
}

/**
 * Creates a how to reg outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const howToRegOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHowToRegOutlinedIcon(element, ...properties);
    return element;
}
