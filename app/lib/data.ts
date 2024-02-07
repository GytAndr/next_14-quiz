import data from './mockDB';

export async function fetchAllQuestions() {
    try {
        // mock a delay to simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch questions.');
    }
}

export async function fetchQuestionById(id: number) {
    try {
        // mock a delay to simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return data[id];
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch question by id.');
    }
}
