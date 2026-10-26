import { initIcon } from "./icon.js";

//the url of the speaker notes outlined svg; resolved relative to this module
const URL_SPEAKERNOTESOUTLINED = new URL('../../assets/icons/speakerNotesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speaker notes outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speakerNotesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeakerNotesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPEAKERNOTESOUTLINED }, ...properties);
}

/**
 * Creates a speaker notes outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speakerNotesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeakerNotesOutlinedIcon(element, ...properties);
    return element;
}
