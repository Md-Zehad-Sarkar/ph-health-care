import PHModal from "@/components/shared/PHModal/PHModal";
import { TextField } from "@mui/material";
import { Dispatch } from "react";
type TSpecialtiesModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtiesModal = ({ open, setOpen }: TSpecialtiesModalProps) => {
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Specialty">
      <TextField />
    </PHModal>
  );
};

export default SpecialtiesModal;
