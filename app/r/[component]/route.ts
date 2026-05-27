import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

/**
 * Registry endpoint compatible with shadcn CLI.
 *
 * Usage from another project:
 *   npx shadcn@latest add https://your-domain.com/r/button
 *
 * Each component lives at: registry/<name>.json
 */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ component: string }> }
) {
  const { component } = await ctx.params;
  const safeName = component.replace(/[^a-z0-9-]/gi, '').toLowerCase();

  const filePath = path.join(
    process.cwd(),
    'registry',
    `${safeName}.json`
  );

  if (!existsSync(filePath)) {
    return NextResponse.json(
      { error: `Component "${safeName}" not found in registry.` },
      { status: 404 }
    );
  }

  try {
    const data = await readFile(filePath, 'utf-8');
    return NextResponse.json(JSON.parse(data), {
      headers: {
        'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to load component registry.' },
      { status: 500 }
    );
  }
}
