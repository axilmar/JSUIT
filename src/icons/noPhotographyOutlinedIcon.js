import { initIcon } from "./icon.js";

//the url of the no photography outlined svg; resolved relative to this module
const URL_NOPHOTOGRAPHYOUTLINED = new URL('../../assets/icons/noPhotographyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no photography outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noPhotographyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoPhotographyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noPhotographyOutlinedIcon', url: URL_NOPHOTOGRAPHYOUTLINED }, ...properties);
}

/**
 * Creates a no photography outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noPhotographyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoPhotographyOutlinedIcon(element, ...properties);
    return element;
}
