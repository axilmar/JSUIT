import { initIcon } from "./icon.js";

//the url of the synagogue svg; resolved relative to this module
const URL_SYNAGOGUE = new URL('../../assets/icons/synagogue.svg', import.meta.url).href;

/**
 * Initializes an icon element as a synagogue icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/synagogue.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSynagogueIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SYNAGOGUE }, ...properties);
}

/**
 * Creates a synagogue icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const synagogueIcon = (...properties) => {
    const element = document.createElement('div');
    initSynagogueIcon(element, ...properties);
    return element;
}
