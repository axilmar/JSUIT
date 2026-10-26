import { initIcon } from "./icon.js";

//the url of the nineteen mp outlined svg; resolved relative to this module
const URL_NINETEENMPOUTLINED = new URL('../../assets/icons/nineteenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nineteen mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nineteenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNineteenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NINETEENMPOUTLINED }, ...properties);
}

/**
 * Creates a nineteen mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nineteenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNineteenMpOutlinedIcon(element, ...properties);
    return element;
}
