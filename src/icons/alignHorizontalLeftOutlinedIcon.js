import { initIcon } from "./icon.js";

//the url of the align horizontal left outlined svg; resolved relative to this module
const URL_ALIGNHORIZONTALLEFTOUTLINED = new URL('../../assets/icons/alignHorizontalLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align horizontal left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignHorizontalLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignHorizontalLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alignHorizontalLeftOutlinedIcon', url: URL_ALIGNHORIZONTALLEFTOUTLINED }, ...properties);
}

/**
 * Creates an align horizontal left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignHorizontalLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignHorizontalLeftOutlinedIcon(element, ...properties);
    return element;
}
