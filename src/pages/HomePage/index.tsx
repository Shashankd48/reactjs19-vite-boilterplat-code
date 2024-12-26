import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/react';
import Page from '../../components/Page';
import MyCard from './MyCard';

const HomePage = () => {
  return (
    <Page title="Home page" description="Freecode camp blogs">
      <div className="flex gap-2 flex-col max-w-[500px] HomePage">
        <h2>HomePage</h2>

        <Button variant="bordered" color="primary">
          Hello there
        </Button>

        <Input
          name="name"
          placeholder="Mr. Shashank Dubey"
          label="What is your name ?"
        />

        <button className="dark:text-green-400 text-red-400 text-sm border border-neutral-300 p-1 rounded-lg">
          Click Me
        </button>

        <div>
          hello there how are your
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            in, incidunt ad quae ratione similique voluptatum nostrum id porro
            officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            tenetur praesentium nisi expedita cum veritatis corrupti vel quam
            maxime exercitationem.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            consequuntur ad et asperiores aspernatur eius deserunt, quaerat
            accusamus numquam ea.
          </p>
        </div>

        <MyCard />
      </div>
    </Page>
  );
};

export default HomePage;
