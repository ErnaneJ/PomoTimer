import { filteredTasks } from '../../src/lib/helper';

describe('FilteredTasks', () => {
  test('validates if it is correctly filtering the tasks', () => {
    const tasks = [ 
      { id: "0", title: 'title to be changed', done: false, }, 
      { id: "1", title: 'title that will continue', done: true }
    ]
    const filtered_tasks = filteredTasks(tasks, "done_true", "done_false", "title changed");
    
    expect(filtered_tasks.todo.tasks.length).toBe(1);
    expect(filtered_tasks.done.tasks.length).toBe(1);

    expect(filtered_tasks.todo.title).toBe("done_true");
    expect(filtered_tasks.done.title).toBe("done_false");
    
    const task_with_id_0 = filtered_tasks.todo.tasks.find(t => t.id == "0");
    expect(task_with_id_0.title).toBe("title changed");
  });

  test('validates if it is correctly filtering the tasks', () => {
    const tasks = [ 
      { id: "123", title: 'title of the first test task', done: false, }, 
      { id: "456", title: 'title of the second test task', done: true }
    ]

    const filtered_tasks = filteredTasks(tasks);

    expect(filtered_tasks.todo.tasks.length).toBe(1);
    expect(filtered_tasks.done.tasks.length).toBe(1);

    expect(filtered_tasks.todo.title).toBe("To-do");
    expect(filtered_tasks.done.title).toBe("Done");
  });
});