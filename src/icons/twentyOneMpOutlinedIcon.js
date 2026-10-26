import { initIcon } from "./icon.js";

//the url of the twenty one mp outlined svg; resolved relative to this module
const URL_TWENTYONEMPOUTLINED = new URL('../../assets/icons/twentyOneMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twenty one mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twentyOneMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwentyOneMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TWENTYONEMPOUTLINED }, ...properties);
}

/**
 * Creates a twenty one mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twentyOneMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTwentyOneMpOutlinedIcon(element, ...properties);
    return element;
}
