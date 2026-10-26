import { initIcon } from "./icon.js";

//the url of the wine bar outlined svg; resolved relative to this module
const URL_WINEBAROUTLINED = new URL('../../assets/icons/wineBarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wine bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wineBarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWineBarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WINEBAROUTLINED }, ...properties);
}

/**
 * Creates a wine bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wineBarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWineBarOutlinedIcon(element, ...properties);
    return element;
}
