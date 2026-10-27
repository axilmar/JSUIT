import { initIcon } from "./icon.js";

//the url of the insert emoticon svg; resolved relative to this module
const URL_INSERTEMOTICON = new URL('../../assets/icons/insertEmoticon.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert emoticon icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertEmoticon.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertEmoticonIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'insertEmoticonIcon', url: URL_INSERTEMOTICON }, ...properties);
}

/**
 * Creates an insert emoticon icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertEmoticonIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertEmoticonIcon(element, ...properties);
    return element;
}
