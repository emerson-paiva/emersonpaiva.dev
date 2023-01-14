import Link from 'next/link';

export const Navbar = () => (
  <nav className='fixed top-0 left-0 w-screen h-16 border-b-slate-800/70 border-b-2 bg-gray-900 flex items-center justify-between p-4 px-12'>
    {/* TODO add icon */}
    <h1 className='font-semibold text-white'>
      <Link href='/'>Emerson Paiva</Link>
    </h1>
    <ul className='flex gap-4'>
      <li className='text-white'>
        <Link href='about-me'>About me</Link>
      </li>
      <li className='text-primary font-semibold border-b-2 border-b-purple-600 pb-1'>
        <Link href='posts'>Blog</Link>
      </li>
    </ul>
  </nav>
);
