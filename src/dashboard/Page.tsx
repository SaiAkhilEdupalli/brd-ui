// import { AppSidebar } from "@/components/app-sidebar"
// import { ModeToggle } from "@/components/mode-toggle"
// import LandingPage from "@/components/LandingPage"
// import { Sensei } from "@/components/sensei"
// import { slugify } from "@/lib/slugify"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"
// import React, { useEffect } from "react"

// export default function Page() {
//   const [activePage, setActivePage] = React.useState("Test Sage");
  
//  useEffect(() => {
//   const pages = [
//     "ClarifAI",
//     "CodeSensei",
//     "CodeSpectre",
//     "CodeGenie",
//     "VelocityLens",
//     "DevXcelerateGenerator",
//     "DevXcelerateConverter",
//     "TestSage",
//     "Settings",
//   ];

//   const slug = location.pathname.split("/").pop()?.toLowerCase() || "";

//   const slugToName = Object.fromEntries(
//     pages.map((name) => [slugify(name), name])
//   );

//   setActivePage(slugToName[slug] || "");
// }, [location]);

//    const renderContent = () => {
//     switch (activePage) {
//       case "ClarifAI":
//         return <div>This is ClarifAI</div>
//       case "CodeSensei":
//         return <Sensei />
//       case "CodeSpectre":
//         return <div>This is Code Spectre</div>
//       case "CodeGenie":
//         return <div>This is Code Genie</div>
//       case "VelocityLens":
//         return <div>This is Velocity Lens</div>
//       case "DevXcelerateGenerator":
//         return <div>This is DevXcelerate Generator</div>
//       case "DevXcelerateConverter":
//         return <div>This is DevXcelerate Converter</div>
//       case "TestSage":
//         return <div>This is Test Sage</div>
//       default:
//         return <div>Select a project</div>
//     }
//   }
//   return (
//     <SidebarProvider>
//       <AppSidebar setActivePage={setActivePage} activePage={activePage} />
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
//           <div className="flex items-center gap-2 px-4 w-full">
//             <SidebarTrigger className="-ml-1" />
//             <Separator
//               orientation="vertical"
//               className="mr-2 data-[orientation=vertical]:h-4"
//             />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="#">
//                     {activePage}
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   {/* <BreadcrumbPage>Data Fetching</BreadcrumbPage> */}
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//             <div className="ms-auto"><ModeToggle /></div>
            
//           </div>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          
//           <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
//           {renderContent()}</div>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   )
// }
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import LandingPage from "@/components/LandingPage"
// import { Sensei } from "@/components/sensei"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import React, { useEffect } from "react"
//import { TabsDemo } from "./SpeakTest/speaktext"
import { slugify } from "@/lib/slugify"
import Clarifai from "@/components/clarifai/Clarifai"


export default function Page() {
  const [activePage, setActivePage] = React.useState("Test Sage");
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  


  useEffect(() => {

const pages = [
    "ClarifAI",
    "CodeSensei",
    "CodeSpectre",
    "CodeGenie",
    "VelocityLens",
    "DevXcelerateGenerator",
    "DevXcelerateConverter",
    "TestSage",
    "Settings",
  ];

  const slug = location.pathname.split("/").pop()?.toLowerCase() || "";

  const slugToName = Object.fromEntries(
    pages.map((name) => [slugify(name), name])
  );

  setActivePage(slugToName[slug] || "");
    
    const sidebarElement = document.querySelector('[data-collapsible]');
    if (!sidebarElement) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-collapsible') {
          const isCollapsed = sidebarElement.getAttribute('data-collapsible') === 'icon';
          setSidebarCollapsed(isCollapsed);
        }
      }
    });

    observer.observe(sidebarElement, { 
      attributes: true, 
      attributeFilter: ['data-collapsible'] 
    });

    return () => { observer.disconnect(); };
  }, [location]);

   const renderContent = () => {
    switch (activePage) {
      case "ClarifAI":
        return <Clarifai />
      case "CodeSensei":
        return <div />
      case "CodeSpectre":
        return <div>This is Code Spectre</div>
      case "CodeGenie":
        return <div>This is Code Genie</div>
      case "VelocityLens":
        return <div>This is Velocity Lens</div>
      case "DevXcelerate Generator":
        return <div>This is DevXcelerate Generator</div>
      case "DevXcelerate Converter":
        return <div>This is DevXcelerate Converter</div>
      case "TestSage":
        return <div/>
      default:
        return <div>Select a project</div>
    }
  }

const dynamicwidth = sidebarCollapsed ? 'w-[95.5vw]' : 'w-[80.1vw]';
 
  return (
    <SidebarProvider>
      <AppSidebar setActivePage={setActivePage} activePage={activePage} />
      <div style={{ height:"95.5vh", marginTop:"14px", borderRadius:"8px"}} className={`${dynamicwidth} transition-all duration-300 ease-in-out bg-white dark:bg-[#0D0D0D]`}>
        {/* <SidebarInset> */}
         <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
           
            <span>
              <g xmlns="http://www.w3.org/2000/svg" id="Group_116" data-name="Group 116" transform="translate(-354 -38)">
    <g id="Group_5" data-name="Group 5" transform="translate(336 -189)">
      <circle id="Ellipse_1" data-name="Ellipse 1" cx="19" cy="19" r="19" transform="translate(18 227)" fill="#383838"/>
    </g>
    <g id="menu-hamburger_curved" transform="translate(333 -3.709)">
      <path id="Path_24" data-name="Path 24" d="M32,67.709H48.378M32,61.854h9.453M32,56H48.378" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
  </g>
            </span>
            <p>{activePage}</p>
            <div className="ms-auto"><ModeToggle /></div>
            
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          
          <div  className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          {renderContent()}</div>
        </div>
      {/* </SidebarInset> */}
      </div>
      
    </SidebarProvider>
  )
}