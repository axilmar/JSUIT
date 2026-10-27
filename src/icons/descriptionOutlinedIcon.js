import { initIcon } from "./icon.js";

//the url of the description outlined svg; resolved relative to this module
const URL_DESCRIPTIONOUTLINED = new URL('../../assets/icons/descriptionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a description outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/descriptionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDescriptionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'descriptionOutlinedIcon', url: URL_DESCRIPTIONOUTLINED }, ...properties);
}

/**
 * Creates a description outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const descriptionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDescriptionOutlinedIcon(element, ...properties);
    return element;
}
