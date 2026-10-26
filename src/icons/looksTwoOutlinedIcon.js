import { initIcon } from "./icon.js";

//the url of the looks two outlined svg; resolved relative to this module
const URL_LOOKSTWOOUTLINED = new URL('../../assets/icons/looksTwoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks two outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looksTwoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooksTwoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOOKSTWOOUTLINED }, ...properties);
}

/**
 * Creates a looks two outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looksTwoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLooksTwoOutlinedIcon(element, ...properties);
    return element;
}
