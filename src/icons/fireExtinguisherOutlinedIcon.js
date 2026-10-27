import { initIcon } from "./icon.js";

//the url of the fire extinguisher outlined svg; resolved relative to this module
const URL_FIREEXTINGUISHEROUTLINED = new URL('../../assets/icons/fireExtinguisherOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fire extinguisher outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fireExtinguisherOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFireExtinguisherOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fireExtinguisherOutlinedIcon', url: URL_FIREEXTINGUISHEROUTLINED }, ...properties);
}

/**
 * Creates a fire extinguisher outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fireExtinguisherOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFireExtinguisherOutlinedIcon(element, ...properties);
    return element;
}
