import data from './mockDB';

export async function fetchAllQuestions() {
    try {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch questions.');
    }
}

export async function fetchQuestionById(id: string) {
    try {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data[+id]);
            }, 1000);
        });
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch question by id.');
    }
}
