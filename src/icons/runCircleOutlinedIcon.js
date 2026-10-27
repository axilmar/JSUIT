import { initIcon } from "./icon.js";

//the url of the run circle outlined svg; resolved relative to this module
const URL_RUNCIRCLEOUTLINED = new URL('../../assets/icons/runCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a run circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/runCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRunCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'runCircleOutlinedIcon', url: URL_RUNCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a run circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const runCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRunCircleOutlinedIcon(element, ...properties);
    return element;
}
