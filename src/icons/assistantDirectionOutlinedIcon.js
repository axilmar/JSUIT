import { initIcon } from "./icon.js";

//the url of the assistant direction outlined svg; resolved relative to this module
const URL_ASSISTANTDIRECTIONOUTLINED = new URL('../../assets/icons/assistantDirectionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assistant direction outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assistantDirectionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssistantDirectionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASSISTANTDIRECTIONOUTLINED }, ...properties);
}

/**
 * Creates an assistant direction outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assistantDirectionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAssistantDirectionOutlinedIcon(element, ...properties);
    return element;
}
