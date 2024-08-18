import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task";
import App from "../components/App";

test("displays the task text", () => {
  const task = { text: "text!", category: "category!" };
  render(<Task task={task} dataPassedBack={() => {}} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  const task = { text: "text!", category: "category!" };
  render(<Task task={task} dataPassedBack={() => {}} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);

  // Make sure to adjust the query to match the actual rendered tasks in the DOM.
  const taskElement = screen.getByText(/Buy rice/).closest('.task');
  const deleteButton = taskElement.querySelector("button");

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});
