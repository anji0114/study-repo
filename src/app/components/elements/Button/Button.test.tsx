import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { userEvent } from "@testing-library/user-event";

describe("button components test", () => {
  it("rendered button", () => {
    render(<Button className="btn">ボタン</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByText("ボタン")).toBeInTheDocument();
    expect(button.classList.contains("btn")).toBe(true);
  });

  it("click button", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>ボタン</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("click disable button", async () => {
    render(
      <Button disabled className="btn">
        ボタン
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
