import { initIcon } from "./icon.js";

//the url of the save outlined svg; resolved relative to this module
const URL_SAVEOUTLINED = new URL('../../assets/icons/saveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a save outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/saveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSaveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'saveOutlinedIcon', url: URL_SAVEOUTLINED }, ...properties);
}

/**
 * Creates a save outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const saveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSaveOutlinedIcon(element, ...properties);
    return element;
}
