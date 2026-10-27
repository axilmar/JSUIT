import { initIcon } from "./icon.js";

//the url of the speaker group svg; resolved relative to this module
const URL_SPEAKERGROUP = new URL('../../assets/icons/speakerGroup.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speaker group icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speakerGroup.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeakerGroupIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'speakerGroupIcon', url: URL_SPEAKERGROUP }, ...properties);
}

/**
 * Creates a speaker group icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speakerGroupIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeakerGroupIcon(element, ...properties);
    return element;
}
