import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Footer =()=>{
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 px-2">
       <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
       <Image src="/IN - India.svg" alt="Kannada" height={32} width={40}
       className="mr-4 rounded-md"
       />
       Kannada
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
       <Image src="/gb-L.svg" alt="English" height={32} width={40}
       className="mr-4 rounded-md"
       />
       English
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
       <Image src="/IN - India.svg" alt="Hindi" height={32} width={40}
       className="mr-4 rounded-md"
       />
       Hindi
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
       <Image src="/IN - India.svg" alt="Malayalam" height={32} width={40}
       className="mr-4 rounded-md"
       />
       Malayalam
        </Button>
       </div>
        </footer>
    );
} ;