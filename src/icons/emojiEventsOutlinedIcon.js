import { initIcon } from "./icon.js";

//the url of the emoji events outlined svg; resolved relative to this module
const URL_EMOJIEVENTSOUTLINED = new URL('../../assets/icons/emojiEventsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji events outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiEventsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiEventsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emojiEventsOutlinedIcon', url: URL_EMOJIEVENTSOUTLINED }, ...properties);
}

/**
 * Creates an emoji events outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiEventsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiEventsOutlinedIcon(element, ...properties);
    return element;
}
