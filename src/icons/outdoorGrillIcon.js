import { initIcon } from "./icon.js";

//the url of the outdoor grill svg; resolved relative to this module
const URL_OUTDOORGRILL = new URL('../../assets/icons/outdoorGrill.svg', import.meta.url).href;

/**
 * Initializes an icon element as an outdoor grill icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/outdoorGrill.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutdoorGrillIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OUTDOORGRILL }, ...properties);
}

/**
 * Creates an outdoor grill icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outdoorGrillIcon = (...properties) => {
    const element = document.createElement('div');
    initOutdoorGrillIcon(element, ...properties);
    return element;
}
