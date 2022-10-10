import "@testing-library/jest-dom/extend-expect";
import { act, screen, renderHook } from "@testing-library/react";
import { Dialog, useDialog } from "../hello";
import { RecoilRoot } from "recoil";

const DialogWrapper = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        {children}
        <Dialog />
      </RecoilRoot>
    </>
  );
};

test("should be not hidden when setState(true)", () => {
  const { result } = renderHook(() => useDialog(), { wrapper: DialogWrapper });

  act(() => {
    result.current.setIsOpen(true);
  });

  expect(screen.getByRole("dialog", { hidden: true })).toBeInTheDocument(); // Pass
  expect(screen.getByRole("dialog")).not.toHaveAttribute("open"); // Don't pass.
});
