import { ReactNode } from 'react';

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

const Page = ({
  title,
  description = 'React and vite project',
  children,
}: Props) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
    </>
  );
};

export default Page;
