import { initIcon } from "./icon.js";

//the url of the delete sweep outlined svg; resolved relative to this module
const URL_DELETESWEEPOUTLINED = new URL('../../assets/icons/deleteSweepOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a delete sweep outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deleteSweepOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeleteSweepOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deleteSweepOutlinedIcon', url: URL_DELETESWEEPOUTLINED }, ...properties);
}

/**
 * Creates a delete sweep outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deleteSweepOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeleteSweepOutlinedIcon(element, ...properties);
    return element;
}
