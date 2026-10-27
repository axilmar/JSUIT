import { initIcon } from "./icon.js";

//the url of the airlines outlined svg; resolved relative to this module
const URL_AIRLINESOUTLINED = new URL('../../assets/icons/airlinesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airlines outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlinesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlinesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlinesOutlinedIcon', url: URL_AIRLINESOUTLINED }, ...properties);
}

/**
 * Creates an airlines outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlinesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlinesOutlinedIcon(element, ...properties);
    return element;
}
