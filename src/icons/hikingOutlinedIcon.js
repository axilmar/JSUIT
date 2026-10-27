import { initIcon } from "./icon.js";

//the url of the hiking outlined svg; resolved relative to this module
const URL_HIKINGOUTLINED = new URL('../../assets/icons/hikingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hiking outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hikingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHikingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hikingOutlinedIcon', url: URL_HIKINGOUTLINED }, ...properties);
}

/**
 * Creates a hiking outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hikingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHikingOutlinedIcon(element, ...properties);
    return element;
}
