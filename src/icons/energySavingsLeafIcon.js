import { initIcon } from "./icon.js";

//the url of the energy savings leaf svg; resolved relative to this module
const URL_ENERGYSAVINGSLEAF = new URL('../../assets/icons/energySavingsLeaf.svg', import.meta.url).href;

/**
 * Initializes an icon element as an energy savings leaf icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/energySavingsLeaf.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEnergySavingsLeafIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ENERGYSAVINGSLEAF }, ...properties);
}

/**
 * Creates an energy savings leaf icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const energySavingsLeafIcon = (...properties) => {
    const element = document.createElement('div');
    initEnergySavingsLeafIcon(element, ...properties);
    return element;
}
