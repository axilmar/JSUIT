import { initIcon } from "./icon.js";

//the url of the pan tool alt outlined svg; resolved relative to this module
const URL_PANTOOLALTOUTLINED = new URL('../../assets/icons/panToolAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pan tool alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panToolAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanToolAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'panToolAltOutlinedIcon', url: URL_PANTOOLALTOUTLINED }, ...properties);
}

/**
 * Creates a pan tool alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panToolAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanToolAltOutlinedIcon(element, ...properties);
    return element;
}
