 "use client"
import { useEditorStore } from "@/src/store/useCodeEditor"
import { LANGUAGE_CONFIG } from "../_Monaco/Index";
import { useEffect, useState } from "react";
import { RotateCcwIcon, ShareIcon, TypeIcon } from "lucide-react";
import useMounted from "@/src/hook/useMounted";
import { motion } from "framer-motion";
const EditarPannel = () => {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const {language,theme,fontSize,editor,setFontSize,setEditor } = useEditorStore();
  const[VisibleCode,setVisibaleCode]=useState();
  const mounted=useMounted();

  useEffect(()=>{
    const savedCode=localStorage.getItem(`editor-code-${language}`)
    const newCode=savedCode || LANGUAGE_CONFIG[language].defaultCode;
   
    setVisibaleCode(newCode)
  },[language, ])
  return (
    <div>
      <h1>EditarPannel</h1>
      <div className="bg-gray-900 text-green-400 rounded p-4 overflow-auto">
        <pre>{VisibleCode}</pre>
      </div>
    </div>
  )
}

export default EditarPannel
