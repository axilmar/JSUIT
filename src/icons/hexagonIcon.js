import { initIcon } from "./icon.js";

//the url of the hexagon svg; resolved relative to this module
const URL_HEXAGON = new URL('../../assets/icons/hexagon.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hexagon icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hexagon.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHexagonIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hexagonIcon', url: URL_HEXAGON }, ...properties);
}

/**
 * Creates a hexagon icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hexagonIcon = (...properties) => {
    const element = document.createElement('div');
    initHexagonIcon(element, ...properties);
    return element;
}
