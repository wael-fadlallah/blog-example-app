import { it, describe, expect, beforeEach, vi } from "vitest";
import App from "./App";
import TodoPanel from "./components/TodoPanel";
import { shallow } from "enzyme";
import { render, screen, userEvent, fireEvent } from "./utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

describe("Test App", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Check if the component is mounted", () => {
    expect(App).toBeTruthy();
  });

  it("Check if the TodoPanel has been rendered", () => {
    expect(wrapper.find(TodoPanel).length).toBe(1);
  });

  it("Check if the button has been rendered", () => {
    expect(wrapper.find("button").length).toBe(1);
  });

  it("Check if todo item is added", async () => {
    render(<App />);
    const input = screen.getByTestId("todo-input") as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: "Testing" },
    });
    userEvent.click(screen.getByRole("button"));
    expect(await screen.getByText(/Testing/i)).toBeInTheDocument();
  });
});
