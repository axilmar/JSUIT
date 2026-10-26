import { initIcon } from "./icon.js";

//the url of the imagesearch roller outlined svg; resolved relative to this module
const URL_IMAGESEARCHROLLEROUTLINED = new URL('../../assets/icons/imagesearchRollerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an imagesearch roller outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/imagesearchRollerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImagesearchRollerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_IMAGESEARCHROLLEROUTLINED }, ...properties);
}

/**
 * Creates an imagesearch roller outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const imagesearchRollerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initImagesearchRollerOutlinedIcon(element, ...properties);
    return element;
}
