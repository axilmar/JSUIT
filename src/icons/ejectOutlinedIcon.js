import { initIcon } from "./icon.js";

//the url of the eject outlined svg; resolved relative to this module
const URL_EJECTOUTLINED = new URL('../../assets/icons/ejectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eject outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ejectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEjectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'ejectOutlinedIcon', url: URL_EJECTOUTLINED }, ...properties);
}

/**
 * Creates an eject outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ejectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEjectOutlinedIcon(element, ...properties);
    return element;
}
