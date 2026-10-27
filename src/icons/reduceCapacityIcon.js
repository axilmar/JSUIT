import { initIcon } from "./icon.js";

//the url of the reduce capacity svg; resolved relative to this module
const URL_REDUCECAPACITY = new URL('../../assets/icons/reduceCapacity.svg', import.meta.url).href;

/**
 * Initializes an icon element as a reduce capacity icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reduceCapacity.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReduceCapacityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'reduceCapacityIcon', url: URL_REDUCECAPACITY }, ...properties);
}

/**
 * Creates a reduce capacity icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reduceCapacityIcon = (...properties) => {
    const element = document.createElement('div');
    initReduceCapacityIcon(element, ...properties);
    return element;
}
