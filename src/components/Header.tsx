interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps){
  return (
    <header className="w-full flex items-center justify-center flex-col z-10 sm:py-5">
      <div className="w-full max-w-5xl border-b border-b-white-200 flex items-center justify-center">
        <h1 className="block font-semibold text-white text-4xl p-3">{title}</h1>
      </div>
    </header>
  );
}