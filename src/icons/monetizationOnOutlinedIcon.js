import { initIcon } from "./icon.js";

//the url of the monetization on outlined svg; resolved relative to this module
const URL_MONETIZATIONONOUTLINED = new URL('../../assets/icons/monetizationOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a monetization on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/monetizationOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMonetizationOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'monetizationOnOutlinedIcon', url: URL_MONETIZATIONONOUTLINED }, ...properties);
}

/**
 * Creates a monetization on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const monetizationOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMonetizationOnOutlinedIcon(element, ...properties);
    return element;
}
