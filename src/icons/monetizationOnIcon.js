import { initIcon } from "./icon.js";

//the url of the monetization on svg; resolved relative to this module
const URL_MONETIZATIONON = new URL('../../assets/icons/monetizationOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a monetization on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/monetizationOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMonetizationOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'monetizationOnIcon', url: URL_MONETIZATIONON }, ...properties);
}

/**
 * Creates a monetization on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const monetizationOnIcon = (...properties) => {
    const element = document.createElement('div');
    initMonetizationOnIcon(element, ...properties);
    return element;
}
