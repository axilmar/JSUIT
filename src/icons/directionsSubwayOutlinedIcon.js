import { initIcon } from "./icon.js";

//the url of the directions subway outlined svg; resolved relative to this module
const URL_DIRECTIONSSUBWAYOUTLINED = new URL('../../assets/icons/directionsSubwayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions subway outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsSubwayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsSubwayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsSubwayOutlinedIcon', url: URL_DIRECTIONSSUBWAYOUTLINED }, ...properties);
}

/**
 * Creates a directions subway outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsSubwayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsSubwayOutlinedIcon(element, ...properties);
    return element;
}
