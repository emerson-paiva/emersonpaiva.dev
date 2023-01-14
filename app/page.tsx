import Link from 'next/link';

// import { Poppins } from '@next/font/google';

// const poppins = Poppins({
//   variable: '--font-primary',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });

const HomePage = () => (
  <Link href='/posts' className='text-center text-primary font-bold'>
    Posts
  </Link>
);

export default HomePage;
