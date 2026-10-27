import { initIcon } from "./icon.js";

//the url of the card membership outlined svg; resolved relative to this module
const URL_CARDMEMBERSHIPOUTLINED = new URL('../../assets/icons/cardMembershipOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a card membership outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cardMembershipOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCardMembershipOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cardMembershipOutlinedIcon', url: URL_CARDMEMBERSHIPOUTLINED }, ...properties);
}

/**
 * Creates a card membership outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cardMembershipOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCardMembershipOutlinedIcon(element, ...properties);
    return element;
}
