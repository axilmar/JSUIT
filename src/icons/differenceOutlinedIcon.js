import { initIcon } from "./icon.js";

//the url of the difference outlined svg; resolved relative to this module
const URL_DIFFERENCEOUTLINED = new URL('../../assets/icons/differenceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a difference outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/differenceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDifferenceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'differenceOutlinedIcon', url: URL_DIFFERENCEOUTLINED }, ...properties);
}

/**
 * Creates a difference outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const differenceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDifferenceOutlinedIcon(element, ...properties);
    return element;
}
