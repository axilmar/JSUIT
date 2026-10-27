import { initIcon } from "./icon.js";

//the url of the map svg; resolved relative to this module
const URL_MAP = new URL('../../assets/icons/map.svg', import.meta.url).href;

/**
 * Initializes an icon element as a map icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/map.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMapIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mapIcon', url: URL_MAP }, ...properties);
}

/**
 * Creates a map icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mapIcon = (...properties) => {
    const element = document.createElement('div');
    initMapIcon(element, ...properties);
    return element;
}
