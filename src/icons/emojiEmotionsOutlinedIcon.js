import { initIcon } from "./icon.js";

//the url of the emoji emotions outlined svg; resolved relative to this module
const URL_EMOJIEMOTIONSOUTLINED = new URL('../../assets/icons/emojiEmotionsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji emotions outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiEmotionsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiEmotionsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMOJIEMOTIONSOUTLINED }, ...properties);
}

/**
 * Creates an emoji emotions outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiEmotionsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiEmotionsOutlinedIcon(element, ...properties);
    return element;
}
