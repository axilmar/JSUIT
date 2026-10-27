import { initIcon } from "./icon.js";

//the url of the landslide outlined svg; resolved relative to this module
const URL_LANDSLIDEOUTLINED = new URL('../../assets/icons/landslideOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a landslide outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/landslideOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLandslideOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'landslideOutlinedIcon', url: URL_LANDSLIDEOUTLINED }, ...properties);
}

/**
 * Creates a landslide outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const landslideOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLandslideOutlinedIcon(element, ...properties);
    return element;
}
