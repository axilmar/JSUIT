import { initIcon } from "./icon.js";

//the url of the theater comedy outlined svg; resolved relative to this module
const URL_THEATERCOMEDYOUTLINED = new URL('../../assets/icons/theaterComedyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a theater comedy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/theaterComedyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTheaterComedyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THEATERCOMEDYOUTLINED }, ...properties);
}

/**
 * Creates a theater comedy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const theaterComedyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTheaterComedyOutlinedIcon(element, ...properties);
    return element;
}
