import React from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  PaginationState,
} from "@tanstack/react-table";

function TableHOC<T extends Object>(
  columns: ColumnDef<T>[],
  data: T[],
  containerClassName: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const table = useReactTable({
      data,
      columns,
      state: {
        // sorting,
        // pagination,
      },
      // onSortingChange: setSorting,
      // onPaginationChange: setPagination,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading}</h2>
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : ""
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
}

export default TableHOC;
// import {
//   AiOutlineSortAscending,
//   AiOutlineSortDescending,
// } from "react-icons/ai";
// import {
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   getSortedRowModel,
//   getPaginationRowModel,
//   useReactTable,
//   SortingState,
//   PaginationState,
// } from "@tanstack/react-table";
// import { useState } from "react";

// function TableHOC<T extends Object>(
//   columns: ColumnDef<T>[],
//   data: T[],
//   containerClassname: string,
//   heading: string,
//   showPagination: boolean = false
// ) {
//   return function HOC() {
//     const [sorting, setSorting] = useState<SortingState>([]);
//     const [pagination, setPagination] = useState<PaginationState>({
//       pageIndex: 0,
//       pageSize: 6,
//     });

//     return (
//       <div className={containerClassname}>
//         <h2 className="heading">{heading}</h2>

//         <table className="table">
//           <thead>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <th key={header.id}>
//                     {header.isPlaceholder ? null : (
//                       <div
//                         className={
//                           header.column.getCanSort()
//                             ? "cursor-pointer select-none"
//                             : ""
//                         }
//                         onClick={header.column.getToggleSortingHandler()}
//                       >
//                         {flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                         {{
//                           asc: <AiOutlineSortAscending />,
//                           desc: <AiOutlineSortDescending />,
//                         }[header.column.getIsSorted() as string] ?? null}
//                       </div>
//                     )}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody>
//             {table.getRowModel().rows.map((row) => (
//               <tr key={row.id}>
//                 {row.getVisibleCells().map((cell) => (
//                   <td key={cell.id}>
//                     {flexRender(
//                       cell.column.columnDef.cell,
//                       cell.getContext()
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {showPagination && (
//           <div className="table-pagination">
//             <button
//               onClick={() => table.previousPage()}
//               disabled={!table.getCanPreviousPage()}
//             >
//               Prev
//             </button>
//             <span>
//               {`${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}
//             </span>
//             <button
//               onClick={() => table.nextPage()}
//               disabled={!table.getCanNextPage()}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   };
// }

// export default TableHOC;
