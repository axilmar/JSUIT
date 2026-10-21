import { showDateTimePicker } from "./dateTimePicker.js";
import { adoptStyleSheet } from "./utility.js";

import pickerInputStyleSheet from './pickerInput.css' with { type: 'css' };

adoptStyleSheet(pickerInputStyleSheet);

const ICON_WIDTH = 44;      //width of the area at the right edge that holds the calendar icon

//returns true if the mouse event happened over the calendar icon
const isOverIcon = (element, event) => {
    return event.clientX >= element.getBoundingClientRect().right - ICON_WIDTH;
};

/**
 * Makes a segmented input of type 'date', 'datetime-local', 'time', 'month' or 'week' open the custom picker popup of `showDateTimePicker`
 * instead of the browser's own popup.
 * 
 * The element gets the class 'pickerInput', which hides the browser's calendar icon and draws MUI's calendar icon (or clock icon, for time)
 * at the right edge of the field. Clicking the icon, or pressing Alt+ArrowDown, opens the popup, which starts with the
 * element's value and respects its `min` and `max`. When OK is pressed, the element's value is set and the
 * 'input' and 'change' events are dispatched, as when the user edits the value.
 * 
 * 
 * @param {*} element the input element.
 */
export const attachDateTimePicker = (element) => {
    console.assert(element instanceof HTMLInputElement);
    console.assert(['date', 'datetime-local', 'time', 'month', 'week'].includes(element.type));
    element.classList.add('pickerInput');
    element.classList.toggle('pickerInput-time', element.type === 'time');

    let close = null;

    const open = () => {
        close = showDateTimePicker({
            anchor: element,
            value: element.value,
            type: element.type,
            min: element.min,
            max: element.max,
            onaccept: (value) => {
                element.value = value;
                element.dispatchEvent(new Event('input', { bubbles: true }));
                element.dispatchEvent(new Event('change', { bubbles: true }));
            },
            onclose: () => { close = null; }
        });
    };

    element.addEventListener('click', (event) => {
        if (element.disabled || element.readOnly || !isOverIcon(element, event)) {
            return;
        }
        event.preventDefault();
        if (close) {
            close();
        }
        else {
            open();
        }
    });

    element.addEventListener('keydown', (event) => {
        if (event.altKey && event.key === 'ArrowDown' && !element.disabled && !element.readOnly && !close) {
            event.preventDefault();
            open();
        }
    });

    element.addEventListener('mousemove', (event) => {
        element.style.cursor = !element.disabled && isOverIcon(element, event) ? 'pointer' : '';
    });
}
