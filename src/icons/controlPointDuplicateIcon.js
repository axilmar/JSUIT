import { initIcon } from "./icon.js";

//the url of the control point duplicate svg; resolved relative to this module
const URL_CONTROLPOINTDUPLICATE = new URL('../../assets/icons/controlPointDuplicate.svg', import.meta.url).href;

/**
 * Initializes an icon element as a control point duplicate icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/controlPointDuplicate.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initControlPointDuplicateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'controlPointDuplicateIcon', url: URL_CONTROLPOINTDUPLICATE }, ...properties);
}

/**
 * Creates a control point duplicate icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const controlPointDuplicateIcon = (...properties) => {
    const element = document.createElement('div');
    initControlPointDuplicateIcon(element, ...properties);
    return element;
}
