import { initIcon } from "./icon.js";

//the url of the do not disturb on total silence svg; resolved relative to this module
const URL_DONOTDISTURBONTOTALSILENCE = new URL('../../assets/icons/doNotDisturbOnTotalSilence.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not disturb on total silence icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotDisturbOnTotalSilence.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotDisturbOnTotalSilenceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doNotDisturbOnTotalSilenceIcon', url: URL_DONOTDISTURBONTOTALSILENCE }, ...properties);
}

/**
 * Creates a do not disturb on total silence icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotDisturbOnTotalSilenceIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotDisturbOnTotalSilenceIcon(element, ...properties);
    return element;
}
