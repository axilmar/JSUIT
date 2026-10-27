import { initIcon } from "./icon.js";

//the url of the hearing outlined svg; resolved relative to this module
const URL_HEARINGOUTLINED = new URL('../../assets/icons/hearingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hearing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hearingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHearingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hearingOutlinedIcon', url: URL_HEARINGOUTLINED }, ...properties);
}

/**
 * Creates a hearing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hearingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHearingOutlinedIcon(element, ...properties);
    return element;
}
