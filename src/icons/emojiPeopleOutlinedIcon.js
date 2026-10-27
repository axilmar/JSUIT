import { initIcon } from "./icon.js";

//the url of the emoji people outlined svg; resolved relative to this module
const URL_EMOJIPEOPLEOUTLINED = new URL('../../assets/icons/emojiPeopleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji people outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiPeopleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiPeopleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emojiPeopleOutlinedIcon', url: URL_EMOJIPEOPLEOUTLINED }, ...properties);
}

/**
 * Creates an emoji people outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiPeopleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiPeopleOutlinedIcon(element, ...properties);
    return element;
}
