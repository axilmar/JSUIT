import { initIcon } from "./icon.js";

//the url of the temple hindu outlined svg; resolved relative to this module
const URL_TEMPLEHINDUOUTLINED = new URL('../../assets/icons/templeHinduOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a temple hindu outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/templeHinduOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTempleHinduOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEMPLEHINDUOUTLINED }, ...properties);
}

/**
 * Creates a temple hindu outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const templeHinduOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTempleHinduOutlinedIcon(element, ...properties);
    return element;
}
