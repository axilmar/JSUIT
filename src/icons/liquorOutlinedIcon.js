import { initIcon } from "./icon.js";

//the url of the liquor outlined svg; resolved relative to this module
const URL_LIQUOROUTLINED = new URL('../../assets/icons/liquorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a liquor outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/liquorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLiquorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'liquorOutlinedIcon', url: URL_LIQUOROUTLINED }, ...properties);
}

/**
 * Creates a liquor outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const liquorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLiquorOutlinedIcon(element, ...properties);
    return element;
}
