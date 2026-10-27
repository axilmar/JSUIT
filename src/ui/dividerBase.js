import { adoptStyleSheet } from "../utility/utility.js";

import dividerStyleSheet from './divider.css' with { type: 'css' };

adoptStyleSheet(dividerStyleSheet);

const ORIENTATIONS = ['horizontal', 'vertical'];        //the class of an orientation is 'divider-' followed by its name
const VARIANTS = ['stretch', 'inset', 'middle'];        //the class of a variant is 'divider-' followed by its name
const CONTENT_ALIGNS = ['center', 'left', 'right'];     //the class of an alignment is 'divider-' followed by its name

//defines a property whose value is one of a set of names, each of which is the suffix of a class; the invalid value falls back to the default
const defineClassProperty = (element, propertyName, names, defaultName) => {
    let current;

    Object.defineProperty(element, propertyName, {
        configurable: true,
        enumerable: true,
        get: () => current,
        set: (value) => {
            console.assert(names.includes(value));
            const name = names.includes(value) ? value : defaultName;
            element.classList.remove(...names.map(n => 'divider-' + n));
            element.classList.add('divider-' + name);
            current = name;
        }
    });
    element[propertyName] = defaultName;
};

/**
 * Initializes an element as a divider, looking like MUI's Divider; the common part of the divider and the listDivider components.
 *
 * The function adds the classes 'dividerBase' and 'divider' to the element and defines the following properties:
 *  - `orientation`: 'horizontal' (the default) or 'vertical'; the way the line is drawn. A vertical divider stretches to the height of
 *    its flex container.
 *  - `variant`: 'stretch' (the default, the line spans the whole width or height, as MUI's fullWidth), 'inset' (a horizontal line starts 72px
 *    from the start; it has no effect on a vertical line) or 'middle' (a gap at both ends, 16px horizontally or 8px vertically).
 *  - `contentAlign`: 'center' (the default), 'left' or 'right'; where the children of the divider are placed along it, with a line on each
 *    side of them (as MUI's Divider with children). On a vertical divider, 'left' is the top and 'right' is the bottom.
 *
 * It must be called before the properties of the element are applied, so that they can set these.
 *
 * @param {*} element the element to initialize.
 */
export const initDividerBase = (element) => {
    element.classList.add('dividerBase', 'divider');
    defineClassProperty(element, 'orientation', ORIENTATIONS, 'horizontal');
    defineClassProperty(element, 'variant', VARIANTS, 'stretch');
    defineClassProperty(element, 'contentAlign', CONTENT_ALIGNS, 'center');
};
