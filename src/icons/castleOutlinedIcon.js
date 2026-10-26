import { initIcon } from "./icon.js";

//the url of the castle outlined svg; resolved relative to this module
const URL_CASTLEOUTLINED = new URL('../../assets/icons/castleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a castle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/castleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCastleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CASTLEOUTLINED }, ...properties);
}

/**
 * Creates a castle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const castleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCastleOutlinedIcon(element, ...properties);
    return element;
}
