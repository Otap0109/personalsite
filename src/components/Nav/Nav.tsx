"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from "./Nav.module.css";
import { contentList } from "@/assets/lib/texts";

interface ContentItem {
  key: number;
  title: string;
  description: string;
  imageUrl: string;
  idname: string;
}

const Nav: React.FC = () => {
  const [visibleLinks, setVisibleLinks] = useState<ContentItem[]>(contentList);
  const [burgerLinks, setBurgerLinks] = useState<ContentItem[]>([]);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        const navWidth = navRef.current.offsetWidth;
        let currentWidth = 0;
        const visible: ContentItem[] = [];
        const burger: ContentItem[] = [];

        contentList.forEach((content) => {
          const linkWidth = estimateLinkWidth(content.title);
          if (currentWidth + linkWidth < navWidth - 100) { // 100px buffer for name
            visible.push(content);
            currentWidth += linkWidth;
          } else {
            burger.push(content);
          }
        });

        setVisibleLinks(visible);
        setBurgerLinks(burger);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const estimateLinkWidth = (text: string): number => {
    return text.length * 10 + 20; // 10px per character + 20px padding
  };

  return (
    <nav className={styles.nav} ref={navRef}>
      <h2 className={styles.name}>
        <Link href="/">
          <p>Лілія Прусік</p>
        </Link>
      </h2>
      <div>
        <ul className={styles.links}>
          {visibleLinks.map((content) => (
            <li key={content.key} className={styles.btn}>
              <Link href={`#${content.idname}`}>
                <p>{content.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {burgerLinks.length > 0 && (
        <div className={styles.burgerMenu}>
          <button 
            className={styles.burgerIcon} 
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
          >
            ☰
          </button>
          {isBurgerOpen && (
            <ul className={styles.burgerLinks}>
              {burgerLinks.map((content) => (
                <li key={content.key} className={styles.btn}>
                  <Link href={`#${content.idname}`}>
                    <p>{content.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;