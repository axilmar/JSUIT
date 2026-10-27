import { initIcon } from "./icon.js";

//the url of the remove shopping cart outlined svg; resolved relative to this module
const URL_REMOVESHOPPINGCARTOUTLINED = new URL('../../assets/icons/removeShoppingCartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove shopping cart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeShoppingCartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveShoppingCartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'removeShoppingCartOutlinedIcon', url: URL_REMOVESHOPPINGCARTOUTLINED }, ...properties);
}

/**
 * Creates a remove shopping cart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeShoppingCartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveShoppingCartOutlinedIcon(element, ...properties);
    return element;
}
