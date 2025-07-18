'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
// import { mockRequirements } from './mockRequirements';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { UploadIcon } from '../icons/appIcons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
// import { Separator } from '@radix-ui/react-separator';
export interface Requirement {
  requirement_id: string;
  requirement_text: string;
  original_text: string;
  source_section: string;
  page_number: number;
  line_number: number;
}
export interface UploadTabProps {
  onUploadComplete: (data: Requirement[]) => void;
  isUploadComplete: boolean;
  extractedData: Requirement[];
  extractionStatus: 'idle' | 'success' | 'failed';
  goToClassifier: (classifiedData: any[]) => void;
  onExtractTriggered: () => void;
  isSidebarCollapsed?: boolean;
}


const UploadTab = ({
  onUploadComplete,
  isUploadComplete,
  extractedData,
  extractionStatus,
  goToClassifier,
  isSidebarCollapsed,
}: UploadTabProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [filePath, setFilePath] = useState('');
const [extractedPayload, setExtractedPayload] = useState<any>(null);
const [isLoading, setisLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files?.length) {
    setFile(e.target.files[0]);
    setFilePath(""); // Clear path if file is selected
    onUploadComplete([]);
  }
};

const dynamicMargin = isSidebarCollapsed ? 'ml-[500px]' : 'ml-[20px]';
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) {
      setFile(e.dataTransfer.files[0]);
      onUploadComplete([]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const removeFile = () => {
    setFile(null);
    fileInputRef.current!.value = '';
  };

  const formatSize = (bytes: number) => `${(bytes / 1024).toFixed(1)}Kb`;

  
const handleExtract = async () => {
  setIsExtracting(true);

  try {
    let response;

    if (file) {
      // Send FormData if file is selected
      const formData = new FormData();
      formData.append("file", file);

      response = await fetch("http://127.0.0.1:8000/extract", {
        method: "POST",
        body: formData,
      });
    } else if (filePath.trim()) {
      // Send JSON if path is entered
      response = await fetch("http://127.0.0.1:8000/extract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_path: filePath.trim(),
        }),
      });
    } else {
      throw new Error("No file or file path provided");
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server response:", errorText);
      throw new Error("Failed to extract requirements");
    }

    const data = await response.json();
     setExtractedPayload(data);
    // If your backend wraps response in "extracted_requirements"
    onUploadComplete(data.extracted_requirements || []);
    setShowSuccessMessage(true);
  } catch (err) {
    console.error("Extraction error:", err);
    onUploadComplete([]);
  } finally {
    setIsExtracting(false);
  }
};


