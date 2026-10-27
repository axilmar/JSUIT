import { initIcon } from "./icon.js";

//the url of the control point outlined svg; resolved relative to this module
const URL_CONTROLPOINTOUTLINED = new URL('../../assets/icons/controlPointOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a control point outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/controlPointOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initControlPointOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'controlPointOutlinedIcon', url: URL_CONTROLPOINTOUTLINED }, ...properties);
}

/**
 * Creates a control point outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const controlPointOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initControlPointOutlinedIcon(element, ...properties);
    return element;
}
