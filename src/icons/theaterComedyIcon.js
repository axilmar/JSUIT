import { initIcon } from "./icon.js";

//the url of the theater comedy svg; resolved relative to this module
const URL_THEATERCOMEDY = new URL('../../assets/icons/theaterComedy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a theater comedy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/theaterComedy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTheaterComedyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THEATERCOMEDY }, ...properties);
}

/**
 * Creates a theater comedy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const theaterComedyIcon = (...properties) => {
    const element = document.createElement('div');
    initTheaterComedyIcon(element, ...properties);
    return element;
}
