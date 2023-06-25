const data = [
    {
        title: "resizable",
        feature: "sidebar",
    },
    {
        title: "sort",
        feature: "table",
    },
]

let todo: typeof data | undefined;

const fetchTodo = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  };

export const useTodo = ()=> {
    if (todo === undefined) {
        throw fetchTodo().then(data=> todo = data);
      }

    return {todo}
}