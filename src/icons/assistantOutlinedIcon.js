import { initIcon } from "./icon.js";

//the url of the assistant outlined svg; resolved relative to this module
const URL_ASSISTANTOUTLINED = new URL('../../assets/icons/assistantOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assistant outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assistantOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssistantOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASSISTANTOUTLINED }, ...properties);
}

/**
 * Creates an assistant outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assistantOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAssistantOutlinedIcon(element, ...properties);
    return element;
}
