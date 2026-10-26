import { initIcon } from "./icon.js";

//the url of the lightbulb circle outlined svg; resolved relative to this module
const URL_LIGHTBULBCIRCLEOUTLINED = new URL('../../assets/icons/lightbulbCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lightbulb circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lightbulbCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLightbulbCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIGHTBULBCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a lightbulb circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lightbulbCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLightbulbCircleOutlinedIcon(element, ...properties);
    return element;
}
