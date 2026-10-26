import { initIcon } from "./icon.js";

//the url of the record voice over svg; resolved relative to this module
const URL_RECORDVOICEOVER = new URL('../../assets/icons/recordVoiceOver.svg', import.meta.url).href;

/**
 * Initializes an icon element as a record voice over icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/recordVoiceOver.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRecordVoiceOverIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RECORDVOICEOVER }, ...properties);
}

/**
 * Creates a record voice over icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const recordVoiceOverIcon = (...properties) => {
    const element = document.createElement('div');
    initRecordVoiceOverIcon(element, ...properties);
    return element;
}
