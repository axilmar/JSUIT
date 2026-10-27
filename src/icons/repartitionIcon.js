import { initIcon } from "./icon.js";

//the url of the repartition svg; resolved relative to this module
const URL_REPARTITION = new URL('../../assets/icons/repartition.svg', import.meta.url).href;

/**
 * Initializes an icon element as a repartition icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/repartition.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRepartitionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'repartitionIcon', url: URL_REPARTITION }, ...properties);
}

/**
 * Creates a repartition icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const repartitionIcon = (...properties) => {
    const element = document.createElement('div');
    initRepartitionIcon(element, ...properties);
    return element;
}
