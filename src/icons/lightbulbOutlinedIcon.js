import { initIcon } from "./icon.js";

//the url of the lightbulb outlined svg; resolved relative to this module
const URL_LIGHTBULBOUTLINED = new URL('../../assets/icons/lightbulbOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lightbulb outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lightbulbOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLightbulbOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lightbulbOutlinedIcon', url: URL_LIGHTBULBOUTLINED }, ...properties);
}

/**
 * Creates a lightbulb outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lightbulbOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLightbulbOutlinedIcon(element, ...properties);
    return element;
}
