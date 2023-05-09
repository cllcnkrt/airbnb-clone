'use client';

import Image from 'next/image';

export const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      src="/images/placeholder.jpg"
      alt="avatar"
      width={30}
      height={30}
    />
  );
};
