import { initIcon } from "./icon.js";

//the url of the developer board off outlined svg; resolved relative to this module
const URL_DEVELOPERBOARDOFFOUTLINED = new URL('../../assets/icons/developerBoardOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a developer board off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/developerBoardOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeveloperBoardOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'developerBoardOffOutlinedIcon', url: URL_DEVELOPERBOARDOFFOUTLINED }, ...properties);
}

/**
 * Creates a developer board off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const developerBoardOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeveloperBoardOffOutlinedIcon(element, ...properties);
    return element;
}
