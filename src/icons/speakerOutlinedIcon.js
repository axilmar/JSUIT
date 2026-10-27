import { initIcon } from "./icon.js";

//the url of the speaker outlined svg; resolved relative to this module
const URL_SPEAKEROUTLINED = new URL('../../assets/icons/speakerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speaker outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speakerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeakerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'speakerOutlinedIcon', url: URL_SPEAKEROUTLINED }, ...properties);
}

/**
 * Creates a speaker outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speakerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeakerOutlinedIcon(element, ...properties);
    return element;
}
