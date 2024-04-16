import { act, renderHook } from "@testing-library/react";
import { useVisible } from ".";

describe("use visible custom hooks", () => {
  it("true is returned when the initial value is true", () => {
    const { result } = renderHook(() => useVisible(true));
    expect(result.current.value).toBe(true);
  });

  it("false is returned when the initial value is empty", () => {
    const { result } = renderHook(() => useVisible());
    expect(result.current.value).toBe(false);
  });

  it("true is returned when the open function is executed", () => {
    const { result } = renderHook(() => useVisible());
    act(() => result.current.open());
    expect(result.current.value).toBe(true);
  });

  it("false is returned when the close function is executed", () => {
    const { result } = renderHook(() => useVisible(true));
    act(() => result.current.close());
    expect(result.current.value).toBe(false);
  });

  it("toggles the value from false to true", () => {
    const { result } = renderHook(() => useVisible());
    act(() => result.current.toggle());
    expect(result.current.value).toBe(true);
  });

  it("toggles the value from true to false", () => {
    const { result } = renderHook(() => useVisible(true));
    act(() => result.current.toggle());
    expect(result.current.value).toBe(false);
  });
});
