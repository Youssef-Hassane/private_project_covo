import Image from 'next/image';
import facebookLogo from '@/assets/svg/facebookLogo_SVGrepo.svg';
import instagramLogo from '@/assets/svg/instagramOutlineLogo_SVGrepo.svg';
import linkedInLogo from '@/assets/svg/linkedinLogo_SVGrepo.svg'
import xLogo from '@/assets/svg/xLogo_SVGrepo.svg'
import gmailLogo from '@/assets/svg/gmailLogo_SVGrepo.svg'

export default function Contact(props) {
  const logoArray = [
    {
      src: facebookLogo,
      id: 1,
      altName: 'Facebook logo',
      href: 'https://facebook.com',
    },
    {
      src: instagramLogo,
      id: 2,
      altName: 'Instagram logo',
      href: 'https://instagram.com',
    },
    {
      src: linkedInLogo,
      id: 3,
      altName: 'linkedIn logo',
      href: 'https://linkedin.com',
    },
    {
      src: xLogo,
      id: 4,
      altName: 'X logo',
      href: 'https://x.com',
    },
    {
      src: gmailLogo,
      id: 5,
      altName: 'gmail logo',
      href: 'https://gmail.com',
    }
  ]

  return (
    <section className={ props.className }>
      <br/>
      <h3 className="text-xl font-semibold" >Contact Us</h3>
      {/* <div className='flex flex-row justify-between my-[2em] md:pr-[25%] lg:pr-[25%]'> */}
      <div className='flex flex-row justify-around my-[2em] lg:pr-[25%]'>
        {
          logoArray.map(logo => {
            return (
              <a key={logo.id} href={logo.href} target="active" >
                <Image
                  src={logo.src}
                  alt={logo.altName}
                  width={20}
                  height={20}
                  className='filter invert brightness-0 opacity-80'>
                </Image>
              </a>
            )
          })
        }
      </div>
    </section>
  );
}