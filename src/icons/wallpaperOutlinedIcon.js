import { initIcon } from "./icon.js";

//the url of the wallpaper outlined svg; resolved relative to this module
const URL_WALLPAPEROUTLINED = new URL('../../assets/icons/wallpaperOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wallpaper outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wallpaperOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWallpaperOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WALLPAPEROUTLINED }, ...properties);
}

/**
 * Creates a wallpaper outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wallpaperOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWallpaperOutlinedIcon(element, ...properties);
    return element;
}
