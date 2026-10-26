import { initIcon } from "./icon.js";

//the url of the add shopping cart outlined svg; resolved relative to this module
const URL_ADDSHOPPINGCARTOUTLINED = new URL('../../assets/icons/addShoppingCartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add shopping cart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addShoppingCartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddShoppingCartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDSHOPPINGCARTOUTLINED }, ...properties);
}

/**
 * Creates an add shopping cart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addShoppingCartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddShoppingCartOutlinedIcon(element, ...properties);
    return element;
}
