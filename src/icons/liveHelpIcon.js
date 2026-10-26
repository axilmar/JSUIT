import { initIcon } from "./icon.js";

//the url of the live help svg; resolved relative to this module
const URL_LIVEHELP = new URL('../../assets/icons/liveHelp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a live help icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/liveHelp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLiveHelpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIVEHELP }, ...properties);
}

/**
 * Creates a live help icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const liveHelpIcon = (...properties) => {
    const element = document.createElement('div');
    initLiveHelpIcon(element, ...properties);
    return element;
}
