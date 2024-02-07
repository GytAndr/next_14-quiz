import { fetchAllQuestions } from '@/app/lib/data';
import Question from '@/app/ui/quiz/Question';

export async function generateStaticParams() {
    const questions = await fetchAllQuestions();
    return questions.map((question) => {
        question.id;
    });
}

export default function QuestionPage({ params }: { params: { id: number } }) {
    return <Question params={params} />;
}
