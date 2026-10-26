import { initIcon } from "./icon.js";

//the url of the emoji symbols outlined svg; resolved relative to this module
const URL_EMOJISYMBOLSOUTLINED = new URL('../../assets/icons/emojiSymbolsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji symbols outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiSymbolsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiSymbolsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMOJISYMBOLSOUTLINED }, ...properties);
}

/**
 * Creates an emoji symbols outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiSymbolsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiSymbolsOutlinedIcon(element, ...properties);
    return element;
}
