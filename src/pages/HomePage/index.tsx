import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

const HomePage = () => {
   return (
      <>
         <title>Home</title>
         <meta name="description" content="Freecode camp blogs" />
         <div className="flex gap-2 flex-col max-w-[500px]">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur in, incidunt ad quae ratione similique voluptatum
                  nostrum id porro officiis.
               </p>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis tenetur praesentium nisi expedita cum veritatis
                  corrupti vel quam maxime exercitationem.
               </p>
            </div>
         </div>
      </>
   );
};

export default HomePage;
