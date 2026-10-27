import { initIcon } from "./icon.js";

//the url of the hearing disabled outlined svg; resolved relative to this module
const URL_HEARINGDISABLEDOUTLINED = new URL('../../assets/icons/hearingDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hearing disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hearingDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHearingDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hearingDisabledOutlinedIcon', url: URL_HEARINGDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a hearing disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hearingDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHearingDisabledOutlinedIcon(element, ...properties);
    return element;
}
