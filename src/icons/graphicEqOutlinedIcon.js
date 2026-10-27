import { initIcon } from "./icon.js";

//the url of the graphic eq outlined svg; resolved relative to this module
const URL_GRAPHICEQOUTLINED = new URL('../../assets/icons/graphicEqOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a graphic eq outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/graphicEqOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGraphicEqOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'graphicEqOutlinedIcon', url: URL_GRAPHICEQOUTLINED }, ...properties);
}

/**
 * Creates a graphic eq outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const graphicEqOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGraphicEqOutlinedIcon(element, ...properties);
    return element;
}
