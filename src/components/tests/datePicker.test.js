import DatePicker from "../datePicker";
import { render } from "@testing-library/react";

describe("datePicker", () => {
  test("should render datePicker with no errors", () => {
    const date = "2015-11-16T13:25:59Z";

    const result = render(<DatePicker date={date} />);

    const Check = result.getByRole("dialog");

    expect(Check).toBeInTheDocument();
  });

  test("datepicker can by empty", () => {
    const date = "";

    const result = render(<DatePicker date={date} />);

    const Check = result.getByRole("dialog");

    expect(Check).toBeInTheDocument();
  });
});
