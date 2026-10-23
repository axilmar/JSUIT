import { initDiv } from "../html/div.js";
import { initAvatar } from "./avatar.js";
import { adoptStyleSheet } from "../utility/utility.js";

import avatarGroupStyleSheet from './avatarGroup.css' with { type: 'css' };

adoptStyleSheet(avatarGroupStyleSheet);

const HIDDEN_CLASS = 'avatarGroup-hidden';
const SURPLUS_CLASS = 'avatarGroup-surplus';
const FIT_RATIO = 0.8;          //the text of the default surplus child takes at most this part of the width of the avatar, so that the shape does not touch it
const MIN_FONT_RATIO = 0.5;     //the font of the default surplus child is never reduced below this part of its natural size

//converts a spacing to a css length: a number is in pixels, a string is a css length
const toCssLength = (value) => typeof value === 'number' ? value + 'px' : String(value);

//creates the default surplus child: an avatar with a text, whose font shrinks to fit, and which has the full text as tooltip when it is clipped
const createSurplusAvatar = () => {
    const avatar = document.createElement('div');
    const text = document.createElement('span');
    initAvatar(avatar, { additionalClassName: SURPLUS_CLASS }, text);
    let fullText = '';

    //reduces the font until the text fits in the avatar, down to the minimum size; then what does not fit is clipped, and the tooltip shows the text
    const fit = () => {
        avatar.style.fontSize = '';
        const available = avatar.clientWidth * FIT_RATIO;
        if (available === 0) {
            return;     //not shown yet; the resize observer invokes this function when it is
        }
        const natural = parseFloat(getComputedStyle(avatar).fontSize);
        const minimum = natural * MIN_FONT_RATIO;
        let size = natural;
        if (text.offsetWidth > available) {
            size = Math.max(minimum, natural * available / text.offsetWidth);
            avatar.style.fontSize = size + 'px';
            while (text.offsetWidth > available && size > minimum) {
                size = Math.max(minimum, size - 0.25);
                avatar.style.fontSize = size + 'px';
            }
        }
        avatar.tooltip = text.offsetWidth > available ? fullText : '';
    };

    new ResizeObserver(fit).observe(avatar);
    document.fonts?.addEventListener('loadingdone', fit);

    return {
        avatar,
        setText: (newText) => {
            fullText = newText;
            text.textContent = newText;
            fit();
        }
    };
};

//defines the properties 'size', 'spacing', 'surplusElement' and 'displaySize'
const defineGroupProperties = (element) => {
    const surplusAvatar = createSurplusAvatar();
    let surplus = surplusAvatar.avatar;     //the surplus child: the default avatar, or the element given by the programmer
    let size = 3;
    let spacing = '-8px';
    let displaySize = 'medium';
    let updating = false;

    //hides the children over the size, shows the surplus child if there are any, and keeps the surplus child last
    const update = () => {
        if (updating) {
            return;
        }
        updating = true;
        const children = [...element.children].filter(child => child !== surplus);
        children.forEach((child, index) => {
            child.classList.toggle(HIDDEN_CLASS, index >= size);
            child.style.setProperty('--avatarGroup-z', children.length - index);
        });
        const count = Math.max(0, children.length - size);
        surplus.classList.toggle(HIDDEN_CLASS, count === 0);
        surplus.style.setProperty('--avatarGroup-z', 0);
        if (surplus === surplusAvatar.avatar) {
            surplusAvatar.setText('+' + count);
        }
        if (element.lastElementChild !== surplus) {
            element.append(surplus);
        }
        //the mutations made here are not changes of the children made by the programmer
        observer.takeRecords();
        updating = false;
    };

    const observer = new MutationObserver(update);
    observer.observe(element, { childList: true });

    Object.defineProperty(element, 'size', {
        configurable: true,
        enumerable: true,
        get: () => size,
        set: (value) => {
            console.assert(Number.isInteger(value) && value >= 0);
            size = Math.max(0, Math.trunc(value) || 0);
            update();
        }
    });

    Object.defineProperty(element, 'spacing', {
        configurable: true,
        enumerable: true,
        get: () => spacing,
        set: (value) => {
            console.assert(typeof value === 'string' || typeof value === 'number');
            spacing = toCssLength(value);
            element.style.setProperty('--avatarGroup-spacing', spacing);
        }
    });

    Object.defineProperty(element, 'surplusElement', {
        configurable: true,
        enumerable: true,
        get: () => surplus,
        set: (value) => {
            console.assert(value === null || value === undefined || value instanceof Element);
            const newSurplus = value ?? surplusAvatar.avatar;
            if (newSurplus !== surplus) {
                surplus.remove();
                surplus = newSurplus;
                update();
            }
        }
    });

    //the size of the default surplus child; the children are avatars of the programmer, with their own size
    Object.defineProperty(element, 'displaySize', {
        configurable: true,
        enumerable: true,
        get: () => displaySize,
        set: (value) => {
            console.assert(value === 'small' || value === 'medium' || value === 'large');
            displaySize = value;
            surplusAvatar.avatar.displaySize = value;
        }
    });

    update();
};

/**
 * Initializes an instance of HTMLDivElement as a group of avatars, looking like MUI's AvatarGroup.
 *
 * It invokes the function `initDiv(element, ...properties)`.
 *
 * The element gets the class 'avatarGroup' by default; an `additionalClassName` property adds further classes. Its children are laid out
 * in a row, from left to right. As in MUI, they have a 2px border (the css property `--avatarGroup-border-color`, default white), and the first
 * child is above the next ones when they overlap.
 *
 * The group shows its first `size` children; the others are hidden, and a last child, the surplus child, shows how many they are. The surplus child is
 * an element of the group, after the children, and it is shown only when there are children over the size. The children can be added and removed
 * at any time.
 *
 * The element gets the following properties:
 *  - `size`: the number of the children to show, a non-negative integer (default 3). With 0, only the surplus child is shown.
 *  - `spacing`: the space between the shown children, a css length (a number is in pixels). A negative value makes the children overlap by that
 *    amount, in the order they are added: the surplus child is always the last one. The default is '-8px'.
 *  - `surplusElement`: the surplus child. By default it is an avatar with the text '+' and the number of the hidden children, for example '+3'. The font of
 *    the text is reduced if the text is wider than the avatar, down to half of its natural size; then what does not fit is clipped. The tooltip of the avatar is
 *    the full text, and is set only while the text does not fit. If the programmer sets an element, it is used instead, and it is not changed by the group.
 *    Setting it to null or undefined restores the default avatar. The getter returns the surplus child in use.
 *  - `displaySize`: 'small', 'medium' (the default) or 'large', the size of the default surplus avatar; the children have their own sizes.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAvatarGroup = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    defineGroupProperties(element);
    initDiv(element, { additionalClassName: 'avatarGroup' }, ...properties);
}

/**
 * Creates an avatar group.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const avatarGroup = (...properties) => {
    const element = document.createElement('div');
    initAvatarGroup(element, ...properties);
    return element;
}
