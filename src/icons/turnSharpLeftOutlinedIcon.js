import { initIcon } from "./icon.js";

//the url of the turn sharp left outlined svg; resolved relative to this module
const URL_TURNSHARPLEFTOUTLINED = new URL('../../assets/icons/turnSharpLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn sharp left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnSharpLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnSharpLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TURNSHARPLEFTOUTLINED }, ...properties);
}

/**
 * Creates a turn sharp left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnSharpLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnSharpLeftOutlinedIcon(element, ...properties);
    return element;
}
