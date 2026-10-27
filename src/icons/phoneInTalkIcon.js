import { initIcon } from "./icon.js";

//the url of the phone in talk svg; resolved relative to this module
const URL_PHONEINTALK = new URL('../../assets/icons/phoneInTalk.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone in talk icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneInTalk.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneInTalkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneInTalkIcon', url: URL_PHONEINTALK }, ...properties);
}

/**
 * Creates a phone in talk icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneInTalkIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneInTalkIcon(element, ...properties);
    return element;
}
