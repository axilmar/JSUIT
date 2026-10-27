import { initIcon } from "./icon.js";

//the url of the fiber dvr outlined svg; resolved relative to this module
const URL_FIBERDVROUTLINED = new URL('../../assets/icons/fiberDvrOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fiber dvr outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiberDvrOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiberDvrOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiberDvrOutlinedIcon', url: URL_FIBERDVROUTLINED }, ...properties);
}

/**
 * Creates a fiber dvr outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiberDvrOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFiberDvrOutlinedIcon(element, ...properties);
    return element;
}
