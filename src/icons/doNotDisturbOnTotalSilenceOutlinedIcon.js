import { initIcon } from "./icon.js";

//the url of the do not disturb on total silence outlined svg; resolved relative to this module
const URL_DONOTDISTURBONTOTALSILENCEOUTLINED = new URL('../../assets/icons/doNotDisturbOnTotalSilenceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not disturb on total silence outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotDisturbOnTotalSilenceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotDisturbOnTotalSilenceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONOTDISTURBONTOTALSILENCEOUTLINED }, ...properties);
}

/**
 * Creates a do not disturb on total silence outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotDisturbOnTotalSilenceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotDisturbOnTotalSilenceOutlinedIcon(element, ...properties);
    return element;
}
