import { Inter } from "next/font/google";
import {SearchBar} from "@/components/SearchBar/SearchBar";
import {CardList} from "@/components/CardList/CardList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

       <div className="px-10 pt-2">
         <SearchBar/>
         <CardList/>
       </div>
  );
}
