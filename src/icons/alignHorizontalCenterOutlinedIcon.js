import { initIcon } from "./icon.js";

//the url of the align horizontal center outlined svg; resolved relative to this module
const URL_ALIGNHORIZONTALCENTEROUTLINED = new URL('../../assets/icons/alignHorizontalCenterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align horizontal center outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignHorizontalCenterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignHorizontalCenterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alignHorizontalCenterOutlinedIcon', url: URL_ALIGNHORIZONTALCENTEROUTLINED }, ...properties);
}

/**
 * Creates an align horizontal center outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignHorizontalCenterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignHorizontalCenterOutlinedIcon(element, ...properties);
    return element;
}
