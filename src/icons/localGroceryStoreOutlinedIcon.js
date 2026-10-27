import { initIcon } from "./icon.js";

//the url of the local grocery store outlined svg; resolved relative to this module
const URL_LOCALGROCERYSTOREOUTLINED = new URL('../../assets/icons/localGroceryStoreOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local grocery store outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localGroceryStoreOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalGroceryStoreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localGroceryStoreOutlinedIcon', url: URL_LOCALGROCERYSTOREOUTLINED }, ...properties);
}

/**
 * Creates a local grocery store outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localGroceryStoreOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalGroceryStoreOutlinedIcon(element, ...properties);
    return element;
}
