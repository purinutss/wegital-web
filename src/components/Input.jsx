export default function Input({ type, placeholder, name, value, onChange, error }) {
  return (
    <>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-red-600">{error}</div>}
    </>
  );
}
