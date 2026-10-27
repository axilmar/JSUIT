import { initIcon } from "./icon.js";

//the url of the electric bike svg; resolved relative to this module
const URL_ELECTRICBIKE = new URL('../../assets/icons/electricBike.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric bike icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricBike.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricBikeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'electricBikeIcon', url: URL_ELECTRICBIKE }, ...properties);
}

/**
 * Creates an electric bike icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricBikeIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricBikeIcon(element, ...properties);
    return element;
}
