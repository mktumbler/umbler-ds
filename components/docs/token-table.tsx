interface TokenTableProps {
  columns: string[];
  rows: (string | number)[][];
}

export function TokenTable({ columns, rows }: TokenTableProps) {
  return (
    <div className="not-prose my-6 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-black/10 dark:border-white/10">
            {columns.map((c) => (
              <th
                key={c}
                className="text-left font-medium px-3 py-2 opacity-70"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-black/5 dark:border-white/5"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3 py-2.5 ${
                    j > 0 ? 'font-mono text-[0.8125rem] opacity-80' : ''
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
