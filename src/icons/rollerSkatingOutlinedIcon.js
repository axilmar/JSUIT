import { initIcon } from "./icon.js";

//the url of the roller skating outlined svg; resolved relative to this module
const URL_ROLLERSKATINGOUTLINED = new URL('../../assets/icons/rollerSkatingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roller skating outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rollerSkatingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRollerSkatingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROLLERSKATINGOUTLINED }, ...properties);
}

/**
 * Creates a roller skating outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rollerSkatingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRollerSkatingOutlinedIcon(element, ...properties);
    return element;
}
