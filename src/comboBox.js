import { initSelect } from "./select.js";
import { initObject } from "./Object.js";
import { input as createInput, setInputContainer, whenInputPlaced } from "./input.js";
import { adoptStyleSheet, defineEventProperty } from "./utility.js";

import comboBoxStyleSheet from './comboBox.css' with { type: 'css' };

adoptStyleSheet(comboBoxStyleSheet);

//MUI's ArrowDropDown and Close (the clear icon) icons
const ARROW_DROP_DOWN = "<svg viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>";
const CLEAR = "<svg viewBox='0 0 24 24'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>";

const PAGE_SIZE = 5;            //the number of options that PageUp and PageDown move by
const POPUP_GAP = 4;            //the distance between the text field and the popup

const nativeValue = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value');
const nativeSelectedIndex = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'selectedIndex');

let nextId = 1;

//returns the text without the accents and in lower case, so that 'Éa' matches 'ea'
const normalize = (text) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

//MUI's filter: the option matches if its text has the typed text, ignoring the case and the accents
const defaultFilter = (label, text) => normalize(label).includes(normalize(text));

//creates a button of the field
const createButton = (className, svg, label) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.tabIndex = -1;
    button.setAttribute('aria-label', label);
    button.innerHTML = svg;
    return button;
};

