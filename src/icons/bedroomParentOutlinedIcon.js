import { initIcon } from "./icon.js";

//the url of the bedroom parent outlined svg; resolved relative to this module
const URL_BEDROOMPARENTOUTLINED = new URL('../../assets/icons/bedroomParentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bedroom parent outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bedroomParentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedroomParentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bedroomParentOutlinedIcon', url: URL_BEDROOMPARENTOUTLINED }, ...properties);
}

/**
 * Creates a bedroom parent outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedroomParentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBedroomParentOutlinedIcon(element, ...properties);
    return element;
}
