import { initIcon } from "./icon.js";

//the url of the lightbulb circle svg; resolved relative to this module
const URL_LIGHTBULBCIRCLE = new URL('../../assets/icons/lightbulbCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lightbulb circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lightbulbCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLightbulbCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIGHTBULBCIRCLE }, ...properties);
}

/**
 * Creates a lightbulb circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lightbulbCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initLightbulbCircleIcon(element, ...properties);
    return element;
}
