/**
 * Event that is fired when the selected state of an element changes.
 * 
 * The name of the event is 'selectedchanged'.
 */
export class SelectedChangedEvent extends Event {
    /**
     * The name of the event.
     */
    static NAME = 'selectedchanged';

    #selected;

    /**
     * Creates the event.
     * 
     * @param {boolean} selected the new selected state.
     * @param {EventInit} [eventInitDict] the optional event options, as in the Event constructor.
     */
    constructor(selected, eventInitDict) {
        super(SelectedChangedEvent.NAME, eventInitDict);
        this.#selected = !!selected;
    }

    /**
     * Returns the selected state.
     * @return true if the selected state was true, false otherwise.
     */
    get selected() {
        return this.#selected;
    }
}
