import { initIcon } from "./icon.js";

//the url of the repartition outlined svg; resolved relative to this module
const URL_REPARTITIONOUTLINED = new URL('../../assets/icons/repartitionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a repartition outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/repartitionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRepartitionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'repartitionOutlinedIcon', url: URL_REPARTITIONOUTLINED }, ...properties);
}

/**
 * Creates a repartition outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const repartitionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRepartitionOutlinedIcon(element, ...properties);
    return element;
}
