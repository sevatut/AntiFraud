import AddForm from "../AddForm/AddForm";
import EditForm from "../EditForm/EditForm";

export default function PopUp({
  onClose,
  isEdit,
}: {
  onClose: () => void;
  isEdit: boolean;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl w-200">
        <button
          className="absolute w-5 h-5 top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
          <span className="text-3xl">✕</span>
        </button>

        {isEdit ? (
          <EditForm onClose={onClose}/>
        ) : (
          <AddForm onClose={onClose}/>
        )}
      </div>
    </div>
  );
}