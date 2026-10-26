import { initIcon } from "./icon.js";

//the url of the wb iridescent svg; resolved relative to this module
const URL_WBIRIDESCENT = new URL('../../assets/icons/wbIridescent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb iridescent icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbIridescent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbIridescentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WBIRIDESCENT }, ...properties);
}

/**
 * Creates a wb iridescent icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbIridescentIcon = (...properties) => {
    const element = document.createElement('div');
    initWbIridescentIcon(element, ...properties);
    return element;
}
