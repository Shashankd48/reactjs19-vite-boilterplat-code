import { useState } from 'react';
import { mockAsyncFunction } from '../../../../libs/utils';
import { Button, Input } from '@nextui-org/react';

// Using pending state from Actions
export default function Actions() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    // startTransition(async () => {
    //    const res = await mockAsyncFunction<{
    //       message: string;
    //       error: string;
    //    }>({ message: "Success!", error: "" }, 20000);
    //    console.log("log: res", res);
    //    if (res.error) {
    //       setError(error);
    //       return;
    //    }
    //    return;
    // });

    const res = await mockAsyncFunction<{
      message: string;
      error: string;
    }>({ message: 'Success!', error: '' }, 20000);
    console.log('log: res', res);
    if (res.error) {
      setError(error);
      return;
    }
    return;
  };

  return (
    <div>
      <h2>Actions Example</h2>
      <Input
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button
        onPress={handleSubmit}
        // disabled={isPending}
        // isLoading={isPending}
      >
        Update
      </Button>
      {error && <p>{error}</p>}
    </div>
  );
}
