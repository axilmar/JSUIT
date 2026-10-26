import { initIcon } from "./icon.js";

//the url of the hearing disabled svg; resolved relative to this module
const URL_HEARINGDISABLED = new URL('../../assets/icons/hearingDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hearing disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hearingDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHearingDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HEARINGDISABLED }, ...properties);
}

/**
 * Creates a hearing disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hearingDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initHearingDisabledIcon(element, ...properties);
    return element;
}
