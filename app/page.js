import person1 from '@/public/assets/images/person-1.png';
import person2 from '@/public/assets/images/person-1.png';
import illustrator1 from '@/public/assets/images/illustrator-1.png';
import illustrator2 from '@/public/assets/images/illustrator-2.png';
import illustrator3 from '@/public/assets/images/illustrator-3.png';
import Image from 'next/image';

const Home = () => {
  return (
    <main>
      {/* banner section */}
      <section className='flex justify-between items-center'>
        <div className='w-1/2'>
          <h2 className='text-7xl pl-2 border-l-4 border-red-500'>
            <span>Let&apos;s Make </span>
            <span className='block text-yellow-500'>History</span>
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

      {/* mission in 2024 */}
      <section className='mt-16'>
        <h2 className='text-5xl text-center'>
          Our Mission in <span className='text-yellow-500'>2024</span>
        </h2>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <div className='bg-teal-400 p-4 rounded-xl'>
            <div className='w-1/2 mx-auto'>
              <Image src={illustrator1} alt='mission' />
            </div>
            <h3 className='text-2xl text-center'>Mission</h3>
            <p className='text-justify'>
              We are going to make the society better by doing various social
              works. A good society is necessary to live well
            </p>
          </div>
          <div className='bg-red-200 p-4 rounded-xl'>
            <div className='w-1/2 mx-auto'>
              <Image src={illustrator2} alt='Vision' />
            </div>
            <h3 className='text-2xl text-center'>Vision</h3>
            <p className='text-justify'>
              We want the society better for the next generation. The upcoming
              generation is in a great danger with the online platform. So we
              don&apos;t want our child to be bad mannered by the danger.
            </p>
          </div>
          <div className='bg-purple-400 p-4 rounded-xl'>
            <div className='w-1/2 mx-auto'>
              <Image src={illustrator3} alt='goals' />
            </div>
            <h3 className='text-2xl text-center'>Goals</h3>
            <p className='text-justify'>
              The expected goal of us is a great outcome from this foundation.
              We will work together and make the society better.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
