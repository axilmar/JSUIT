import { initIcon } from "./icon.js";

//the url of the developer board off svg; resolved relative to this module
const URL_DEVELOPERBOARDOFF = new URL('../../assets/icons/developerBoardOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a developer board off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/developerBoardOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeveloperBoardOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'developerBoardOffIcon', url: URL_DEVELOPERBOARDOFF }, ...properties);
}

/**
 * Creates a developer board off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const developerBoardOffIcon = (...properties) => {
    const element = document.createElement('div');
    initDeveloperBoardOffIcon(element, ...properties);
    return element;
}
