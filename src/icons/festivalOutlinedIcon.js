import { initIcon } from "./icon.js";

//the url of the festival outlined svg; resolved relative to this module
const URL_FESTIVALOUTLINED = new URL('../../assets/icons/festivalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a festival outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/festivalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFestivalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'festivalOutlinedIcon', url: URL_FESTIVALOUTLINED }, ...properties);
}

/**
 * Creates a festival outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const festivalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFestivalOutlinedIcon(element, ...properties);
    return element;
}
