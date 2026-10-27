import { initIcon } from "./icon.js";

//the url of the seven k plus outlined svg; resolved relative to this module
const URL_SEVENKPLUSOUTLINED = new URL('../../assets/icons/sevenKPlusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a seven k plus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sevenKPlusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSevenKPlusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sevenKPlusOutlinedIcon', url: URL_SEVENKPLUSOUTLINED }, ...properties);
}

/**
 * Creates a seven k plus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sevenKPlusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSevenKPlusOutlinedIcon(element, ...properties);
    return element;
}
