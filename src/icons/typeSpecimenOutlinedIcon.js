import { initIcon } from "./icon.js";

//the url of the type specimen outlined svg; resolved relative to this module
const URL_TYPESPECIMENOUTLINED = new URL('../../assets/icons/typeSpecimenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a type specimen outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/typeSpecimenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTypeSpecimenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'typeSpecimenOutlinedIcon', url: URL_TYPESPECIMENOUTLINED }, ...properties);
}

/**
 * Creates a type specimen outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const typeSpecimenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTypeSpecimenOutlinedIcon(element, ...properties);
    return element;
}
