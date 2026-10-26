import { initIcon } from "./icon.js";

//the url of the train outlined svg; resolved relative to this module
const URL_TRAINOUTLINED = new URL('../../assets/icons/trainOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a train outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/trainOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrainOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRAINOUTLINED }, ...properties);
}

/**
 * Creates a train outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trainOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTrainOutlinedIcon(element, ...properties);
    return element;
}
