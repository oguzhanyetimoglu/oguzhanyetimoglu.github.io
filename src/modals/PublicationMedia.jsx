import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const PlayIcon = () => (
  <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <polygon points="6 4 20 12 6 20 6 4" />
  </svg>
);

const ExpandIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

function MediaThumb({ item, onOpen, spanFull }) {
  const isVideo = item.type === "video";
  return (
    <figure
      className={`group relative rounded-lg overflow-hidden border border-white/[0.06] bg-black/40 transition-all hover:border-cyan-400/30 ${
        spanFull ? "sm:col-span-2" : ""
      }`}
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative block w-full aspect-video overflow-hidden cursor-zoom-in"
        aria-label={`Open ${item.label || (isVideo ? "video" : "image")}`}
      >
        {isVideo ? (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt || item.label || ""}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}

        {isVideo && (
          <span className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-cyan-300 text-[9px] font-mono uppercase tracking-wider border border-white/10">
            <PlayIcon />
            video
          </span>
        )}

        <span className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded bg-black/70 backdrop-blur-sm text-slate-300 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExpandIcon />
        </span>

        <span className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </button>

      {item.label && (
        <figcaption className="text-[10px] sm:text-xs text-slate-500 font-mono px-3 py-2 text-center border-t border-white/[0.04] bg-black/20">
          {item.label}
        </figcaption>
      )}
    </figure>
  );
}

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];
  const multi = items.length > 1;
  const isVideo = item.type === "video";

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        onClose();
      } else if (multi && e.key === "ArrowLeft") {
        e.stopImmediatePropagation();
        onPrev();
      } else if (multi && e.key === "ArrowRight") {
        e.stopImmediatePropagation();
        onNext();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose, onPrev, onNext, multi]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex flex-col p-4 bg-black/95 cursor-zoom-out"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
        aria-label="Close"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {multi && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Previous"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Next"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      <div
        className="flex-1 min-h-0 flex items-center justify-center w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <motion.video
            key={index}
            src={item.src}
            autoPlay
            loop
            controls
            playsInline
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="max-w-full max-h-full object-contain rounded-lg cursor-default"
          />
        ) : (
          <motion.img
            key={index}
            src={item.src}
            alt={item.alt || item.label || ""}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="max-w-full max-h-full object-contain rounded-lg cursor-default"
          />
        )}
      </div>

      {(item.label || multi) && (
        <div className="mt-3 flex justify-center" onClick={(e) => e.stopPropagation()}>
          <div className="px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm">
            <span className="text-xs font-mono text-slate-300">
              {item.label}
              {multi && (
                <span className="text-slate-500 ml-2">
                  {index + 1} / {items.length}
                </span>
              )}
            </span>
          </div>
        </div>
      )}
    </motion.div>,
    document.body,
  );
}

export default function PublicationMedia({ items, gridClass = "grid grid-cols-1 sm:grid-cols-2 gap-3" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const length = items.length;

  const handleClose = useCallback(() => setOpenIndex(null), []);
  const handlePrev = useCallback(() => {
    setOpenIndex((i) => (i - 1 + length) % length);
  }, [length]);
  const handleNext = useCallback(() => {
    setOpenIndex((i) => (i + 1) % length);
  }, [length]);

  return (
    <>
      <div className={gridClass}>
        {items.map((item, i) => (
          <MediaThumb
            key={item.src}
            item={item}
            onOpen={() => setOpenIndex(i)}
            spanFull={item.span === "full"}
          />
        ))}
      </div>
      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            items={items}
            index={openIndex}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
