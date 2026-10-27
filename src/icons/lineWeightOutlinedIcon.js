import { initIcon } from "./icon.js";

//the url of the line weight outlined svg; resolved relative to this module
const URL_LINEWEIGHTOUTLINED = new URL('../../assets/icons/lineWeightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a line weight outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lineWeightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLineWeightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lineWeightOutlinedIcon', url: URL_LINEWEIGHTOUTLINED }, ...properties);
}

/**
 * Creates a line weight outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lineWeightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLineWeightOutlinedIcon(element, ...properties);
    return element;
}
