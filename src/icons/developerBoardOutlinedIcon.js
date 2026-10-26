import { initIcon } from "./icon.js";

//the url of the developer board outlined svg; resolved relative to this module
const URL_DEVELOPERBOARDOUTLINED = new URL('../../assets/icons/developerBoardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a developer board outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/developerBoardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeveloperBoardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEVELOPERBOARDOUTLINED }, ...properties);
}

/**
 * Creates a developer board outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const developerBoardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeveloperBoardOutlinedIcon(element, ...properties);
    return element;
}
