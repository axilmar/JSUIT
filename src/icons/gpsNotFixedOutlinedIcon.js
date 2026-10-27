import { initIcon } from "./icon.js";

//the url of the gps not fixed outlined svg; resolved relative to this module
const URL_GPSNOTFIXEDOUTLINED = new URL('../../assets/icons/gpsNotFixedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gps not fixed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gpsNotFixedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGpsNotFixedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gpsNotFixedOutlinedIcon', url: URL_GPSNOTFIXEDOUTLINED }, ...properties);
}

/**
 * Creates a gps not fixed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gpsNotFixedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGpsNotFixedOutlinedIcon(element, ...properties);
    return element;
}
