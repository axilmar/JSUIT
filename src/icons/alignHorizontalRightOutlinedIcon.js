import { initIcon } from "./icon.js";

//the url of the align horizontal right outlined svg; resolved relative to this module
const URL_ALIGNHORIZONTALRIGHTOUTLINED = new URL('../../assets/icons/alignHorizontalRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align horizontal right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignHorizontalRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignHorizontalRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alignHorizontalRightOutlinedIcon', url: URL_ALIGNHORIZONTALRIGHTOUTLINED }, ...properties);
}

/**
 * Creates an align horizontal right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignHorizontalRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignHorizontalRightOutlinedIcon(element, ...properties);
    return element;
}
