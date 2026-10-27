import { initIcon } from "./icon.js";

//the url of the kitchen outlined svg; resolved relative to this module
const URL_KITCHENOUTLINED = new URL('../../assets/icons/kitchenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a kitchen outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/kitchenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKitchenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'kitchenOutlinedIcon', url: URL_KITCHENOUTLINED }, ...properties);
}

/**
 * Creates a kitchen outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const kitchenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKitchenOutlinedIcon(element, ...properties);
    return element;
}
