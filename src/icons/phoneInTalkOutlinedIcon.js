import { initIcon } from "./icon.js";

//the url of the phone in talk outlined svg; resolved relative to this module
const URL_PHONEINTALKOUTLINED = new URL('../../assets/icons/phoneInTalkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone in talk outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneInTalkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneInTalkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONEINTALKOUTLINED }, ...properties);
}

/**
 * Creates a phone in talk outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneInTalkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneInTalkOutlinedIcon(element, ...properties);
    return element;
}
