import { initIcon } from "./icon.js";

//the url of the twenty four mp outlined svg; resolved relative to this module
const URL_TWENTYFOURMPOUTLINED = new URL('../../assets/icons/twentyFourMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twenty four mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twentyFourMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwentyFourMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'twentyFourMpOutlinedIcon', url: URL_TWENTYFOURMPOUTLINED }, ...properties);
}

/**
 * Creates a twenty four mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twentyFourMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTwentyFourMpOutlinedIcon(element, ...properties);
    return element;
}
