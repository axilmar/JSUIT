import { initIcon } from "./icon.js";

//the url of the assistant direction svg; resolved relative to this module
const URL_ASSISTANTDIRECTION = new URL('../../assets/icons/assistantDirection.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assistant direction icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assistantDirection.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssistantDirectionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASSISTANTDIRECTION }, ...properties);
}

/**
 * Creates an assistant direction icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assistantDirectionIcon = (...properties) => {
    const element = document.createElement('div');
    initAssistantDirectionIcon(element, ...properties);
    return element;
}
