import { initIcon } from "./icon.js";

//the url of the wallpaper svg; resolved relative to this module
const URL_WALLPAPER = new URL('../../assets/icons/wallpaper.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wallpaper icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wallpaper.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWallpaperIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WALLPAPER }, ...properties);
}

/**
 * Creates a wallpaper icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wallpaperIcon = (...properties) => {
    const element = document.createElement('div');
    initWallpaperIcon(element, ...properties);
    return element;
}
