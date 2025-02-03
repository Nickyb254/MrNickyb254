import {Card, CardFooter, Image, Button, CardHeader} from "@heroui/react";
import projectImage from '../assets/butcheryApp.png'

export default function Projects() {
  return (
    <div id="projects" className="flex col mb-[10%] p-6">
    <Card isFooterBlurred className="border-none  m-auto h-[17em] sm:h-[26em] w-[40em] sm: " radius="lg">
      <CardHeader>
      <p className="text-tiny text-white/80">E-commerce Store</p>
      </CardHeader>      
        <Image
          alt="Woman listing to music"
          className="object-cover "
          // height={100}
          src={projectImage}
          // width={200}
        />
      
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <a href="https://butchery-pos-backend.onrender.com" target="_blank" rel="noopener noreferrer"> 
        <Button
          className="text-tiny text-blue bg-white/20 hover:bg-white/70 rounded-full px-4 py-1 "
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Visit
        </Button>
      </a>
      </CardFooter>
    </Card>
    </div>
  );
}
