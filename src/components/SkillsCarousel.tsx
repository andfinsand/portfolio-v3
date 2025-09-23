"use client"

import { useEffect, useRef, useState } from "react";
import SkillsCarouselImage from "./SkillsCarouselImage";

type SkillsCarouselProps = {
    isMobile: boolean;
};

export default function SkillsCarousel({ isMobile }: SkillsCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);

    const [items, setItems] = useState([
        { thumbnail: "/logo-html.webp", alt: "HTML logo" },
        { thumbnail: "/logo-css.webp", alt: "CSS logo" },
        { thumbnail: "/logo-javascript.webp", alt: "JavaScript logo" },
        { thumbnail: "/logo-react.webp", alt: "React logo" },
        { thumbnail: "/logo-nextjs.webp", alt: "Next.js logo" },
        { thumbnail: "/logo-python.webp", alt: "Python logo" },
        { thumbnail: "/logo-flask.webp", alt: "Flask logo" },
        // { thumbnail: "/logo-django.webp", alt: "Django logo" },
        // { thumbnail: "/logo-wordpress.webp", alt: "WordPress logo" },
        // { thumbnail: "/logo-figma.webp", alt: "Figma logo" },
        // { thumbnail: "/logo-gimp.webp", alt: "GIMP logo" },
    ]);

    // Skills carousel animation
    // NOTE: If actively adjusting the viewport width, the carousel will become jumpy. A browser refresh is required for a smooth effect.
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let itemFullWidth: number;
        let speed = 35;
        let startTime: number;
        let animationFrameId: number;
        let isResizing = false;

        const calculateItemWidth = () => {
            const firstItem = container.children[0] as HTMLElement;
            if (!firstItem) return 0;

            const itemWidth = firstItem.offsetWidth;
            const computedStyle = getComputedStyle(firstItem);
            const marginLeft = parseFloat(computedStyle.marginLeft) || 0;
            const marginRight = parseFloat(computedStyle.marginRight) || 0;

            return itemWidth + marginLeft + marginRight;
        };

        const resetAnimation = () => {
            const newItemWidth = calculateItemWidth();
            if (newItemWidth > 0) {
                itemFullWidth = newItemWidth;
                startTime = performance.now();
                setTranslateX(0);
                isResizing = false;
            }
        };

        // Initial setup
        resetAnimation();

        const animate = (timestamp: number) => {
            if (isResizing || !itemFullWidth) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }

            if (!startTime) startTime = timestamp;

            const progress = (timestamp - startTime) / 1000;
            let newTranslateX = progress * speed;

            if (newTranslateX >= itemFullWidth) {
                setItems(prevItems => {
                    const newItems = [...prevItems.slice(1), prevItems[0]];
                    return newItems;
                });
                newTranslateX = 0;
                startTime = timestamp;
            }

            setTranslateX(-newTranslateX);
            animationFrameId = requestAnimationFrame(animate);
        };

        // Debounced resize handler
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            isResizing = true;
            clearTimeout(resizeTimeout);

            resizeTimeout = setTimeout(() => {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
                resetAnimation();
                animationFrameId = requestAnimationFrame(animate);
            }, 150); // 150ms debounce to avoid too many recalculations
        };

        // Use ResizeObserver for more precise detection
        let resizeObserver: ResizeObserver | null = null;

        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(() => {
                handleResize();
            });
            resizeObserver.observe(container);
        } else {
            // Fallback to window resize
            window.addEventListener('resize', handleResize);
        }

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            if (resizeObserver) {
                resizeObserver.disconnect();
            } else {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []); // Empty dependency array since we handle everything internally

    if (isMobile) {
        return null;
    }

    return (
        <>
            <div className="carouselWrapper flex overflow-hidden w-full max-w-[1200px]">
                <div
                    ref={containerRef}
                    className="flex flex-row"
                    style={{ transform: `translateX(${translateX}px)`, willChange: 'transform' }}
                >
                    {items.map((item, index) => (
                        <SkillsCarouselImage
                            key={item.thumbnail}
                            thumbnail={item.thumbnail}
                            alt={item.alt}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
