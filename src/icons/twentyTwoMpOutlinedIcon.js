import { initIcon } from "./icon.js";

//the url of the twenty two mp outlined svg; resolved relative to this module
const URL_TWENTYTWOMPOUTLINED = new URL('../../assets/icons/twentyTwoMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twenty two mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twentyTwoMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwentyTwoMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'twentyTwoMpOutlinedIcon', url: URL_TWENTYTWOMPOUTLINED }, ...properties);
}

/**
 * Creates a twenty two mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twentyTwoMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTwentyTwoMpOutlinedIcon(element, ...properties);
    return element;
}
