import { initIcon } from "./icon.js";

//the url of the hexagon outlined svg; resolved relative to this module
const URL_HEXAGONOUTLINED = new URL('../../assets/icons/hexagonOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hexagon outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hexagonOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHexagonOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HEXAGONOUTLINED }, ...properties);
}

/**
 * Creates a hexagon outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hexagonOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHexagonOutlinedIcon(element, ...properties);
    return element;
}
