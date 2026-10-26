import { initIcon } from "./icon.js";

//the url of the three d rotation outlined svg; resolved relative to this module
const URL_THREEDROTATIONOUTLINED = new URL('../../assets/icons/threeDRotationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three d rotation outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeDRotationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreeDRotationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THREEDROTATIONOUTLINED }, ...properties);
}

/**
 * Creates a three d rotation outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threeDRotationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThreeDRotationOutlinedIcon(element, ...properties);
    return element;
}
