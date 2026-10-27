import { initIcon } from "./icon.js";

//the url of the electric meter svg; resolved relative to this module
const URL_ELECTRICMETER = new URL('../../assets/icons/electricMeter.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric meter icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricMeter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricMeterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'electricMeterIcon', url: URL_ELECTRICMETER }, ...properties);
}

/**
 * Creates an electric meter icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricMeterIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricMeterIcon(element, ...properties);
    return element;
}
