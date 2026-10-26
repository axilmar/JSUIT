import { initIcon } from "./icon.js";

//the url of the kitesurfing outlined svg; resolved relative to this module
const URL_KITESURFINGOUTLINED = new URL('../../assets/icons/kitesurfingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a kitesurfing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/kitesurfingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKitesurfingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KITESURFINGOUTLINED }, ...properties);
}

/**
 * Creates a kitesurfing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const kitesurfingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKitesurfingOutlinedIcon(element, ...properties);
    return element;
}
