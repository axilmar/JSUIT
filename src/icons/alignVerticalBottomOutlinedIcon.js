import { initIcon } from "./icon.js";

//the url of the align vertical bottom outlined svg; resolved relative to this module
const URL_ALIGNVERTICALBOTTOMOUTLINED = new URL('../../assets/icons/alignVerticalBottomOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align vertical bottom outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignVerticalBottomOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignVerticalBottomOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALIGNVERTICALBOTTOMOUTLINED }, ...properties);
}

/**
 * Creates an align vertical bottom outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignVerticalBottomOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignVerticalBottomOutlinedIcon(element, ...properties);
    return element;
}
