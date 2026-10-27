import { initIcon } from "./icon.js";

//the url of the type specimen svg; resolved relative to this module
const URL_TYPESPECIMEN = new URL('../../assets/icons/typeSpecimen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a type specimen icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/typeSpecimen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTypeSpecimenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'typeSpecimenIcon', url: URL_TYPESPECIMEN }, ...properties);
}

/**
 * Creates a type specimen icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const typeSpecimenIcon = (...properties) => {
    const element = document.createElement('div');
    initTypeSpecimenIcon(element, ...properties);
    return element;
}
