import { initIcon } from "./icon.js";

//the url of the cast for education outlined svg; resolved relative to this module
const URL_CASTFOREDUCATIONOUTLINED = new URL('../../assets/icons/castForEducationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cast for education outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/castForEducationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCastForEducationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'castForEducationOutlinedIcon', url: URL_CASTFOREDUCATIONOUTLINED }, ...properties);
}

/**
 * Creates a cast for education outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const castForEducationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCastForEducationOutlinedIcon(element, ...properties);
    return element;
}
