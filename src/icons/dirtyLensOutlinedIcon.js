import { initIcon } from "./icon.js";

//the url of the dirty lens outlined svg; resolved relative to this module
const URL_DIRTYLENSOUTLINED = new URL('../../assets/icons/dirtyLensOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dirty lens outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dirtyLensOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirtyLensOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dirtyLensOutlinedIcon', url: URL_DIRTYLENSOUTLINED }, ...properties);
}

/**
 * Creates a dirty lens outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dirtyLensOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirtyLensOutlinedIcon(element, ...properties);
    return element;
}
