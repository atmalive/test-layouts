"use client"
import { Inter } from "next/font/google";
import {SearchBar} from "@/components/SearchBar/SearchBar";
import {CardList} from "@/components/CardList/CardList";
import {useState} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    const [isVacancy, setIsVacancy] = useState(true)


  return (

       <div className="flex flex-col gap-24 px-10 pt-2">
         <SearchBar isVacancy={isVacancy} setIsVacancy={setIsVacancy} />
         <CardList isVacancy={isVacancy}/>
       </div>
  );
}
