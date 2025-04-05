import { createContext, useState, ReactNode, useContext } from 'react';

type ModalContent = {
    title: string;
    content: ReactNode;
    isOpen: boolean;
};

type ModalContextType = {
    modalContent: ModalContent;
    openModal: (title: string, content: ReactNode) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalContent, setModalContent] = useState<ModalContent>({
        title: '',
        content: null,
        isOpen: false,
    });

    const openModal = (title: string, content: ReactNode) => {
        setModalContent({ title, content, isOpen: true });
    };

    const closeModal = () => {
        setModalContent(prev => ({ ...prev, isOpen: false }));
    };

    return (
        <ModalContext.Provider value={{ modalContent, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};