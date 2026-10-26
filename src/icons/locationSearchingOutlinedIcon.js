import { initIcon } from "./icon.js";

//the url of the location searching outlined svg; resolved relative to this module
const URL_LOCATIONSEARCHINGOUTLINED = new URL('../../assets/icons/locationSearchingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a location searching outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/locationSearchingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocationSearchingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCATIONSEARCHINGOUTLINED }, ...properties);
}

/**
 * Creates a location searching outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const locationSearchingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocationSearchingOutlinedIcon(element, ...properties);
    return element;
}
