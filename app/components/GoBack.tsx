"use client";

import { useRouter } from "next/navigation";
import Icon from "./Icon";
import { BiArrowBack } from "react-icons/bi";

interface GoBackProps {
  label?: string;
  isTransparent?: boolean;
}

const GoBack: React.FC<GoBackProps> = ({
  label,
  isTransparent = false,
}) => {
  const router = useRouter();
  return (
    <button
      className={`
        flex items-center gap-2
        text-white
        cursor-pointer
        hover:text-sky-200
      `}

      onClick={() => router.back()}
    >
      <Icon name={BiArrowBack} responsiveClass="text-3xl" />
      <span className="text-xl font-semibold">{label}</span>
    </button>
  );
}

export default GoBack;