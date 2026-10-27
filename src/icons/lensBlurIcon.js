import { initIcon } from "./icon.js";

//the url of the lens blur svg; resolved relative to this module
const URL_LENSBLUR = new URL('../../assets/icons/lensBlur.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lens blur icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lensBlur.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLensBlurIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lensBlurIcon', url: URL_LENSBLUR }, ...properties);
}

/**
 * Creates a lens blur icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lensBlurIcon = (...properties) => {
    const element = document.createElement('div');
    initLensBlurIcon(element, ...properties);
    return element;
}
