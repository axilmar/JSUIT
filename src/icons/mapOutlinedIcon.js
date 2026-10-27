import { initIcon } from "./icon.js";

//the url of the map outlined svg; resolved relative to this module
const URL_MAPOUTLINED = new URL('../../assets/icons/mapOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a map outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mapOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMapOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mapOutlinedIcon', url: URL_MAPOUTLINED }, ...properties);
}

/**
 * Creates a map outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mapOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMapOutlinedIcon(element, ...properties);
    return element;
}
