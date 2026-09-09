"use client";

import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const [introDone, setIntroDone] = useState(false);
  const [introGone, setIntroGone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const seen = sessionStorage.getItem("gd-intro");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      setIntroDone(true);
      setIntroGone(true);
      window.dispatchEvent(new Event("gd:intro-done"));
      return;
    }
    timers.current = [
      setTimeout(() => sessionStorage.setItem("gd-intro", "1"), 500),
      setTimeout(() => {
        setIntroDone(true);
        window.dispatchEvent(new Event("gd:intro-done"));
      }, 2900),
      setTimeout(() => setIntroGone(true), 3500),
    ];
    return () => timers.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    document.body.style.overflow = introDone || introGone ? "" : "hidden";
  }, [introDone, introGone]);

  const skip = () => {
    sessionStorage.setItem("gd-intro", "1");
    setIntroDone(true);
    setIntroGone(true);
    window.dispatchEvent(new Event("gd:intro-done"));
  };

  if (introGone) return null;

  return (
    <div className={`intro ${introDone ? "out" : ""}`} aria-hidden={introDone}>
      <div className="intro-stage">
        <div className="intro-brand">
          <div className="intro-wreath" aria-hidden>
            <svg viewBox="0 0 100 100" width="92" height="92">
              <g fill="none" stroke="#d9b577" strokeWidth="1.6">
                <path d="M50 50 C42 34 42 20 50 8 C58 20 58 34 50 50Z" />
                <path d="M50 50 C58 34 58 20 50 8" opacity="0.5" />
                <path d="M50 50 C34 42 20 42 8 50 C20 58 34 58 50 50Z" />
                <path d="M50 50 C34 58 20 58 8 50" opacity="0.5" />
                <path d="M50 50 C42 66 42 80 50 92 C58 80 58 66 50 50Z" />
                <path d="M50 50 C58 66 58 80 50 92" opacity="0.5" />
                <path d="M50 50 C66 42 80 42 92 50 C80 58 66 58 50 50Z" />
                <path d="M50 50 C66 58 80 58 92 50" opacity="0.5" />
              </g>
              <circle cx="50" cy="50" r="14" fill="none" stroke="#d9b577" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="intro-name display">
            Guru&rsquo;s <em>Decor</em>
          </div>
          <div className="intro-tag">Window fashion · Ghana</div>
        </div>
      </div>
      <div className="curtain left" aria-hidden />
      <div className="curtain right" aria-hidden />
      <div className="curtain valance" aria-hidden />
      <button className="intro-skip" onClick={skip} tabIndex={introDone ? -1 : 0}>
        Skip intro
      </button>
    </div>
  );
}
