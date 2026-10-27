import { initIcon } from "./icon.js";

//the url of the assured workload outlined svg; resolved relative to this module
const URL_ASSUREDWORKLOADOUTLINED = new URL('../../assets/icons/assuredWorkloadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assured workload outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assuredWorkloadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssuredWorkloadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assuredWorkloadOutlinedIcon', url: URL_ASSUREDWORKLOADOUTLINED }, ...properties);
}

/**
 * Creates an assured workload outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assuredWorkloadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAssuredWorkloadOutlinedIcon(element, ...properties);
    return element;
}
