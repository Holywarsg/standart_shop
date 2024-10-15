import Link from "next/link";
import Logo from "./logo";



export default function Header() {
  return (
    <header className="bg-[#3F4137] h-[60px] flex items-center justify-between border-b border-white/10 px-4">
      {/* Левый блок с логотипом и ссылками */}
      <div className="flex items-center space-x-16">
        <Logo />
        <Link href="/about" className="text-[#fdc073] hover:text-[#FDA83D]">
          О сайте
        </Link>
        <Link href="/newpost" className="text-[#fdc073] hover:text-[#FDA83D]">
          Добавить статью
        </Link>
        <Link href="/feedback" className="text-[#fdc073] hover:text-[#FDA83D]">
          Обратная связь
        </Link>
      </div>
      {/* Правый блок с ссылками на вход и регистрацию */}
      <div className="flex items-center space-x-4">
        <Link href="/enter" className="text-[#fdc073] hover:text-[#FDA83D]">
          Войти
        </Link>
        <Link
          href="/registration"
          className="text-[#fdc073] hover:text-[#FDA83D]"
        >
          Регистрация
        </Link>
      </div>
    </header>
  );
}
