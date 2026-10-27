import { initIcon } from "./icon.js";

//the url of the bento outlined svg; resolved relative to this module
const URL_BENTOOUTLINED = new URL('../../assets/icons/bentoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bento outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bentoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBentoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bentoOutlinedIcon', url: URL_BENTOOUTLINED }, ...properties);
}

/**
 * Creates a bento outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bentoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBentoOutlinedIcon(element, ...properties);
    return element;
}
