import { initIcon } from "./icon.js";

//the url of the switch left svg; resolved relative to this module
const URL_SWITCHLEFT = new URL('../../assets/icons/switchLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWITCHLEFT }, ...properties);
}

/**
 * Creates a switch left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchLeftIcon(element, ...properties);
    return element;
}
