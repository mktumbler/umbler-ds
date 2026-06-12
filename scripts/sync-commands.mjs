/**
 * sync-commands — espelha .claude-plugin/commands/ → .claude/commands/
 *
 * Fonte da verdade: .claude-plugin/commands/ (distribuída junto com o plugin)
 * Espelho local: .claude/commands/ (gitignored — gerado; permite usar /umbler-*
 * diretamente no repo do DS, sem precisar instalar o plugin)
 *
 * Roda automaticamente via build:artifacts (predev + build).
 */

import { cpSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC  = path.join(ROOT, '.claude-plugin', 'commands');
const DEST = path.join(ROOT, '.claude', 'commands');

mkdirSync(DEST, { recursive: true });
cpSync(SRC, DEST, { recursive: true, force: true });

console.log('✓ .claude/commands sincronizado com .claude-plugin/commands');
