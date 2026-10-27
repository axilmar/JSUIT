import { initIcon } from "./icon.js";

//the url of the pedal bike outlined svg; resolved relative to this module
const URL_PEDALBIKEOUTLINED = new URL('../../assets/icons/pedalBikeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pedal bike outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pedalBikeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPedalBikeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pedalBikeOutlinedIcon', url: URL_PEDALBIKEOUTLINED }, ...properties);
}

/**
 * Creates a pedal bike outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pedalBikeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPedalBikeOutlinedIcon(element, ...properties);
    return element;
}
