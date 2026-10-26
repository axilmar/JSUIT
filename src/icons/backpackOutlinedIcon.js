import { initIcon } from "./icon.js";

//the url of the backpack outlined svg; resolved relative to this module
const URL_BACKPACKOUTLINED = new URL('../../assets/icons/backpackOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a backpack outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/backpackOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBackpackOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BACKPACKOUTLINED }, ...properties);
}

/**
 * Creates a backpack outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const backpackOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBackpackOutlinedIcon(element, ...properties);
    return element;
}
