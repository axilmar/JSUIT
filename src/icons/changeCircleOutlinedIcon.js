import { initIcon } from "./icon.js";

//the url of the change circle outlined svg; resolved relative to this module
const URL_CHANGECIRCLEOUTLINED = new URL('../../assets/icons/changeCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a change circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/changeCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChangeCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHANGECIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a change circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const changeCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChangeCircleOutlinedIcon(element, ...properties);
    return element;
}
