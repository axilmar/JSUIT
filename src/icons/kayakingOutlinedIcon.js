import { initIcon } from "./icon.js";

//the url of the kayaking outlined svg; resolved relative to this module
const URL_KAYAKINGOUTLINED = new URL('../../assets/icons/kayakingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a kayaking outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/kayakingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKayakingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'kayakingOutlinedIcon', url: URL_KAYAKINGOUTLINED }, ...properties);
}

/**
 * Creates a kayaking outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const kayakingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKayakingOutlinedIcon(element, ...properties);
    return element;
}
