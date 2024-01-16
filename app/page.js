import person1 from '@/public/assets/images/person-1.png';
import Image from 'next/image';

const Home = () => {
  return (
    <main>
      <section className='flex gap-12 items-center'>
        <div className='w-1/2'>
          <h2 className='text-7xl border-l-4 border-red-500'>
            <span>Let&apos;s Make </span>
            <span className='block'>History</span>
          </h2>
          <p className='text-justify mt-4'>
            Every single moment is a blessing from Allah (SWT). He gave us a
            precious life and a lot of precious time to do something new. We can
            use this time to gather knowledge to make our future better.
          </p>
          <button className='btn'>Explore Now</button>
          <p className='mt-1'>Scroll down to explore more about us</p>
        </div>
        <div className='w-[35%]'>
          <Image src={person1} alt='person-1' />
        </div>
      </section>
    </main>
  );
};

export default Home;
