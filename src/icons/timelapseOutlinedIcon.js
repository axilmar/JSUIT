import { initIcon } from "./icon.js";

//the url of the timelapse outlined svg; resolved relative to this module
const URL_TIMELAPSEOUTLINED = new URL('../../assets/icons/timelapseOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timelapse outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timelapseOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimelapseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timelapseOutlinedIcon', url: URL_TIMELAPSEOUTLINED }, ...properties);
}

/**
 * Creates a timelapse outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timelapseOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTimelapseOutlinedIcon(element, ...properties);
    return element;
}
