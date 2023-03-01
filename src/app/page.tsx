import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className=" text-textPrimary-500 p-8 flex justify-between items-center">
        <Image
          src={'/images/home/sc.svg'}
          width={42}
          height={42}
          alt="logo de escrito SC"
        />

        <nav>
          <ul className="flex gap-10">
            <li>
              <Link href="">Inicio</Link>
            </li>
            <li>
              <Link href="">Sobre</Link>
            </li>
            <li>
              <Link href="">Projectos</Link>
            </li>
          </ul>
        </nav>

        <div>
          <ul className="flex gap-4">
            <li>
              <Link href="">
                <Image
                  src="/images/icons/social/Gmail.svg"
                  width={45}
                  height={45}
                  alt="Gmail icon"
                />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image
                  src="/images/icons/social/Instagram.svg"
                  width={45}
                  height={45}
                  alt="Instagram icon"
                />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image
                  src="/images/icons/social/Linkedin.svg"
                  width={45}
                  height={45}
                  alt="LinkedLn icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
