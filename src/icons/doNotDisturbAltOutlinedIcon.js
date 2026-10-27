import { initIcon } from "./icon.js";

//the url of the do not disturb alt outlined svg; resolved relative to this module
const URL_DONOTDISTURBALTOUTLINED = new URL('../../assets/icons/doNotDisturbAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not disturb alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotDisturbAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotDisturbAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doNotDisturbAltOutlinedIcon', url: URL_DONOTDISTURBALTOUTLINED }, ...properties);
}

/**
 * Creates a do not disturb alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotDisturbAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotDisturbAltOutlinedIcon(element, ...properties);
    return element;
}
