import { initIcon } from "./icon.js";

//the url of the switch account svg; resolved relative to this module
const URL_SWITCHACCOUNT = new URL('../../assets/icons/switchAccount.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch account icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchAccount.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchAccountIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'switchAccountIcon', url: URL_SWITCHACCOUNT }, ...properties);
}

/**
 * Creates a switch account icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchAccountIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchAccountIcon(element, ...properties);
    return element;
}
