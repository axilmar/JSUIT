import { initIcon } from "./icon.js";

//the url of the flatware outlined svg; resolved relative to this module
const URL_FLATWAREOUTLINED = new URL('../../assets/icons/flatwareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flatware outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flatwareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlatwareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flatwareOutlinedIcon', url: URL_FLATWAREOUTLINED }, ...properties);
}

/**
 * Creates a flatware outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flatwareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlatwareOutlinedIcon(element, ...properties);
    return element;
}
