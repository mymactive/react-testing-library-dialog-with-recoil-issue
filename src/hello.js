import { atom, useRecoilState } from "recoil";

// Implementation
const dialogAtom = atom({
  key: "dialog",
  default: false
});

export const useDialog = () => {
  const [isOpen, setIsOpen] = useRecoilState(dialogAtom);
  return { isOpen, setIsOpen };
};

export const Dialog = () => {
  const { isOpen } = useDialog();

  return (
    <dialog aria-label="test" open={isOpen}>
      Hello World
    </dialog>
  );
};
