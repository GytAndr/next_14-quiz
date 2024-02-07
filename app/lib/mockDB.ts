const data = [
    {
        id: '1',
        questionKey: 'goal',
        type: 'single',
        label: 'What is your primary goal?',
        options: [
            {
                type: 'text',
                label: 'Losing Weight',
                value: 'losing_weight',
            },
            {
                type: 'text',
                label: 'Improve specific body areas',
                value: 'improve_body_areas',
            },
            {
                type: 'text',
                label: 'Gain Muscle',
                value: 'gain_muscle',
            },
            {
                type: 'text',
                label: 'Develop Healthy Habits',
                value: 'develop_healthy_habits',
            },
        ],
    },
    {
        id: '2',
        questionKey: 'body_areas',
        type: 'multiple',
        label: 'Select body areas you would like to improve:',
        description: 'Select all that apply.',
        options: [
            {
                type: 'image_checkbox',
                label: 'Breast form',
                value: 'breast_form',
                image: {
                    src: '/quiz/breast_form.png',
                    width: 58,
                    height: 51,
                },
            },
            {
                type: 'image_checkbox',
                label: 'Arms',
                value: 'arms',
                image: { src: '/quiz/arms.png', width: 60, height: 55 },
            },
            {
                type: 'image_checkbox',
                label: 'Belly',
                value: 'belly',
                image: {
                    src: '/quiz/belly.png',
                    width: 58,
                    height: 55,
                },
            },
            {
                type: 'image_checkbox',
                label: 'Buttocks',
                value: 'buttocks',
                image: {
                    src: '/quiz/buttocks.png',
                    width: 55,
                    height: 55,
                },
            },
            {
                type: 'image_checkbox',
                label: 'Legs and Thighs',
                value: 'legs_and_thighs',
                image: {
                    src: '/quiz/legs_and_thighs.png',
                    width: 40,
                    height: 57,
                },
            },
        ],
        buttonText: 'Continue',
    },
    {
        id: '3',
        questionKey: 'pain',
        type: 'single',
        label: 'Do you suffer from back pain?',
        options: [
            {
                type: 'text',
                label: 'Yes',
                value: 'yes',
            },
            {
                type: 'text',
                label: 'No',
                value: 'no',
            },
        ],
    },
    {
        id: '4',
        questionKey: 'after_pregnancy',
        type: 'multiple',
        label: 'Concerns you have faced after pregnancy:',
        description: 'Select all that apply.',
        options: [
            {
                type: 'checkbox',
                label: 'Anxiety or depression',
                value: 'anxiety_or_depression',
            },
            {
                type: 'checkbox',
                label: 'Face skin problems',
                value: 'face_skin_problems',
            },
            {
                type: 'checkbox',
                label: 'Weak hair or hair loss',
                value: 'weak_hair_or_hair_loss',
            },
            {
                type: 'checkbox',
                label: 'Weak nails',
                value: 'weak_nails',
            },
            {
                type: 'checkbox',
                label: 'Loose skin or strech marks',
                value: 'loose_skin_or_strech_marks',
            },
        ],
        buttonText: 'Continue',
    },
    {
        id: '5',
        questionKey: 'exercise',
        type: 'single',
        label: 'How do you feel about excercising with your baby?',
        options: [
            {
                type: 'text',
                label: 'I would love to!',
                value: 'i_would_love_to',
            },
            {
                type: 'text',
                label: 'I would like to try',
                value: 'i_would_like_to_try',
            },
            {
                type: 'text',
                label: 'I am better on my own',
                value: 'i_am_better_on_my_own',
            },
        ],
    },
    {
        id: '6',
        questionKey: 'diastasis_recti',
        type: 'single',
        label: 'Do you suffer from DIASTASIS RECTI ?',
        description:
            '**_Diastasis recti_** is the partial or complete separation of the rectus abdominis, or “six-pack” muscles, which meet at the midline of your stomach.',
        options: [
            {
                type: 'image_text',
                image: {
                    src: '/quiz/diastasis_recti_yes.png',
                    width: 64,
                    height: 64,
                },
                label: 'Yes',
                value: 'yes',
            },
            {
                type: 'image_text',
                image: {
                    src: '/quiz/diastasis_recti_no.png',
                    width: 64,
                    height: 64,
                },
                label: 'No',
                value: 'no',
            },
            {
                type: 'text',
                label: 'Not sure',
                value: 'not_sure',
            },
        ],
    },
    {
        id: '7',
        questionKey: 'workout_type',
        type: 'multiple',
        label: 'Select type of workouts you like:',
        description: 'Select all that apply.',
        options: [
            {
                type: 'image_checkbox',
                image: {
                    src: '/quiz/flexibility.png',
                    width: 32,
                    height: 32,
                },
                label: 'Flexibility',
                value: 'flexibility',
            },
            {
                type: 'image_checkbox',
                image: {
                    src: '/quiz/aerobic.png',
                    width: 32,
                    height: 32,
                },
                label: 'Aerobic',
                value: 'aerobic',
            },
            {
                type: 'image_checkbox',
                image: {
                    src: '/quiz/strength.png',
                    width: 32,
                    height: 32,
                },
                label: 'Strength',
                value: 'strength',
            },
            {
                type: 'image_checkbox',
                image: {
                    src: '/quiz/swimming.png',
                    width: 32,
                    height: 32,
                },
                label: 'Others',
                value: 'others',
            },
            {
                type: 'image_checkbox',
                image: {
                    src: '/quiz/meditation.png',
                    width: 32,
                    height: 32,
                },
                label: 'I don’t like workouts',
                value: 'i_dont_like_workouts',
            },
        ],
        buttonText: 'Continue',
    },
    {
        id: '8',
        questionKey: 'breastfeeding',
        type: 'single',
        label: 'Are you currently breasfeeding?',
        options: [
            { type: 'text', label: 'Yes', value: 'yes' },
            { type: 'text', label: 'No', value: 'no' },
        ],
    },
    {
        id: '9',
        questionKey: 'advice',
        type: 'advice',
        label: 'Did you know?',
        description:
            'Low impact exercises are completely **safe** during breastfeeding and do not affect the milk supply or taste.',
        image: {
            src: '/general/breastfeeding.png',
            width: 396,
            height: 234,
        },
        description_bottom1:
            'Keep in mind that it only takes **15 minutes** of focused daily physical activity to give long-lasting results.',
        description_bottom2:
            'Let’s continue with creating your personalized meal plan portfolio!',
        buttonText: 'OK, lets do it!',
    },
    {
        id: '10',
        questionKey: 'food_sensitivity',
        type: 'multiple',
        label: 'What foods is your breasfed baby sensitive to?',
        description: 'Select all that apply.',
        options: [
            {
                type: 'image_checkbox',
                label: 'Lactose',
                value: 'lactose',
                image: {
                    src: '/quiz/lactose.png',
                    width: 24,
                    height: 32,
                },
            },
            {
                type: 'image_checkbox',
                label: 'Eggs',
                value: 'eggs',
                image: {
                    src: '/quiz/eggs.png',
                    width: 24,
                    height: 32,
                },
            },
            {
                type: 'image_checkbox',
                label: 'Nuts',
                value: 'nuts',
                image: {
                    src: '/quiz/nuts.png',
                    width: 24,
                    height: 32,
                },
            },
            {
                type: 'image_checkbox',
                label: 'Soy',
                value: 'soy',
                image: {
                    src: '/quiz/soy.png',
                    width: 24,
                    height: 32,
                },
            },
            {
                type: 'image_checkbox',
                label: 'Gluten',
                value: 'gluten',
                image: {
                    src: '/quiz/gluten.png',
                    width: 24,
                    height: 32,
                },
            },
            {
                type: 'image_checkbox',
                label: 'Fish',
                value: 'fish',
                image: {
                    src: '/quiz/fish.png',
                    width: 24,
                    height: 32,
                },
            },
            {
                type: 'image_checkbox',
                label: 'Shellfish',
                value: 'shellfish',
                image: {
                    src: '/quiz/shellfish.png',
                    width: 24,
                    height: 32,
                },
            },
            {
                type: 'text',
                label: 'None of the above',
                value: 'none_of_the_above',
            },
        ],
        buttonText: 'Continue',
    },
    {
        id: '11',
        questionKey: 'age',
        type: 'number',
        label: 'How young are you?',
        inputLabel: 'Age',
        buttonText: 'Next',
    },
];
export default data;
