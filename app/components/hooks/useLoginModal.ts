import {create} from "zustand"

interface RegisterModalStore2{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    // onClose: () => void;
}


const useLoginModal = create <RegisterModalStore2>((set)=>({
    isOen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));
export default useLoginModal;


