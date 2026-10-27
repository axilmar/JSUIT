import { initIcon } from "./icon.js";

//the url of the subdirectory arrow left outlined svg; resolved relative to this module
const URL_SUBDIRECTORYARROWLEFTOUTLINED = new URL('../../assets/icons/subdirectoryArrowLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subdirectory arrow left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subdirectoryArrowLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubdirectoryArrowLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'subdirectoryArrowLeftOutlinedIcon', url: URL_SUBDIRECTORYARROWLEFTOUTLINED }, ...properties);
}

/**
 * Creates a subdirectory arrow left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subdirectoryArrowLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSubdirectoryArrowLeftOutlinedIcon(element, ...properties);
    return element;
}
