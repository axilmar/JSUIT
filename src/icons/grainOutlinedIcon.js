import { initIcon } from "./icon.js";

//the url of the grain outlined svg; resolved relative to this module
const URL_GRAINOUTLINED = new URL('../../assets/icons/grainOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grain outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/grainOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGrainOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'grainOutlinedIcon', url: URL_GRAINOUTLINED }, ...properties);
}

/**
 * Creates a grain outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const grainOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGrainOutlinedIcon(element, ...properties);
    return element;
}
