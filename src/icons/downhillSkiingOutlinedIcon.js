import { initIcon } from "./icon.js";

//the url of the downhill skiing outlined svg; resolved relative to this module
const URL_DOWNHILLSKIINGOUTLINED = new URL('../../assets/icons/downhillSkiingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a downhill skiing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/downhillSkiingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDownhillSkiingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'downhillSkiingOutlinedIcon', url: URL_DOWNHILLSKIINGOUTLINED }, ...properties);
}

/**
 * Creates a downhill skiing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const downhillSkiingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDownhillSkiingOutlinedIcon(element, ...properties);
    return element;
}
