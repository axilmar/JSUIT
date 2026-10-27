import { initIconButton } from "./iconButton.js";
import { expandLessIcon } from "../icons/expandLessIcon.js";
import { expandMoreIcon } from "../icons/expandMoreIcon.js";
import { chevronLeftIcon } from "../icons/chevronLeftIcon.js";
import { chevronRightIcon } from "../icons/chevronRightIcon.js";
import { adoptStyleSheet } from "../utility/utility.js";

import expandButtonStyleSheet from './expandButton.css' with { type: 'css' };

adoptStyleSheet(expandButtonStyleSheet);

const ROTATION_DURATION = 150;                          //MUI's theme.transitions.duration.shortest
const ROTATION_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';   //MUI's theme.transitions.easing.easeInOut

const ORIENTATIONS = ['horizontal', 'vertical'];

//the functions that create the default icons of each orientation: the arrow of the expanded state points towards the side the content collapses to
const DEFAULT_ICONS = {
    vertical: { expanded: expandLessIcon, collapsed: expandMoreIcon },
    horizontal: { expanded: chevronLeftIcon, collapsed: chevronRightIcon }
};

//defines the properties 'open', 'orientation', 'expandedIcon' and 'collapsedIcon', and returns the function that shows the icon of the current state
const defineExpandButtonProperties = (element) => {
    let expanded = false;
    let orientation = 'vertical';
    let expandedIcon = DEFAULT_ICONS[orientation].expanded();
    let collapsedIcon = DEFAULT_ICONS[orientation].collapsed();
    let customExpandedIcon = false;     //an icon that was set by the user is not replaced when the orientation changes
    let customCollapsedIcon = false;
    let animation = null;               //the rotation of the icon, while it is in effect; the button is locked meanwhile

    //shows the icon of the current state; if the state changed, the new icon turns half way, as MUI's expand arrow does
    const refresh = (animate = false) => {
        element.icon = expanded ? expandedIcon : collapsedIcon;
        element.setAttribute('aria-expanded', String(expanded));
        if (animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const current = element.icon.animate(
                [{ transform: 'rotate(180deg)' }, { transform: 'rotate(0deg)' }],
                { duration: ROTATION_DURATION, easing: ROTATION_EASING }
            );
            const unlock = () => {
                if (animation === current) {
                    animation = null;
                }
            };
            current.addEventListener('finish', unlock);
            current.addEventListener('cancel', unlock);
            animation = current;
        }
    };

    const defineIcon = (name, get, set) => {
        Object.defineProperty(element, name, {
            configurable: true,
            enumerable: true,
            get,
            set: (icon) => {
                console.assert(icon instanceof HTMLDivElement);
                set(icon);
                refresh();
            }
        });
    };

    Object.defineProperty(element, 'open', {
        configurable: true,
        enumerable: true,
        get: () => expanded,
        set: (value) => {
            value = !!value;
            if (animation?.playState === 'running' || value === expanded) {      //while the icon turns, the button ignores clicks and changes of the property
                return;
            }
            expanded = value;
            refresh(true);
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
    defineIcon('expandedIcon', () => expandedIcon, (icon) => { expandedIcon = icon; customExpandedIcon = true; });
    defineIcon('collapsedIcon', () => collapsedIcon, (icon) => { collapsedIcon = icon; customCollapsedIcon = true; });

    Object.defineProperty(element, 'orientation', {
        configurable: true,
        enumerable: true,
        get: () => orientation,
        set: (value) => {
            console.assert(ORIENTATIONS.includes(value));
            if (value === orientation) {
                return;
            }
            orientation = value;
            if (!customExpandedIcon) {
                expandedIcon = DEFAULT_ICONS[orientation].expanded();
            }
            if (!customCollapsedIcon) {
                collapsedIcon = DEFAULT_ICONS[orientation].collapsed();
            }
            refresh();
        }
    });

    element.addEventListener('click', () => { element.open = !element.open; });
    return refresh;
};

//MUI's touch ripple: pressing the button starts a ripple that grows from the center of the button and always completes growing, however briefly the
//button is pressed; releasing the button (or leaving it, or losing the focus) fades the ripple out. A button focused with the keyboard has a
//pulsating ripple. The function returns nothing; it installs the listeners.
const defineRipple = (element) => {
    const root = document.createElement('span');
    root.classList.add('expandButton-ripples');
    root.setAttribute('aria-hidden', 'true');
    element.append(root);

    const start = (pulsate) => {
        const { width, height } = element.getBoundingClientRect();
        let size = Math.sqrt((2 * width ** 2 + height ** 2) / 3);      //the size of MUI's centered ripple
        if (size % 2 === 0) {
            size += 1;
        }
        const ripple = document.createElement('span');
        ripple.classList.add('expandButton-ripple', 'expandButton-ripple-visible');
        const child = document.createElement('span');
        child.classList.add('expandButton-ripple-child');
        ripple.append(child);
        if (pulsate) {
            ripple.classList.add('expandButton-ripple-pulsate');
            child.classList.add('expandButton-ripple-child-pulsate');
        }
        Object.assign(ripple.style, { width: size + 'px', height: size + 'px', left: (width - size) / 2 + 'px', top: (height - size) / 2 + 'px' });
        root.append(ripple);
        return ripple;
    };

    const stop = (ripple) => {
        if (!ripple) {
            return;
        }
        const child = ripple.firstChild;
        child.classList.remove('expandButton-ripple-child-pulsate');
        child.classList.add('expandButton-ripple-child-leaving');
        child.addEventListener('animationend', () => ripple.remove(), { once: true });
    };

    let pressed = null;         //the ripple of the pointer or of the space key
    let focused = null;         //the pulsating ripple of the keyboard focus

    const press = () => {
        if (!pressed) {
            pressed = start(false);
        }
    };
    const release = () => {
        stop(pressed);
        pressed = null;
    };

    element.addEventListener('pointerdown', (event) => {
        if (event.button === 0) {
            press();
        }
    });
    for (const type of ['pointerup', 'pointerleave', 'pointercancel', 'dragleave', 'contextmenu']) {
        element.addEventListener(type, release);
    }
    element.addEventListener('keydown', (event) => {
        if (event.key === ' ' && !event.repeat) {
            press();
        }
    });
    element.addEventListener('keyup', (event) => {
        if (event.key === ' ') {
            release();
        }
    });
    element.addEventListener('focus', () => {
        if (!focused && element.matches(':focus-visible')) {
            focused = start(true);
        }
    });
    element.addEventListener('blur', () => {
        stop(focused);
        focused = null;
        release();
    });
};

/**
 * Initializes an instance of HTMLButtonElement as an expand button: an icon button that shows whether something is expanded or collapsed.
 *
 * It invokes the function `initIconButton(element, ...properties)`, from which it gets the property `displaySize`.
 *
 * The element gets the class 'expandButton' by default; an `additionalClassName` property adds further classes. The attribute aria-expanded
 * follows the property `open`.
 *
 * The element gets the following properties:
 *  - `open`: a boolean; the default is false. Clicking the button toggles it (this is a click listener, so an `onclick` property still works
 *    in addition to it).
 *  - `displaySize`: 'small', 'medium' (the default) or 'large', as in the icon button: the icon is 20px, 24px or 35px, and the padding around it
 *    5px, 8px or 12px (the paddings of MUI's small, medium and large IconButton).
 *  - `orientation`: 'vertical' (the default) or 'horizontal'; it selects the default icons.
 *  - `expandedIcon`: the icon shown while `open` is true; the default is the expand less icon (the up arrow) if the orientation is vertical, the
 *    chevron left icon if it is horizontal.
 *  - `collapsedIcon`: the icon shown while `open` is false; the default is the expand more icon (the down arrow) if the orientation is vertical,
 *    the chevron right icon if it is horizontal.
 *
 * An icon that was set by the user is not changed when the orientation changes; only the default icons follow the orientation.
 *
 * It looks like the IconButton that MUI uses for expanding a card (the hover effect is the one of `iconButton`; the box is `content-box` with 8px of padding around the icon): when `open`
 * changes, the new icon turns half way in 150ms, as the arrow of MUI's expand button does (not if the user prefers reduced motion).
 *
 * While the icon turns, the button is locked: a click, or a change of `open` by the code, is ignored (there is no visual indication of it). The
 * lock lasts as long as the rotation, 150ms, and there is none if the user prefers reduced motion.
 *
 * It has MUI's touch ripple: pressing the button (with the pointer, or the space key) starts a ripple from the center of the button, which grows for
 * 550ms however briefly the button is pressed, and fades out when it is released; a button focused with the keyboard has a pulsating ripple.
 *
 * The element dispatches the event 'change' when `open` changes, either by a click or by the code.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExpandButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    const refresh = defineExpandButtonProperties(element);
    initIconButton(element, { additionalClassName: 'expandButton' }, ...properties);
    refresh();
    defineRipple(element);
}

/**
 * Creates an expand button.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const expandButton = (...properties) => {
    const element = document.createElement('button');
    initExpandButton(element, ...properties);
    return element;
}
