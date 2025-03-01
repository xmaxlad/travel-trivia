export type Destination = {
    id : number,
    city : string,
    country : string,
    clues : string[],
    fun_fact : string[],
    trivia : string[],
}

export type User ={
    id : number,
    username : string,
    latest_score : number,
}

export type Question = {
    id : number,
    clues : string[],
    fun_fact : string[],
    trivia : string[],
    options : string[],
    answer : string,
}

export type AnswerVerdict = 'right' | 'wrong' | 'tbd'

export type Score = {
    total : number, 
    correct : number,
    wrong : number,
}