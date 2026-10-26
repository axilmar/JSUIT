import { initIcon } from "./icon.js";

//the url of the party mode svg; resolved relative to this module
const URL_PARTYMODE = new URL('../../assets/icons/partyMode.svg', import.meta.url).href;

/**
 * Initializes an icon element as a party mode icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/partyMode.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPartyModeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PARTYMODE }, ...properties);
}

/**
 * Creates a party mode icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const partyModeIcon = (...properties) => {
    const element = document.createElement('div');
    initPartyModeIcon(element, ...properties);
    return element;
}
