import Image from "next/image";

export default function LogoHeader() {
  return (
    <header className="p-2">
      <Image
        src="./logo.svg"
        alt="동네냥이 로고"
        width={120}
        height={20}
        priority={true}
        style={{ height: "auto" }}
      />
    </header>
  );
}
