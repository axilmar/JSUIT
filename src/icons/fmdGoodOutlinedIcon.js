import { initIcon } from "./icon.js";

//the url of the fmd good outlined svg; resolved relative to this module
const URL_FMDGOODOUTLINED = new URL('../../assets/icons/fmdGoodOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fmd good outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fmdGoodOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFmdGoodOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FMDGOODOUTLINED }, ...properties);
}

/**
 * Creates a fmd good outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fmdGoodOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFmdGoodOutlinedIcon(element, ...properties);
    return element;
}
