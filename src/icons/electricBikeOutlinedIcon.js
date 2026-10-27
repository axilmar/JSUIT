import { initIcon } from "./icon.js";

//the url of the electric bike outlined svg; resolved relative to this module
const URL_ELECTRICBIKEOUTLINED = new URL('../../assets/icons/electricBikeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric bike outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricBikeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricBikeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'electricBikeOutlinedIcon', url: URL_ELECTRICBIKEOUTLINED }, ...properties);
}

/**
 * Creates an electric bike outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricBikeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricBikeOutlinedIcon(element, ...properties);
    return element;
}
