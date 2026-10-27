import { initIcon } from "./icon.js";

//the url of the emoji food beverage outlined svg; resolved relative to this module
const URL_EMOJIFOODBEVERAGEOUTLINED = new URL('../../assets/icons/emojiFoodBeverageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji food beverage outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiFoodBeverageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiFoodBeverageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emojiFoodBeverageOutlinedIcon', url: URL_EMOJIFOODBEVERAGEOUTLINED }, ...properties);
}

/**
 * Creates an emoji food beverage outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiFoodBeverageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiFoodBeverageOutlinedIcon(element, ...properties);
    return element;
}
