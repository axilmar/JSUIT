import { initIcon } from "./icon.js";

//the url of the assistant photo svg; resolved relative to this module
const URL_ASSISTANTPHOTO = new URL('../../assets/icons/assistantPhoto.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assistant photo icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assistantPhoto.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssistantPhotoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assistantPhotoIcon', url: URL_ASSISTANTPHOTO }, ...properties);
}

/**
 * Creates an assistant photo icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assistantPhotoIcon = (...properties) => {
    const element = document.createElement('div');
    initAssistantPhotoIcon(element, ...properties);
    return element;
}
