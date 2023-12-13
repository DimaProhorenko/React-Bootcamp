function Pill({ children, bgClass = 'bg-red-500', textClass = 'text-red-50' }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 ${bgClass} ${textClass}`}
    >
      {children}
    </span>
  );
}
export default Pill;
