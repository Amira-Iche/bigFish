import React from 'react';
import Modal from "./Modal";
import {useModal} from "../context/ModalContext";
const Header = () => {

    const { modalContent, openModal, closeModal } = useModal();

    const contactModalContent = (
        <div>
            <p>If you have any questions, feel free to reach out to us!</p>
            <div className="mt-4">
                <p className="font-bold">Phone: <a href="tel:+1234567890" className="text-blue-600">+1 (234) 567-890</a></p>
                <p className="font-bold">Email: <a href="mailto:contact@bigfish.com" className="text-blue-600">contact@bigfish.com</a></p>
            </div>
        </div>
    );

  return <header className="py-5 flex items-center justify-between">
      <div className="h-14 w-14 bg-blue-900 flex items-center justify-center">
        <span className="text-white text-sm font-bold">BigFish</span>
      </div>
      <nav className="hidden md:flex space-x-10">
        <a href="#" className="text-gray-700 hover:text-blue-800 font-medium">
          Accueil
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-800 font-medium">
          Services
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-800 font-medium">
          À propos
        </a>
      </nav>
      <button className="bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800"
              onClick={() => openModal('Contact us', contactModalContent)}
      >
        Contact
      </button>

      <Modal isOpen={modalContent.isOpen} onClose={closeModal} title={"Contact"}>
          {modalContent.content}
      </Modal>
    </header>;
};
export default Header;