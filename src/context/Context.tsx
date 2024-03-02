import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { randomQuestions } from "../helpers";
type ContextType = {
  TOTAL_QUESTION: number;
  score:number,
  loading:boolean,
  data:any[],
  finish:boolean,
  num:number
};
const TOTAL_QUESTION = 10
type ContextProps = {
    children:ReactNode
}
const Context = createContext<ContextType>({
  TOTAL_QUESTION: 10,
  score:0,
  loading:false,
  finish:false,
  data:[],
  num:0
});
type ApiData = {
    category:string,
    difficulty:string,
    incorrect_answers:string[],
    question:string
    correct_answer:string
    type:string
}
type DataState = ApiData & {
    answers:string[]
}
const ContextProvider = ({children}:ContextProps) => {
    const [score, setscore] = useState(0)
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState<DataState[]>([])
    const [finish, setfinish] = useState(false)
    const [num, setnum] = useState(0)
    useEffect(()=>{
        (async function(){
            setfinish(false)
            let {data} = await axios.get(`https://opentdb.com/api.php?amount=10`)
            setdata(data.results.map((result:ApiData)=>({
                ...result,
                answers:randomQuestions([...result.incorrect_answers, result.correct_answer])
            })));
            setloading(true)
        })()
    },[])
  return (
    <Context.Provider value={{TOTAL_QUESTION,score,loading,finish,data,num}}>
      {children}
    </Context.Provider>
  );
};

export {ContextProvider, Context};
