import { initIcon } from "./icon.js";

//the url of the energy savings leaf outlined svg; resolved relative to this module
const URL_ENERGYSAVINGSLEAFOUTLINED = new URL('../../assets/icons/energySavingsLeafOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an energy savings leaf outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/energySavingsLeafOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEnergySavingsLeafOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ENERGYSAVINGSLEAFOUTLINED }, ...properties);
}

/**
 * Creates an energy savings leaf outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const energySavingsLeafOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEnergySavingsLeafOutlinedIcon(element, ...properties);
    return element;
}
