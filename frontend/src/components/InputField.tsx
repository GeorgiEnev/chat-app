type InputFieldProps = {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export default function ComponentName({label, type = "text", placeholder, value, onChange}: InputFieldProps) {
  return (
      <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-zinc-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-white"
      />
    </div>
  );
}