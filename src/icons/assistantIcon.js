import { initIcon } from "./icon.js";

//the url of the assistant svg; resolved relative to this module
const URL_ASSISTANT = new URL('../../assets/icons/assistant.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assistant icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assistant.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssistantIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assistantIcon', url: URL_ASSISTANT }, ...properties);
}

/**
 * Creates an assistant icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assistantIcon = (...properties) => {
    const element = document.createElement('div');
    initAssistantIcon(element, ...properties);
    return element;
}
