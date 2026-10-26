import { initIcon } from "./icon.js";

//the url of the play for work outlined svg; resolved relative to this module
const URL_PLAYFORWORKOUTLINED = new URL('../../assets/icons/playForWorkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play for work outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playForWorkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayForWorkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYFORWORKOUTLINED }, ...properties);
}

/**
 * Creates a play for work outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playForWorkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayForWorkOutlinedIcon(element, ...properties);
    return element;
}
