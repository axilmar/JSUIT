import { initIcon } from "./icon.js";

//the url of the mobiledata off svg; resolved relative to this module
const URL_MOBILEDATAOFF = new URL('../../assets/icons/mobiledataOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mobiledata off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mobiledataOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMobiledataOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOBILEDATAOFF }, ...properties);
}

/**
 * Creates a mobiledata off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mobiledataOffIcon = (...properties) => {
    const element = document.createElement('div');
    initMobiledataOffIcon(element, ...properties);
    return element;
}
