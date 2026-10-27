import { initIcon } from "./icon.js";

//the url of the fork left outlined svg; resolved relative to this module
const URL_FORKLEFTOUTLINED = new URL('../../assets/icons/forkLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fork left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forkLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForkLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'forkLeftOutlinedIcon', url: URL_FORKLEFTOUTLINED }, ...properties);
}

/**
 * Creates a fork left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forkLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initForkLeftOutlinedIcon(element, ...properties);
    return element;
}
