import { initIcon } from "./icon.js";

//the url of the museum outlined svg; resolved relative to this module
const URL_MUSEUMOUTLINED = new URL('../../assets/icons/museumOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a museum outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/museumOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMuseumOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'museumOutlinedIcon', url: URL_MUSEUMOUTLINED }, ...properties);
}

/**
 * Creates a museum outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const museumOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMuseumOutlinedIcon(element, ...properties);
    return element;
}
