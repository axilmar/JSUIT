import { initIcon } from "./icon.js";

//the url of the align vertical top outlined svg; resolved relative to this module
const URL_ALIGNVERTICALTOPOUTLINED = new URL('../../assets/icons/alignVerticalTopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align vertical top outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignVerticalTopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignVerticalTopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alignVerticalTopOutlinedIcon', url: URL_ALIGNVERTICALTOPOUTLINED }, ...properties);
}

/**
 * Creates an align vertical top outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignVerticalTopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignVerticalTopOutlinedIcon(element, ...properties);
    return element;
}
