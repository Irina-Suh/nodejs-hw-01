import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const contactListBuffer = await fs.readFile(PATH_DB);
        return JSON.parse(contactListBuffer);
    } catch (error) {
        console.error('Помилка:', error.message);
        return [];
    }

};
