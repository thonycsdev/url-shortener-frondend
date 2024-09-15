import ModalComponent from "@/components/Modal/ModalComponent";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="w-screen h-screen grid text-3xl">
      <ToastContainer />
      <ModalComponent />
    </div>
  );
}
