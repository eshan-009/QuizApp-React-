const Base_URL = import.meta.env.VITE_BASE_URL

export const authRoutes = {
    LOGIN : Base_URL + "/api/auth/login",
    SIGNUP : Base_URL + "/api/auth/signup"
}

export const quizRoutes = {
    GETTOPICS : Base_URL + "/api/quiz/getTopics",
    GETQUIZ : Base_URL + "/api/quiz/getQuiz",
    ADDQUESTION : Base_URL + "/api/quiz/addQuestion",
    ADDTOPIC : Base_URL + "/api/quiz/addTopic",
    SUBMITQUIZ : Base_URL + "/submitQuiz"
}