//turns the select element into a combo box; returns the function that updates the combo box from the select
const attachComboBox = (element) => {
    const id = nextId++;
    const state = { clearable: true, noOptionsText: 'No options', autoHighlight: false, filter: null };

    //the text field is an input; with the buttons, it goes in a container, which the select takes when it is added to the page
    const field = createInput({ additionalClassName: 'comboBox-input' });
    field.autocomplete = 'off';
    field.spellcheck = false;
    field.setAttribute('role', 'combobox');
    field.setAttribute('aria-autocomplete', 'list');
    field.setAttribute('aria-haspopup', 'listbox');
    field.setAttribute('aria-expanded', 'false');
    const container = document.createElement('span');
    container.className = 'input-container comboBox-container';
    const indicators = document.createElement('span');
    indicators.className = 'comboBox-indicators';
    const clearButton = createButton('comboBox-clear', CLEAR, 'Clear');
    const popupButton = createButton('comboBox-popupButton', ARROW_DROP_DOWN, 'Open');
    indicators.append(clearButton, popupButton);
    container.append(indicators, field);
    setInputContainer(element, container);

    let isOpen = false;
    let popup = null;
    let listbox = null;
    let items = [];             //the options that the list shows: { option, element, disabled }
    let highlighted = -1;       //the index of the option of the list that the keyboard or the mouse is on
    let pristine = true;        //true while the text of the field is the text of the selected option, which shows all the options in the list
    let current = null;         //the option that is selected on purpose, by the user or by the code; null if there is none, even if the select has one
    let pendingValue = null;    //a value that was set when no option had it yet (as when the value is set before the options), and is set again when the options change
    let popupObserver = null;
    let fieldObserver = null;

    const getSelectedIndex = () => nativeSelectedIndex.get.call(element);

    const getSelectedLabel = () => {
        const index = getSelectedIndex();
        return index >= 0 ? element.options[index].label : '';
    };

    //the clear button is there while there is something to clear
    const updateDirty = () => {
        container.classList.toggle('comboBox-dirty', state.clearable && !element.disabled && (field.value !== '' || getSelectedIndex() >= 0));
    };

    //places the buttons over the right end of the text field
    const placeIndicators = () => {
        if (!field.isConnected) {
            return;
        }
        const gap = field.classList.contains('input-standard') ? 0 : 9;
        indicators.style.top = field.offsetTop + 'px';
        indicators.style.height = field.offsetHeight + 'px';
        indicators.style.right = (container.offsetWidth - field.offsetLeft - field.offsetWidth + gap) + 'px';
    };

    //shows the selected option in the field
    const showSelection = () => {
        field.value = getSelectedLabel();
        pristine = true;
        updateDirty();
    };

    //a select that has no selected option selects the first one; the combo box does not: no option is selected until the user, or the code, selects
    //one on purpose. So the first option is not kept if it was selected by the select (when the options are added, when the selected option is
    //removed, when the options are replaced), unless it has the attribute 'selected'; any other option that is selected is kept.
    const resetSelection = () => {
        if (pendingValue !== null) {
            nativeValue.set.call(element, pendingValue);
            if (getSelectedIndex() >= 0) {
                pendingValue = null;
            }
        }
        if (current && !element.contains(current)) {
            current = null;
        }
        const index = getSelectedIndex();
        const selected = index >= 0 ? element.options[index] : null;
        if (selected === current) {
            return;
        }
        if (!current && index === 0 && !selected.defaultSelected) {
            nativeSelectedIndex.set.call(element, -1);
        }
        else {
            current = selected;
        }
    };

    const fireInputAndChange = () => {
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
    };

    //returns the options that can be in the list, in order: { option, group, disabled }
    const collectOptions = () => {
        const entries = [];
        const add = (option, group) => {
            if (!option.hidden && option.label.trim() !== '') {
                entries.push({ option, group, disabled: option.disabled || !!group?.disabled });
            }
        };
        for (const child of element.children) {
            if (child instanceof HTMLOptGroupElement) {
                for (const option of child.children) {
                    if (option instanceof HTMLOptionElement) {
                        add(option, child);
                    }
                }
            }
            else if (child instanceof HTMLOptionElement) {
                add(child, null);
            }
        }
        return entries;
    };

    //the options that match the text of the field, or all of them while the text is the one of the selected option
    const getMatchingOptions = () => {
        const entries = collectOptions();
        if (pristine || field.value === '') {
            return entries;
        }
        const filter = state.filter ?? defaultFilter;
        return entries.filter(entry => filter(entry.option.label, field.value, entry.option));
    };

    //puts the popup below the field, or above it if there is no room below
    const positionPopup = () => {
        if (!popup) {
            return;
        }
        if (!field.isConnected) {
            close();
            return;
        }
        const rect = field.getBoundingClientRect();
        popup.style.width = rect.width + 'px';
        popup.style.left = rect.left + 'px';
        const height = popup.offsetHeight;
        const below = window.innerHeight - rect.bottom;
        const above = height + 8 > below && rect.top > below;
        popup.style.top = (above ? Math.max(8, rect.top - POPUP_GAP - height) : rect.bottom + POPUP_GAP) + 'px';
    };

    //marks an option of the list as the one that the keyboard or the mouse is on
    const setHighlight = (index, scroll = true) => {
        items[highlighted]?.element.classList.remove('comboBox-option-focused');
        highlighted = index;
        const item = items[index];
        if (item) {
            item.element.classList.add('comboBox-option-focused');
            field.setAttribute('aria-activedescendant', item.element.id);
            if (scroll) {
                item.element.scrollIntoView({ block: 'nearest' });
            }
        }
        else {
            field.removeAttribute('aria-activedescendant');
        }
    };

    //moves the highlight by one option, skipping the disabled ones, and wrapping around
    const moveHighlight = (direction) => {
        const count = items.length;
        let index = highlighted;
        for (let tries = 0; tries < count; tries++) {
            index = index < 0 ? (direction > 0 ? 0 : count - 1) : (index + direction + count) % count;
            if (!items[index].disabled) {
                setHighlight(index);
                return;
            }
        }
    };

    //moves the highlight to an option, or to the nearest one that is not disabled in the direction, or in the other one
    const jumpHighlight = (target, direction) => {
        for (const step of [direction, -direction]) {
            for (let index = Math.max(0, Math.min(items.length - 1, target)); index >= 0 && index < items.length; index += step) {
                if (!items[index].disabled) {
                    setHighlight(index);
                    return;
                }
            }
        }
    };

    //chooses an option of the list
    const choose = (item) => {
        const changed = getSelectedIndex() !== item.option.index;
        pendingValue = null;
        item.option.selected = true;
        current = item.option;
        showSelection();
        close();
        if (changed) {
            fireInputAndChange();
        }
    };

    //creates the elements of the list for the options that match the text of the field
    const renderList = () => {
        if (!popup) {
            return;
        }
        const entries = getMatchingOptions();
        listbox.replaceChildren();
        items = [];
        highlighted = -1;
        field.removeAttribute('aria-activedescendant');
        if (entries.length === 0) {
            const empty = document.createElement('li');
            empty.className = 'comboBox-empty';
            empty.textContent = state.noOptionsText;
            listbox.append(empty);
        }

        let groupElement = null;
        let groupOptions = null;
        let currentGroup = null;
        for (const entry of entries) {
            if (entry.group !== currentGroup) {
                currentGroup = entry.group;
                groupElement = null;
                if (currentGroup) {
                    groupElement = document.createElement('li');
                    groupElement.className = 'comboBox-group';
                    groupElement.setAttribute('role', 'presentation');
                    const label = document.createElement('div');
                    label.className = 'comboBox-group-label';
                    label.textContent = currentGroup.label;
                    groupOptions = document.createElement('ul');
                    groupOptions.className = 'comboBox-group-options';
                    groupOptions.setAttribute('role', 'group');
                    groupElement.append(label, groupOptions);
                    listbox.append(groupElement);
                }
            }
            const li = document.createElement('li');
            li.className = 'comboBox-option';
            li.id = `comboBox-${id}-option-${items.length}`;
            li.setAttribute('role', 'option');
            li.setAttribute('aria-selected', String(entry.option.selected));
            if (entry.disabled) {
                li.setAttribute('aria-disabled', 'true');
            }
            li.textContent = entry.option.label;
            (groupElement ? groupOptions : listbox).append(li);
            const item = { option: entry.option, element: li, disabled: entry.disabled };
            const index = items.length;
            items.push(item);
            li.addEventListener('mousemove', () => {
                if (highlighted !== index) {
                    setHighlight(index, false);
                }
            });
            li.addEventListener('click', () => choose(item));
        }
        positionPopup();
    };

    //shows the list; `typing` is true if it is shown because the user typed, and then it has only the options that match the typed text
    const open = (typing = false) => {
        if (isOpen || element.disabled || !field.isConnected) {
            return;
        }
        isOpen = true;
        pristine = typing ? false : field.value === getSelectedLabel();
        popup = document.createElement('div');
        popup.className = 'comboBox-popup';
        listbox = document.createElement('ul');
        listbox.className = 'comboBox-listbox';
        listbox.id = `comboBox-${id}-listbox`;
        listbox.setAttribute('role', 'listbox');
        popup.append(listbox);
        popup.addEventListener('mousedown', (event) => event.preventDefault());        //the field keeps the focus
        document.body.append(popup);
        container.classList.add('comboBox-open');
        field.setAttribute('aria-expanded', 'true');
        field.setAttribute('aria-controls', listbox.id);
        renderList();
        setHighlight(items.findIndex(item => item.option.selected));
        if (state.autoHighlight && highlighted < 0) {
            jumpHighlight(0, 1);
        }
        window.addEventListener('resize', positionPopup);
        window.addEventListener('scroll', positionPopup, true);
        popupObserver = new MutationObserver(() => {
            if (!field.isConnected) {
                close();
            }
        });
        popupObserver.observe(document, { childList: true, subtree: true });

        //the popup follows the field if it changes size (when the fonts are loaded, for example)
        fieldObserver = new ResizeObserver(positionPopup);
        fieldObserver.observe(field);
        element.dispatchEvent(new Event('open'));
    };

    //hides the list
    const close = () => {
        if (!isOpen) {
            return;
        }
        isOpen = false;
        popup.remove();
        popup = null;
        listbox = null;
        items = [];
        highlighted = -1;
        container.classList.remove('comboBox-open');
        field.setAttribute('aria-expanded', 'false');
        field.removeAttribute('aria-controls');
        field.removeAttribute('aria-activedescendant');
        window.removeEventListener('resize', positionPopup);
        window.removeEventListener('scroll', positionPopup, true);
        popupObserver.disconnect();
        popupObserver = null;
        fieldObserver.disconnect();
        fieldObserver = null;
        element.dispatchEvent(new Event('close'));
    };

    //removes the selection and the text
    const clear = () => {
        const changed = getSelectedIndex() >= 0;
        pendingValue = null;
        nativeSelectedIndex.set.call(element, -1);
        current = null;
        field.value = '';
        pristine = true;
        updateDirty();
        close();
        field.focus();
        if (changed) {
            fireInputAndChange();
        }
    };

    //updates the field and the list from the select: its options, and its attributes
    const sync = () => {
        field.disabled = element.disabled;
        field.required = element.required;
        field.error = element.classList.contains('comboBox-error');
        container.classList.toggle('comboBox-disabled', element.disabled);
        if (element.disabled) {
            close();
        }
        resetSelection();

        //the text that the user is typing is not replaced
        if (!(isOpen && !pristine)) {
            showSelection();
        }
        updateDirty();
        if (isOpen) {
            renderList();
        }
        placeIndicators();
    };

    //the user types: the list shows the options that match
    field.addEventListener('input', () => {
        updateDirty();
        if (isOpen) {
            pristine = false;
            renderList();
            if (state.autoHighlight) {
                jumpHighlight(0, 1);
            }
        }
        else {
            open(true);
        }
    });

    field.addEventListener('keydown', (event) => {
        if (event.isComposing || element.disabled) {
            return;
        }
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowUp': {
                event.preventDefault();
                const direction = event.key === 'ArrowDown' ? 1 : -1;
                if (!isOpen) {
                    open();
                    if (highlighted < 0) {
                        jumpHighlight(direction > 0 ? 0 : items.length - 1, direction);
                    }
                }
                else {
                    moveHighlight(direction);
                }
                break;
            }
            case 'PageDown':
            case 'PageUp':
                if (isOpen) {
                    event.preventDefault();
                    const direction = event.key === 'PageDown' ? 1 : -1;
                    jumpHighlight(Math.max(highlighted, 0) + direction * PAGE_SIZE, direction);
                }
                break;
            case 'Home':
            case 'End':
                if (isOpen) {
                    event.preventDefault();
                    const direction = event.key === 'Home' ? 1 : -1;
                    jumpHighlight(direction > 0 ? 0 : items.length - 1, direction);
                }
                break;
            case 'Enter':
                if (isOpen && highlighted >= 0) {
                    event.preventDefault();
                    choose(items[highlighted]);
                }
                break;
            case 'Escape':
                if (isOpen) {
                    event.preventDefault();
                    event.stopPropagation();
                    close();
                }
                break;
        }
    });

    //a click on the field shows the list, unless it is already there and has something typed; leaving the field hides the list, and shows the selected option
    field.addEventListener('mousedown', () => {
        if (!element.disabled && (field.value === '' || !isOpen)) {
            isOpen ? close() : open();
        }
    });
    field.addEventListener('blur', () => {
        close();
        showSelection();
    });

    //the buttons: they do not take the focus
    indicators.addEventListener('mousedown', (event) => event.preventDefault());
    popupButton.addEventListener('click', () => {
        if (element.disabled) {
            return;
        }
        field.focus();
        isOpen ? close() : open();
    });
    clearButton.addEventListener('click', clear);

    //the select is not seen: its focus goes to the field
    element.tabIndex = -1;
    element.addEventListener('focus', () => field.focus());
    element.focus = (options) => field.focus(options);
    element.blur = () => field.blur();

    //the value and the selected index are changed by the code
    for (const [name, descriptor] of [['value', nativeValue], ['selectedIndex', nativeSelectedIndex]]) {
        Object.defineProperty(element, name, {
            configurable: true,
            enumerable: true,
            get: () => descriptor.get.call(element),
            set: (value) => {
                descriptor.set.call(element, value);
                current = getSelectedIndex() >= 0 ? element.options[getSelectedIndex()] : null;

                //a value that no option has yet is set again when the options are added
                pendingValue = name === 'value' && getSelectedIndex() < 0 && String(value) !== '' ? String(value) : null;
                showSelection();
                if (isOpen) {
                    renderList();
                }
            }
        });
    }

    //the properties of the text field
    for (const name of ['label', 'variant', 'displaySize', 'placeholder']) {
        Object.defineProperty(element, name, {
            configurable: true,
            enumerable: true,
            get: () => field[name],
            set: (value) => {
                field[name] = value;
                placeIndicators();
            }
        });
    }

    const define = (name, get, set) => Object.defineProperty(element, name, { configurable: true, enumerable: true, get, set });
    define('clearable', () => state.clearable, (value) => { state.clearable = !!value; updateDirty(); });
    define('noOptionsText', () => state.noOptionsText, (value) => { state.noOptionsText = String(value); renderList(); });
    define('autoHighlight', () => state.autoHighlight, (value) => { state.autoHighlight = !!value; });
    define('filter', () => state.filter, (value) => {
        console.assert(value === null || value === undefined || typeof value === 'function');
        state.filter = value ?? null;
        renderList();
    });
    define('open', () => isOpen, (value) => { value ? open() : close(); });
    defineEventProperty(element, 'onopen', 'open');
    defineEventProperty(element, 'onclose', 'close');

    //the changes of the select: its options, and its attributes
    new MutationObserver(sync).observe(element, { childList: true, subtree: true, attributes: true, characterData: true });
    new ResizeObserver(placeIndicators).observe(field);
    new MutationObserver(placeIndicators).observe(field, { attributes: true, attributeFilter: ['class'] });

    //when the select is added to the page, it takes the place of the container, and goes in it
    whenInputPlaced(element, () => {
        placeIndicators();

        //a form that is reset brings back the default options
        element.form?.addEventListener('reset', () => setTimeout(() => {
            current = null;
            sync();
        }));
    });

    return sync;
};

