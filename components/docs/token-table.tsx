interface TokenTableProps {
  columns: string[];
  rows: (string | number)[][];
}

export function TokenTable({ columns, rows }: TokenTableProps) {
  return (
    <div className="not-prose my-6 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            {columns.map((c) => (
              <th
                key={c}
                className="text-left font-medium px-3 py-2 text-foreground-muted"
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
              className="border-b border-border"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3 py-2.5 ${
                    j > 0 ? 'font-mono text-body-sm text-foreground-secondary' : ''
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
