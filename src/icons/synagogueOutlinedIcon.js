import { initIcon } from "./icon.js";

//the url of the synagogue outlined svg; resolved relative to this module
const URL_SYNAGOGUEOUTLINED = new URL('../../assets/icons/synagogueOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a synagogue outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/synagogueOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSynagogueOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SYNAGOGUEOUTLINED }, ...properties);
}

/**
 * Creates a synagogue outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const synagogueOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSynagogueOutlinedIcon(element, ...properties);
    return element;
}
