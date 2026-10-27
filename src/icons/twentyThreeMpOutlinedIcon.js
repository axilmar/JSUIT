import { initIcon } from "./icon.js";

//the url of the twenty three mp outlined svg; resolved relative to this module
const URL_TWENTYTHREEMPOUTLINED = new URL('../../assets/icons/twentyThreeMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twenty three mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twentyThreeMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwentyThreeMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'twentyThreeMpOutlinedIcon', url: URL_TWENTYTHREEMPOUTLINED }, ...properties);
}

/**
 * Creates a twenty three mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twentyThreeMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTwentyThreeMpOutlinedIcon(element, ...properties);
    return element;
}
