import { initIcon } from "./icon.js";

//the url of the control point duplicate outlined svg; resolved relative to this module
const URL_CONTROLPOINTDUPLICATEOUTLINED = new URL('../../assets/icons/controlPointDuplicateOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a control point duplicate outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/controlPointDuplicateOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initControlPointDuplicateOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTROLPOINTDUPLICATEOUTLINED }, ...properties);
}

/**
 * Creates a control point duplicate outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const controlPointDuplicateOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initControlPointDuplicateOutlinedIcon(element, ...properties);
    return element;
}