const handleClassification = async () => {
  if (!extractedPayload) return;
 setisLoading(true);
  try {
    const response = await fetch("http://127.0.0.1:8000/classify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(extractedPayload),
    });

    if (!response.ok) throw new Error("Classification failed");

    const classifiedData = await response.json();
    goToClassifier(classifiedData);  // Pass to parent/classifier tab
  } catch (err) {
    console.error("Classification error:", err);
  } finally {
     setisLoading(false);
  }
};



  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => setShowSuccessMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  return (
    <>
      <div className="space-y-1 bg-[#ececec] dark:bg-[#181818] rounded-lg shadow w-full text-white p-2 h-[170px]">
        <h2 className="text-black dark:text-white text-[15px]- font-semibold">Enter Files Path</h2>
<div className="flex flex-row gap-3 mt-[10px]">
  {/* Drag-and-drop upload area */}


  {/* File path input */}
 
  
    <input
      id="filePathInput"
      type="text"
      value={filePath}
      onChange={(e) => {
        setFilePath(e.target.value);
        setFile(null); // Clear uploaded file if user types path
      }}
      placeholder="e.g., /path/to/requirements.csv"
      className="w-full px-2 py-2 text-sm mt-2.5 mb-2 border border-dashed border-gray-400 dark:border-gray-600 rounded-md text-black dark:text-white  dark:bg-[#2E2D2D]"
    />

</div>


        {file && (
          <>
          <div >
            <span className="text-black dark:text-white text-sm ">
              {file.name} <span>{formatSize(file.size)}</span>
            </span>
            <button onClick={removeFile}>
              <X className="w-4 h-4 text-black dark:text-white ml-3" />
            </button>
          </div>
         


          </>
        )}
       <Button
  onClick={handleExtract}
  disabled={(!file && !filePath) || isExtracting}
  className={" text-xs h-8 mt-6 px-3 rounded-md "}
>
  Extract Requirements
</Button>
   
      </div>

      {/* Fixed Card with Scrollable List & Footer */}
<div className="relative bg-[#ececec] dark:bg-[#181818] rounded-lg shadow w-full text-white p-2 mt-2 h-[220px] ">
  <h3 className={`text-sm font-semibold ${
    extractedData.length === 0 || extractionStatus === 'failed'
      ? 'text-gray-700 dark:text-gray-500'
      : 'text-black dark:text-white'
  }`}
>
  {(extractedData.length === 0 || extractionStatus === 'failed')
    ? 'Extracted'
    : `Extracted ${extractedData.length} candidate requirements text with respective IDs`}
  </h3>

  <ScrollArea className="pr-1 mt-2 space-y-2 h-[179px] overflow-y-hidden border border-[#4D4B4B] bg-white dark:bg-[#26262675] rounded-lg">
   {extractedData.map((req, index) => (
  <div key={index} className="rounded-md px-4 py-2 text-sm border-b border-gray-600 last:border-none">
    <span className=" text-black dark:text-[#F5EBFF]">
      {req.requirement_id}
    </span>
    <p className=" text-black dark:text-white">{req.requirement_text}</p>

    <div className="w-full space-y-2">
       <div className="mt-2 leading-relaxed text-black dark:text-white text-[13px] font-medium">
    <span className="inline-block align-top bg-[#73ABB5] text-black dark:text-white text-[11px] px-2 py-1 rounded-md mr-2">
      Text from BRD
    </span>
    <span className="inline">
      “{req.original_text}”
    </span>
  </div>
<div className="flex flex-wrap gap-2 items-center justify-end w-full text-[11px] text-white">
<span className="rounded-md bg-[#344A2F] px-3 py-1 min-w-[75px] ">
  Page # {req.page_number}
</span>  <span className="text-white">{'>'}</span>

 <span className=" rounded-md bg-[#495A72] px-3 py-1 min-w-[110px] text-[11px]">
  <Tooltip>
    <TooltipTrigger asChild>
      <p className="truncate ">Source Section:..<span className="text-[#00D7FF] ">view more</span></p>
    </TooltipTrigger>
    <TooltipContent>
      <p className="text-[10px] max-w-[200px] break-words">{req.source_section}</p>
    </TooltipContent>
  </Tooltip>
</span>

  <span className="text-white">{'>'}</span>
  <span className="bg-[#655142] px-3 py-1  min-w-[75px] rounded-md ">Line # {req.line_number}</span>
</div>


</div>
  </div>
))}

    <ScrollBar orientation="vertical"></ScrollBar>
  </ScrollArea>
</div>
  {/* Footer message + button */}
 {/* <Separator></Separator>  */}
<div className='border-t border-gray-700 mt-2'>
  
    <div className="flex rounded-lg justify-between items-center bg-[#f6f6f6] dark:bg-[#0D0D0D] h-[50px] py-4 " style={{ marginTop:"1px"}}>
    {isExtracting ? (
      
      <span className="flex flex-row gap-1 ml-[10px] items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23.242 23.242" className='animate-spin'>
          <g id="bx-loader" transform="translate(-16 -16)">
            <path d="M16,26.459h5.811v2.324H16Zm17.432,0h5.811v2.324H33.432Zm-6.973,6.973h2.324v5.811H26.459Zm0-17.432h2.324v5.811H26.459Zm-7.877,4.225,1.643-1.643,4.109,4.109-1.643,1.643ZM36.66,35.017,35.017,36.66l-4.109-4.109,1.643-1.643ZM22.691,30.908l1.643,1.643L20.225,36.66l-1.643-1.643Zm8.216-8.217,4.109-4.108,1.643,1.644-4.109,4.108Z" fill="#00c4ff" />
          </g>
        </svg>
        Generating Extraction...
      </span>
         
    ) : extractionStatus === 'failed' ? (
      <span className="text-red-400">❌ Extraction Failed!</span>
    ) : showSuccessMessage ? (
      <span className="flex items-center gap-1 ml-[10px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30.266 30.266">
          <path d="M30.266,15.133A15.133,15.133,0,1,1,15.133,0,15.133,15.133,0,0,1,30.266,15.133ZM22.756,9.4a1.419,1.419,0,0,0-2.043.042l-6.57,8.37-3.959-3.961a1.419,1.419,0,0,0-2.005,2.005l5.005,5.007a1.419,1.419,0,0,0,2.041-.038l7.551-9.439A1.419,1.419,0,0,0,22.758,9.4Z" fill="#24d304" />
        </svg>
        Extracted Successfully!
      </span>
     
    ) : <span></span>}
    
   <Button
  className={`${dynamicMargin} bg-black dark:bg-[#E5E5E5] text-white dark:text-black rounded-lg px-4 py-1`}
  disabled={
    isLoading || extractedData.length === 0 || extractionStatus === "failed"
  }
  onClick={handleClassification}
>
  {isLoading ? (
    <span className="flex items-center gap-2">
      <svg
        className="animate-spin h-4 w-4 text-white dark:text-black"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      Classifying...
    </span>
  ) : (
    "Classify"
  )}
</Button>


  </div>
</div>


    </>
  );
};

export default UploadTab;