import { initIcon } from "./icon.js";

//the url of the lens outlined svg; resolved relative to this module
const URL_LENSOUTLINED = new URL('../../assets/icons/lensOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lens outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lensOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLensOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LENSOUTLINED }, ...properties);
}

/**
 * Creates a lens outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lensOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLensOutlinedIcon(element, ...properties);
    return element;
}
