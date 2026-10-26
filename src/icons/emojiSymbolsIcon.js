import { initIcon } from "./icon.js";

//the url of the emoji symbols svg; resolved relative to this module
const URL_EMOJISYMBOLS = new URL('../../assets/icons/emojiSymbols.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji symbols icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiSymbols.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiSymbolsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMOJISYMBOLS }, ...properties);
}

/**
 * Creates an emoji symbols icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiSymbolsIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiSymbolsIcon(element, ...properties);
    return element;
}
