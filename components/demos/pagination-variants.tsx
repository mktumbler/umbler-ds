'use client';

import { useState } from 'react';
import { Pagination } from '@/components/ui/pagination';

export function PaginationBasic() {
  const [page, setPage] = useState(1);
  return (
    <div className="flex flex-col items-center gap-3">
      <Pagination page={page} totalPages={10} onPageChange={setPage} />
      <p className="text-caption text-foreground-muted">Página atual: {page}</p>
    </div>
  );
}

export function PaginationMany() {
  const [page, setPage] = useState(7);
  return (
    <div className="flex flex-col items-center gap-3">
      <Pagination page={page} totalPages={42} onPageChange={setPage} />
      <p className="text-caption text-foreground-muted">Página {page} de 42 — observe as reticências dinâmicas.</p>
    </div>
  );
}

export function PaginationFew() {
  const [page, setPage] = useState(2);
  return (
    <div className="flex flex-col items-center gap-3">
      <Pagination page={page} totalPages={4} onPageChange={setPage} />
      <p className="text-caption text-foreground-muted">Poucas páginas: sem reticências.</p>
    </div>
  );
}
