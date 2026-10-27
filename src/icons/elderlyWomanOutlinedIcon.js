import { initIcon } from "./icon.js";

//the url of the elderly woman outlined svg; resolved relative to this module
const URL_ELDERLYWOMANOUTLINED = new URL('../../assets/icons/elderlyWomanOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an elderly woman outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/elderlyWomanOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElderlyWomanOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'elderlyWomanOutlinedIcon', url: URL_ELDERLYWOMANOUTLINED }, ...properties);
}

/**
 * Creates an elderly woman outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const elderlyWomanOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElderlyWomanOutlinedIcon(element, ...properties);
    return element;
}
