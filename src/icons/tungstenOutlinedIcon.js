import { initIcon } from "./icon.js";

//the url of the tungsten outlined svg; resolved relative to this module
const URL_TUNGSTENOUTLINED = new URL('../../assets/icons/tungstenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tungsten outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tungstenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTungstenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TUNGSTENOUTLINED }, ...properties);
}

/**
 * Creates a tungsten outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tungstenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTungstenOutlinedIcon(element, ...properties);
    return element;
}
