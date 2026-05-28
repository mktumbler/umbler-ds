import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export type HeroBgVariant =
  | 'cloud'        // 29 — blob-figma6: distribuído horizontal
  | 'sweep'        // 30 — blob-figma7: grande diagonal cruzada
  | 'wedge'        // 31 — blob-figma8: cunhas geométricas
  | 'arc'          // 32 — blob-figma9: arco diagonal
  | 'cap'          // 33 — blob-figma10: concentrado no topo
  | 'arc-flip'     // 34 — figma9 flip vertical
  | 'sweep-invert' // 35 — figma7 180°
  | 'cap-mirror';  // 36 — figma10 espelho horizontal

export interface HeroBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  variant?: HeroBgVariant;
}

/* ── Blob wrapper ────────────────────────────────────────────────────────── */

interface BlobProps {
  width: number;   // usado só para calcular aspect-ratio
  height: number;
  children: React.ReactNode;
}

function Blob({ width, height, children }: BlobProps) {
  return (
    <div
      aria-hidden
      // apenas aspectRatio fica inline — geométrico por blob, sem equivalente direto em classe
      style={{ aspectRatio: `${width} / ${height}` }}
      className={cn(
        'absolute top-1/2 left-1/2 w-[200%]',
        '-translate-x-1/2 -translate-y-1/2',
        // blur responsivo via cqw (requer container-type no pai)
        '[filter:blur(clamp(10px,7cqw,80px))]',
        'will-change-transform pointer-events-none',
      )}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   SVGs — copiados fielmente dos HTMLs fonte (29–36-hero-glow.html)
   Estrutura de grupos preservada para mix-blend-mode funcionar igual ao original.
══════════════════════════════════════════════════════════════════════════ */

/** 29 — blob-figma6: isolation:isolate + mix-blend-mode:lighten aninhados */
function Blob29() {
  return (
    <Blob width={2120} height={994}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2290.8 1185.3" className="w-full h-full">
        <g style={{ isolation: 'isolate' }}>
          <g>
            <g style={{ mixBlendMode: 'lighten' }}>
              <path d="M1382.3,0C797.1,46.6,297.5,174.1,76.9,307.8c-117.2,180.7,166.5,74.6,166.5,74.6C583.3,167.9,1382.3,0,1382.3,0Z" fill="#001866"/>
              <path d="M1106.3,1070c484.8-331,905.4-639.6,1161-674,7.1,156.4-34.5,256.8-34.5,256.8-399.2,46.3-1126.5,417.2-1126.5,417.2Z" fill="#001866"/>
              <path d="M2330,521.9l-30.7-193.5-481.6,388.5,512.3-195.1h0Z" fill="#6b99ff"/>
              <path d="M116.2,1185.3l-99.6-192c142.7-133.3,481-408.6,1073.7-604,728-240,1358.3-338.3,1052-88C1159.9,474.2,308.2,968,116.2,1185.3Z" fill="#001866"/>
              <path d="M643.6,732.2L-92.4,1014.8l78.2,202.8,657.9-485.3h-.1Z" fill="#6b99ff"/>
            </g>
          </g>
        </g>
      </svg>
    </Blob>
  );
}

/** 30 — blob-figma7: grande diagonal cruzada */
function Blob30() {
  return (
    <Blob width={2120} height={1690}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2172 1731" fill="none" className="w-full h-full">
        <g style={{ mixBlendMode: 'lighten' }}>
          <path d="M25.5,315.7l-213.9,220.8C-14.1,687.6,239.5,998.8,947.8,1203.1c870,251,1735.2,443.5,1245.8,57.2C1026.2,1099.9,261.8,563.7,25.5,315.7Z" fill="#001866"/>
          <path d="M541.8,331.3c555.3,382.6,1391.4,625.7,1658.9,646.5,271.5-94.3,102.9-149.9,102.9-149.9-605.7,35-1761.7-496.6-1761.7-496.6Z" fill="#001866"/>
          <path d="M-152.7,393.2l707.6,442.4L-.9,288.1l-151.8,105.1Z" fill="#6b99ff"/>
          <path d="M526.3,1027.1c-41-18.6-77.2-37-107.6-55l107.6,55c375.6,170.4,1151.2,357,1562.1,388.5l-623.4,90.8-938.7-479.3Z" fill="#001866"/>
          <path d="M1651.3,1671.3l620.6-203.7-1236.3-334.9,615.6,538.6Z" fill="#6b99ff"/>
        </g>
      </svg>
    </Blob>
  );
}

/** 31 — blob-figma8: cunhas geométricas */
function Blob31() {
  return (
    <Blob width={2120} height={1477}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1861.7 1296.8" fill="none" className="w-full h-full">
        <g style={{ mixBlendMode: 'lighten' }}>
          <path d="M1571.5,10.5h319c-160.9,110.6-621.6,580.3-1222.5,748.7-270.4,75.8-611.1,105.7-706,108v-108C659.5,659.3,1349.3,196.9,1571.5,10.5Z" fill="#001866"/>
          <path d="M738,18.3h395s-186.5,196.1-635.5,322C227.1,416.1-46.5,415.8-46.5,415.8v-124.5c365.5,0,784.5-273,784.5-273Z" fill="#001866"/>
          <path d="M1878.5,428.8v399.5s-341,194.5-568.5,238.5c-275.8,53.3-1087.5,97-1087.5,97,206.4-64.5,1231.5-249.5,1656-735Z" fill="#001866"/>
          <path d="M1934,614.8l-460.5,352,460.5-177.5v-174.5Z" fill="#6b99ff"/>
          <path d="M1558.5,111l435.5-205.5h-395l-224.5,297.5,184-92Z" fill="#6b99ff"/>
          <path d="M-110,328.8v169.5s354.5-169.5,354.5-169.5H-110Z" fill="#6b99ff"/>
        </g>
      </svg>
    </Blob>
  );
}

/** 32 — blob-figma9: arco diagonal */
function Blob32() {
  return (
    <Blob width={2120} height={1638}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1834.9 1417.7" fill="none" className="w-full h-full">
        <g style={{ mixBlendMode: 'lighten' }}>
          <path d="M31.4,38.2l-213.4,178.2C-39.6,368.9,158.8,672.8,776.3,924c758.5,308.5,1518.2,563.9,1114.8,170C856.6,838.6,220.2,283.8,31.4,38.2Z" fill="#001866"/>
          <path d="M526.2,70.6c445,415.5,1080.2,789.7,1322,808.5v-269.5C1260.2,525.1,526.2,70.6,526.2,70.6Z" fill="#001866"/>
          <path d="M-90.8,317.6l289,146L-90.8,67.1v250.5Z" fill="#6b99ff"/>
          <path d="M523.2,812.5c-37-16.8-69.8-33.4-97.3-49.7l97.3,49.7c339.6,154.1,1041,322.8,1412.5,351.3l-563.7,82.1-848.8-433.4Z" fill="#001866"/>
          <path d="M1890.2,1389.1v-214.5l-686.5-138,686.5,352.5Z" fill="#6b99ff"/>
        </g>
      </svg>
    </Blob>
  );
}

/** 33 — blob-figma10: concentrado no topo */
function Blob33() {
  return (
    <Blob width={2120} height={1081}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2131 1086.8" fill="none" className="w-full h-full">
        <g style={{ mixBlendMode: 'lighten' }}>
          <path d="M1804.9,15.2h364.1c-183.7,126.3-709.5,662.3-1395.3,854.6-308.7,86.5-697.5,120.7-805.8,123.3v-123.3C763.9,755.6,1551.3,227.9,1804.9,15.2Z" fill="#001866"/>
          <path d="M853.5,24h450.8s-212.9,223.9-725.3,367.5C270.4,478.1-41.9,477.7-41.9,477.7v-142.1c417.2,0,895.4-311.6,895.4-311.6Z" fill="#001866"/>
          <path d="M1790,129.9l497.1-234.5h-450.9l-256.2,339.6,210-105Z" fill="#6b99ff"/>
          <path d="M-117.8,378.4v193.5s404.6-193.5,404.6-193.5H-117.8Z" fill="#6b99ff"/>
        </g>
      </svg>
    </Blob>
  );
}

/** 34 — figma9 flip vertical: scale(1,-1) */
function Blob34() {
  return (
    <Blob width={2120} height={1638}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1834.9 1417.7" fill="none" className="w-full h-full">
        <g style={{ mixBlendMode: 'lighten' }} transform="translate(0,1417.7) scale(1,-1)">
          <path d="M31.4,38.2l-213.4,178.2C-39.6,368.9,158.8,672.8,776.3,924c758.5,308.5,1518.2,563.9,1114.8,170C856.6,838.6,220.2,283.8,31.4,38.2Z" fill="#001866"/>
          <path d="M526.2,70.6c445,415.5,1080.2,789.7,1322,808.5v-269.5C1260.2,525.1,526.2,70.6,526.2,70.6Z" fill="#001866"/>
          <path d="M-90.8,317.6l289,146L-90.8,67.1v250.5Z" fill="#6b99ff"/>
          <path d="M523.2,812.5c-37-16.8-69.8-33.4-97.3-49.7l97.3,49.7c339.6,154.1,1041,322.8,1412.5,351.3l-563.7,82.1-848.8-433.4Z" fill="#001866"/>
          <path d="M1890.2,1389.1v-214.5l-686.5-138,686.5,352.5Z" fill="#6b99ff"/>
        </g>
      </svg>
    </Blob>
  );
}

/** 35 — figma7 180°: scale(-1,-1) */
function Blob35() {
  return (
    <Blob width={2120} height={1690}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2172 1731" fill="none" className="w-full h-full">
        <g style={{ mixBlendMode: 'lighten' }} transform="translate(2172,1731) scale(-1,-1)">
          <path d="M25.5,315.7l-213.9,220.8C-14.1,687.6,239.5,998.8,947.8,1203.1c870,251,1735.2,443.5,1245.8,57.2C1026.2,1099.9,261.8,563.7,25.5,315.7Z" fill="#001866"/>
          <path d="M541.8,331.3c555.3,382.6,1391.4,625.7,1658.9,646.5,271.5-94.3,102.9-149.9,102.9-149.9-605.7,35-1761.7-496.6-1761.7-496.6Z" fill="#001866"/>
          <path d="M-152.7,393.2l707.6,442.4L-.9,288.1l-151.8,105.1Z" fill="#6b99ff"/>
          <path d="M526.3,1027.1c-41-18.6-77.2-37-107.6-55l107.6,55c375.6,170.4,1151.2,357,1562.1,388.5l-623.4,90.8-938.7-479.3Z" fill="#001866"/>
          <path d="M1651.3,1671.3l620.6-203.7-1236.3-334.9,615.6,538.6Z" fill="#6b99ff"/>
        </g>
      </svg>
    </Blob>
  );
}

/** 36 — figma10 espelho horizontal: scale(-1,1) */
function Blob36() {
  return (
    <Blob width={2120} height={1081}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2131 1086.8" fill="none" className="w-full h-full">
        <g style={{ mixBlendMode: 'lighten' }} transform="translate(2131,0) scale(-1,1)">
          <path d="M1804.9,15.2h364.1c-183.7,126.3-709.5,662.3-1395.3,854.6-308.7,86.5-697.5,120.7-805.8,123.3v-123.3C763.9,755.6,1551.3,227.9,1804.9,15.2Z" fill="#001866"/>
          <path d="M853.5,24h450.8s-212.9,223.9-725.3,367.5C270.4,478.1-41.9,477.7-41.9,477.7v-142.1c417.2,0,895.4-311.6,895.4-311.6Z" fill="#001866"/>
          <path d="M1790,129.9l497.1-234.5h-450.9l-256.2,339.6,210-105Z" fill="#6b99ff"/>
          <path d="M-117.8,378.4v193.5s404.6-193.5,404.6-193.5H-117.8Z" fill="#6b99ff"/>
        </g>
      </svg>
    </Blob>
  );
}

/* ── Mapa variante → componente ─────────────────────────────────────────── */

const BLOB_MAP: Record<HeroBgVariant, React.ReactNode> = {
  cloud:         <Blob29 />,
  sweep:         <Blob30 />,
  wedge:         <Blob31 />,
  arc:           <Blob32 />,
  cap:           <Blob33 />,
  'arc-flip':    <Blob34 />,
  'sweep-invert':<Blob35 />,
  'cap-mirror':  <Blob36 />,
};

/* ── Componente público ─────────────────────────────────────────────────── */

export function HeroBackground({
  variant = 'sweep',
  children,
  className,
  ...props
}: HeroBackgroundProps) {
  return (
    <div
      className={cn('relative overflow-hidden bg-[rgb(3,6,20)] [container-type:inline-size]', className)}
      {...props}
    >
      {BLOB_MAP[variant]}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
