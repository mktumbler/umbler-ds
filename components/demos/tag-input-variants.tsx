'use client';

import { useState } from 'react';
import { TagInput } from '@/components/ui/tag-input';
import { Input, InputLabel, InputGroup, InputHint } from '@/components/ui/input';

export function TagInputDemo() {
  const [tags, setTags] = useState(['Next.js', 'TypeScript', 'Tailwind']);
  return (
    <div className="w-full max-w-sm">
      <InputGroup>
        <InputLabel htmlFor="techs">Tecnologias</InputLabel>
        <TagInput id="techs" value={tags} onChange={setTags} placeholder="Adicionar tag…" />
        <InputHint>Enter ou vírgula adiciona; Backspace remove a última.</InputHint>
      </InputGroup>
    </div>
  );
}

// Lado-a-lado com Input pra evidenciar a paridade de altura (md = 40px).
export function TagInputWithInputDemo() {
  const [tags, setTags] = useState(['design', 'system']);
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Input placeholder="Input md (40px)" />
      <TagInput value={tags} onChange={setTags} placeholder="TagInput md (40px na 1ª linha)" />
    </div>
  );
}

export function TagInputStatesDemo() {
  const [ok, setOk] = useState(['verificado']);
  const [err, setErr] = useState(['inválido']);
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <TagInput value={ok} onChange={setOk} state="success" tagVariant="success" />
      <TagInput value={err} onChange={setErr} state="error" tagVariant="error" />
    </div>
  );
}
