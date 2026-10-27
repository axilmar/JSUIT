import { initIcon } from "./icon.js";

//the url of the dry cleaning outlined svg; resolved relative to this module
const URL_DRYCLEANINGOUTLINED = new URL('../../assets/icons/dryCleaningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dry cleaning outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dryCleaningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDryCleaningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dryCleaningOutlinedIcon', url: URL_DRYCLEANINGOUTLINED }, ...properties);
}

/**
 * Creates a dry cleaning outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dryCleaningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDryCleaningOutlinedIcon(element, ...properties);
    return element;
}
