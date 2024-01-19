export function createToDo(title, description) {
    const getTitle = () => {
      return title;
    };
    const setTitle = (newTitle) => {
      if (typeof newTitle !== "string") {
        throw new Error("title must be a string");
      }
      title = newTitle;
    };
  
    const getDescription = () => {
      return description;
    };
    const setDescription = (newDescription) => {
      if (typeof newDescription !== "string" || newDescription === "") {
        throw new Error("description must be a non empty string");
      }
      description = newDescription;
    };
  
    return { getTitle, setTitle, getDescription, setDescription };
  }

