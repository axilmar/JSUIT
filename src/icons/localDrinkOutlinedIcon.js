import { initIcon } from "./icon.js";

//the url of the local drink outlined svg; resolved relative to this module
const URL_LOCALDRINKOUTLINED = new URL('../../assets/icons/localDrinkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local drink outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localDrinkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalDrinkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localDrinkOutlinedIcon', url: URL_LOCALDRINKOUTLINED }, ...properties);
}

/**
 * Creates a local drink outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localDrinkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalDrinkOutlinedIcon(element, ...properties);
    return element;
}
