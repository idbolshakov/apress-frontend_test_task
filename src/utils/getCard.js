import {newList} from '../index.js';

export default function getCard(button) {
    const id = button.closest('.product').dataset.id;
    const data = newList.compare(+id);
    return data;
}

