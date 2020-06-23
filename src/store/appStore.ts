import { observable, action } from "mobx";

export class ToDO {
  @observable text: string;
  id: number;
  @observable done: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = Date.now();
    this.done = false;
  }
}

class AppStore {
  @observable name: string = "";
  @observable todos: ToDO[] = [];

  @action setName(name: string): void {
    this.name = name;
  }

  @action addToDo(todo: ToDO) {
    this.todos.push(todo);
  }

  @action removeToDO(id: number) {
    const removeIdx = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(removeIdx, 1);
  }

  @action toodleToDo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
  }

  @action updateToDo(id: number, text: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.text = text;
    }
  }
}

export default new AppStore();
