import { initIcon } from "./icon.js";

//the url of the dvr outlined svg; resolved relative to this module
const URL_DVROUTLINED = new URL('../../assets/icons/dvrOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dvr outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dvrOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDvrOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dvrOutlinedIcon', url: URL_DVROUTLINED }, ...properties);
}

/**
 * Creates a dvr outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dvrOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDvrOutlinedIcon(element, ...properties);
    return element;
}
