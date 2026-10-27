import { initIcon } from "./icon.js";

//the url of the ev station outlined svg; resolved relative to this module
const URL_EVSTATIONOUTLINED = new URL('../../assets/icons/evStationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ev station outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/evStationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEvStationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'evStationOutlinedIcon', url: URL_EVSTATIONOUTLINED }, ...properties);
}

/**
 * Creates an ev station outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const evStationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEvStationOutlinedIcon(element, ...properties);
    return element;
}
