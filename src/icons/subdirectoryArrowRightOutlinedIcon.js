import { initIcon } from "./icon.js";

//the url of the subdirectory arrow right outlined svg; resolved relative to this module
const URL_SUBDIRECTORYARROWRIGHTOUTLINED = new URL('../../assets/icons/subdirectoryArrowRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subdirectory arrow right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subdirectoryArrowRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubdirectoryArrowRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUBDIRECTORYARROWRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a subdirectory arrow right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subdirectoryArrowRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSubdirectoryArrowRightOutlinedIcon(element, ...properties);
    return element;
}
