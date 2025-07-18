 "use client"
import React from 'react'
import { getExecutionResult,useEditorStore } from '@/src/store/useCodeEditor'
import { motion } from "framer-motion";
import { Loader2, Play } from "lucide-react";
 

const RunBtn = () => {
const {runCode,language,isRunning}=useEditorStore()

const handleRun=async()=>{
   await runCode();
  const result =getExecutionResult();
  if(result){
     localStorage.setItem("last-execution", JSON.stringify(result));
  }
}
  return (
  <motion.button 
   onClick={handleRun}
      disabled={isRunning}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative inline-flex items-center gap-2.5 px-5 py-2.5
        disabled:cursor-not-allowed
        focus:outline-none
      `}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl opacity-100 transition-opacity group-hover:opacity-90" />

    <div className="relative flex items-center gap-2.5">
        {isRunning ? (
          <>
            <div className="relative">
              <Loader2 className="w-4 h-4 animate-spin text-white/70" />
              <div className="absolute inset-0 blur animate-pulse" />
            </div>
            <span className="text-sm font-medium text-white/90">Executing...</span>
          </>
        ) : (
          <>
            <div className="relative flex items-center justify-center w-4 h-4">
              <Play className="w-4 h-4 text-white/90 transition-transform group-hover:scale-110 group-hover:text-white" />
            </div>
            <span className="text-sm font-medium text-white/90 group-hover:text-white">
              Run Code
            </span>
          </>
        )}
      </div>  
    </motion.button>
  )
}

export default RunBtn
