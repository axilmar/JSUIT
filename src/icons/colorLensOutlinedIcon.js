import { initIcon } from "./icon.js";

//the url of the color lens outlined svg; resolved relative to this module
const URL_COLORLENSOUTLINED = new URL('../../assets/icons/colorLensOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a color lens outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/colorLensOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initColorLensOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'colorLensOutlinedIcon', url: URL_COLORLENSOUTLINED }, ...properties);
}

/**
 * Creates a color lens outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const colorLensOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initColorLensOutlinedIcon(element, ...properties);
    return element;
}
