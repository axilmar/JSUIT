import { initIcon } from "./icon.js";

//the url of the nine mp outlined svg; resolved relative to this module
const URL_NINEMPOUTLINED = new URL('../../assets/icons/nineMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nine mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nineMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNineMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NINEMPOUTLINED }, ...properties);
}

/**
 * Creates a nine mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nineMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNineMpOutlinedIcon(element, ...properties);
    return element;
}
