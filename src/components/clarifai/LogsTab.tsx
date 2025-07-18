import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function LogsTab() {
  return (
  <div className="relative bg-[#ececec] dark:bg-[#181818] rounded-lg shadow w-full text-white p-2 mt-2 h-[220px]">
  <h3 className="text-sm font-semibold text-black dark:text-white">
    Logs
  </h3>

  <ScrollArea className="pr-1 mt-2 space-y-2 h-[179px] overflow-y-auto border border-[#4D4B4B] bg-white dark:bg-[#26262675] rounded-lg">
    {/* Scrollable log content goes here */}
    <div className="px-4 py-2 text-sm text-black dark:text-white">
      {/* Empty for now */}
    </div>

    <ScrollBar orientation="vertical" />
  </ScrollArea>
</div>

  );
}   