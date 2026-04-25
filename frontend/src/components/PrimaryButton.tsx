type PrimaryButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
};

export default function PrimaryButton({
  children,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:opacity-90"
    >
      {children}
    </button>
  );
}
