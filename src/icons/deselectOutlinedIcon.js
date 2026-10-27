import { initIcon } from "./icon.js";

//the url of the deselect outlined svg; resolved relative to this module
const URL_DESELECTOUTLINED = new URL('../../assets/icons/deselectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a deselect outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deselectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeselectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deselectOutlinedIcon', url: URL_DESELECTOUTLINED }, ...properties);
}

/**
 * Creates a deselect outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deselectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeselectOutlinedIcon(element, ...properties);
    return element;
}
