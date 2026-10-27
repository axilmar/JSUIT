import { initIcon } from "./icon.js";

//the url of the present to all outlined svg; resolved relative to this module
const URL_PRESENTTOALLOUTLINED = new URL('../../assets/icons/presentToAllOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a present to all outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/presentToAllOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPresentToAllOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'presentToAllOutlinedIcon', url: URL_PRESENTTOALLOUTLINED }, ...properties);
}

/**
 * Creates a present to all outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const presentToAllOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPresentToAllOutlinedIcon(element, ...properties);
    return element;
}
