"use client";

import { useRouter } from "next/navigation";
import ArrowLeftIcon from "../../ui/icons/angle/ArrowLeftIcon";

interface Props {
  showBackButton?: boolean;
  title?: string;
  children?: React.ReactNode;
}

export default function Header({
  showBackButton = true,
  title,
  children,
}: Props) {
  const router = useRouter();

  const goToBack = () => router.back();

  return (
    <header className="h-[48px] flex items-center px-3 py-2 gap-3 border">
      <div className="flex-1">
        {showBackButton && (
          <button onClick={goToBack}>
            <ArrowLeftIcon props={{ size: "22px" }} />
          </button>
        )}
      </div>
      <h1 className="flex-1 text-center font-bold">{title}</h1>
      <div className="flex flex-1 items-center justify-end gap-2">
        {children}
      </div>
    </header>
  );
}
