import React, { createContext, useEffect, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext(null)

const ContextProvider = (props) => {

    const [sideBarExtend, setSideBarExtend] = useState(false)
    const [sideBarAbsolute, setSideBarAbsolute] = useState(false)
    const [showSidebarAbsolute, setShowSidebarAbsolute] = useState(false)

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const handleResize = () => {
        if (window.innerWidth < 1150) {
            setSideBarAbsolute(true);
        } else {
            setSideBarAbsolute(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord)
        }, 25 * index);
    }

    const newChat=()=>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if (prompt !== undefined) {
            response=await runChat(prompt)
            setRecentPrompt(prompt)
        }else{
            setPrevPrompts(prev => [...prev, input])
            setRecentPrompt(input)
            response=await runChat(input)
        }

        let responseArray = response.split("**");
        let newResponse="";
        for (let i = 0; i < responseArray.length; i++) {
            if (i % 2 === 1) {
                newResponse += `<b>${responseArray[i]}</b>`;
            } else {
                newResponse += responseArray[i];
            }
        }
        let newResponse2 = newResponse.split("*").join("");
        let newResponseArray = newResponse2.split(" ");
        let finalResponse = newResponseArray.map(word => {
            if (word.startsWith("##")) {
                return `<strong>${word.slice(2)}</strong>`;
            }
            return word;
        }).join(" ");
        let newResponseArray2 = finalResponse.split(" ")
        for (let i = 0; i < newResponseArray2.length; i++) {
            const nextWord = newResponseArray2[i]
            delayPara(i, nextWord + " ")
        }
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        sideBarExtend,
        setSideBarExtend,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent,
        newChat,
        sideBarAbsolute,
        setSideBarAbsolute,
        showSidebarAbsolute,
        setShowSidebarAbsolute
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider