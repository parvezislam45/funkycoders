import React from "react";
import Button from "./Components/Button";
import Alert from "./Components/Alert";
import Modal from "./Components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Alert alert="warning">
        <div class="flex gap-10">
          <Button className="p-3" variant="filled" color="david">
            Open Modal
          </Button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
            <Button
              className="p-3"
              variant="filled"
              color="david"
              onClick={closeModal}
            >
              Close Modal
            </Button>
          </Modal>
          <Button className="p-3" variant="filled" color="david">
            <svg
              class="-ml-0.5 mr-2 h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            View more
          </Button>
          <Button
            variant="filled"
            color="david"
            data-dismiss-target="#alert-additional-content-2"
            aria-label="Close"
          >
            {" "}
            Dismiss
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default App;
