import { initIcon } from "./icon.js";

//the url of the pregnant woman svg; resolved relative to this module
const URL_PREGNANTWOMAN = new URL('../../assets/icons/pregnantWoman.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pregnant woman icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pregnantWoman.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPregnantWomanIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pregnantWomanIcon', url: URL_PREGNANTWOMAN }, ...properties);
}

/**
 * Creates a pregnant woman icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pregnantWomanIcon = (...properties) => {
    const element = document.createElement('div');
    initPregnantWomanIcon(element, ...properties);
    return element;
}
