import { initIcon } from "./icon.js";

//the url of the lens blur outlined svg; resolved relative to this module
const URL_LENSBLUROUTLINED = new URL('../../assets/icons/lensBlurOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lens blur outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lensBlurOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLensBlurOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lensBlurOutlinedIcon', url: URL_LENSBLUROUTLINED }, ...properties);
}

/**
 * Creates a lens blur outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lensBlurOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLensBlurOutlinedIcon(element, ...properties);
    return element;
}
