import { initIcon } from "./icon.js";

//the url of the grass outlined svg; resolved relative to this module
const URL_GRASSOUTLINED = new URL('../../assets/icons/grassOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grass outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/grassOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGrassOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'grassOutlinedIcon', url: URL_GRASSOUTLINED }, ...properties);
}

/**
 * Creates a grass outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const grassOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGrassOutlinedIcon(element, ...properties);
    return element;
}