/**
 * Initializes an instance of HTMLSelectElement as a combo box, looking like MUI's combo box (the Autocomplete component): a text field,
 * in which the user types to filter the options, with a button that clears the field and a button that opens the list of options.
 * The value must be one of the options.
 *
 * It invokes the function `initSelect(element, ...properties)`.
 *
 * The element is the select that keeps the options and the value, so the options are the elements `option` (see option.js) and `optGroup`
 * (see optGroup.js) in it, and the properties `value`, `selectedIndex`, `options`, `selectedOptions`, `name`, `required`, `disabled`, `form`,
 * and the events 'input' and 'change', are the ones of a select: they are dispatched when the user chooses an option, or clears the field.
 * It is not seen: when it is added to the page, it is replaced by the combo box, which is made of a container, the text field, and the
 * buttons, and the select goes in the container. The container follows the select: if the select is moved to another parent, the combo box goes
 * with it, and if the select is removed, the combo box is removed too (see `getInputContainer` in input.js). Its focus goes to the text field.
 * The select must not be `multiple`: the combo box has one value.
 *
 * The combo box has no option selected until the user, or the code, selects one on purpose; a select would select the first option. So it starts with
 * no option selected, unless an option has the attribute `selected`, or is selected and is not the first one (as the option of the value that is set);
 * and when options are added, or the selected option is removed, or the options are replaced, no option is selected after it (and no event is dispatched).
 * A value that is set before the options are added is set again when they are added.
 *
 * The element gets the class 'comboBox' by default; an `additionalClassName` property adds further classes.
 * Its `errorClassName` defaults to 'comboBox-error', which puts the text field and its label in the error color.
 * Its `busyClassName` defaults to 'comboBox-busy'.
 *
 * The element gets the properties of the text field, which is an input (see input.js): `label` (the floating label), `variant` ('outlined',
 * 'filled' or 'standard'; the default is 'outlined') and `displaySize` ('small', 'medium' or 'large'), and `placeholder`.
 *
 * It also gets the following properties:
 *  - `clearable`: if the button that clears the field is available; the default is true. The button is seen while the field has a value, and the mouse
 *    is over the field or the field has the focus.
 *  - `noOptionsText`: the text of the list when no option matches the text of the field; the default is 'No options'.
 *  - `autoHighlight`: if the first option of the list is highlighted while the user types, so that Enter chooses it; the default is false.
 *  - `filter`: a function `(label, text, option)` that returns true if an option matches the text of the field; the default ignores the case and the
 *    accents, and matches if the text of the option has the text of the field.
 *  - `open`: true while the list is open; it can be set. The events 'open' and 'close' are dispatched when the list is opened and closed,
 *    and the properties `onopen` and `onclose` set their handlers.
 *
 * The list is shown when the user clicks the field or the button, types, or presses ArrowDown or ArrowUp, and it has all the options, until the user
 * types. Typing filters the options. ArrowDown and ArrowUp move the highlight (wrapping around), PageDown and PageUp move it by 5, Home and End go
 * to the first and the last, Enter chooses the highlighted option, and Escape closes the list; Tab, or a click out of the combo box, closes the list
 * and shows the selected option in the field again. The disabled options (and the options of a disabled group) cannot be chosen, and the options
 * of the groups have the label of the group over them.
 *
 * The properties `value` and `selectedIndex` of the select update the field when they are set. Changing the `selected` property of an option does not;
 * changing its text, or adding or removing options, does.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initComboBox = (element, ...properties) => {
    console.assert(element instanceof HTMLSelectElement);
    console.assert(!element.multiple, 'A combo box cannot be multiple.');
    initSelect(element, { additionalClassName: 'comboBox', errorClassName: 'comboBox-error', busyClassName: 'comboBox-busy' });
    const sync = attachComboBox(element);

    //the properties are applied after the properties of the combo box are defined
    initObject(element, ...properties);
    sync();
}

/**
 * Creates a combo box.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const comboBox = (...properties) => {
    const element = document.createElement('select');
    initComboBox(element, ...properties);
    return element;
}
