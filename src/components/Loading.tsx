import { Spinner } from '@nextui-org/react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type Props = {
  classaName?: string;
};
const Loading = ({ classaName }: Props) => {
  return (
    <div
      className={twMerge(
        clsx('h-[300px] w-full flex justify-center items-center', classaName)
      )}
    >
      <Spinner />
    </div>
  );
};

export default Loading;
