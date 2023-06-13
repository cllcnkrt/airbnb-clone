import { useRentModalStore } from "@/hooks";

import { Modal } from "..";

export const RentModal = () => {
    const rentModalStore = useRentModalStore();

    return <Modal 
          isOpen = {rentModalStore.isOpen}
          onClose = {rentModalStore.onClose}
          title="Airbnb your home"
          actionLabel="Submit"
          onSubmit={() => {}}
    />;
};
