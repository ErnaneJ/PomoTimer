export type Time = {
  min: number;
  sec: number;
  counting: Boolean;
}

export type task = {
  id: string;
  title: string;
  done: boolean,
}

export type tasksType = {
  todo: {
    title: string;
    tasks: task[];
  },
  done: {
    title: string;
    tasks: task[];
  },
}