import { initIcon } from "./icon.js";

//the url of the auto graph svg; resolved relative to this module
const URL_AUTOGRAPH = new URL('../../assets/icons/autoGraph.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto graph icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoGraph.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoGraphIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoGraphIcon', url: URL_AUTOGRAPH }, ...properties);
}

/**
 * Creates an auto graph icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoGraphIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoGraphIcon(element, ...properties);
    return element;
}
