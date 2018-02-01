// actions constants
export const ADD_TODO = '[Todos] ADD_TODO';

// action creators
export class AddTodo {
    readonly type = ADD_TODO;

    constructor(public payload: any) {}
}
