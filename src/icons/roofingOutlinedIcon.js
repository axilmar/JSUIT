import { initIcon } from "./icon.js";

//the url of the roofing outlined svg; resolved relative to this module
const URL_ROOFINGOUTLINED = new URL('../../assets/icons/roofingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roofing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roofingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoofingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'roofingOutlinedIcon', url: URL_ROOFINGOUTLINED }, ...properties);
}

/**
 * Creates a roofing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roofingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRoofingOutlinedIcon(element, ...properties);
    return element;
}
