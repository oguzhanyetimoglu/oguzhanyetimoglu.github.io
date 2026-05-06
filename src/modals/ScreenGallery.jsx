import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

function Lightbox({ items, index, onClose, onPrev, onNext, onJump }) {
  const item = items[index];
  const multi = items.length > 1;
  const activeThumbRef = useRef(null);

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

  useEffect(() => {
    activeThumbRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index]);

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
        <motion.img
          key={index}
          src={item.src}
          alt={item.alt || item.label}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="max-w-full max-h-full object-contain rounded-lg cursor-default"
        />
      </div>

      {(item.label || multi) && (
        <div
          className="mt-3 flex flex-col items-center gap-3"
          onClick={(e) => e.stopPropagation()}
        >
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
          {multi && (
            <div className="w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-2 justify-center min-w-fit px-4 pb-1">
                {items.map((it, i) => (
                  <button
                    key={i}
                    ref={i === index ? activeThumbRef : null}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onJump(i);
                    }}
                    className={`shrink-0 w-11 h-16 rounded overflow-hidden border-2 transition-all ${
                      i === index
                        ? "border-cyan-400 opacity-100"
                        : "border-white/10 opacity-40 hover:opacity-80 hover:border-white/30"
                    }`}
                    aria-label={`Go to ${it.label || `image ${i + 1}`}`}
                  >
                    <img src={it.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>,
    document.body,
  );
}

export default function ScreenGallery({ items, gridClass, figureClass = "" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const length = items.length;

  const handleClose = useCallback(() => setOpenIndex(null), []);
  const handlePrev = useCallback(() => {
    setOpenIndex((i) => (i - 1 + length) % length);
  }, [length]);
  const handleNext = useCallback(() => {
    setOpenIndex((i) => (i + 1) % length);
  }, [length]);
  const handleJump = useCallback((i) => setOpenIndex(i), []);

  return (
    <>
      <div className={gridClass}>
        {items.map((item, i) => (
          <figure
            key={item.label}
            className={`rounded-lg overflow-hidden border border-white/[0.06] ${figureClass}`}
          >
            <img
              src={item.src}
              alt={item.alt || item.label}
              className="w-full h-auto block cursor-zoom-in"
              onClick={() => setOpenIndex(i)}
            />
            <figcaption className="text-[10px] sm:text-xs text-slate-500 font-mono px-2 py-2 text-center border-t border-white/[0.04]">
              {item.label}
            </figcaption>
          </figure>
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
            onJump={handleJump}
          />
        )}
      </AnimatePresence>
    </>
  );
}
