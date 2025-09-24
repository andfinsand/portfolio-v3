"use client"

import { useEffect, useRef, useState } from "react";
import SkillsCarouselImage from "./SkillsCarouselImage";

type SkillsCarouselProps = {
    isMobile: boolean;
};

export default function SkillsCarousel({ isMobile }: SkillsCarouselProps) {
    const topContainerRef = useRef<HTMLDivElement>(null);
    const bottomContainerRef = useRef<HTMLDivElement>(null);
    const [topTranslateX, setTopTranslateX] = useState(0);
    const [bottomTranslateX, setBottomTranslateX] = useState(0);

    // Top row - Frontend/Design (left to right)
    const [topItems, setTopItems] = useState([
        { thumbnail: "/logo-html.webp", alt: "HTML logo" },
        { thumbnail: "/logo-typescript.webp", alt: "TypeScript logo" },
        { thumbnail: "/logo-javascript.webp", alt: "JavaScript logo" },
        { thumbnail: "/logo-react.webp", alt: "React logo" },
        { thumbnail: "/logo-nextjs.webp", alt: "Next.js logo" },
        { thumbnail: "/logo-tailwindcss.webp", alt: "TailwindCSS logo" },
        { thumbnail: "/logo-figma.webp", alt: "Figma logo" },
        { thumbnail: "/logo-gimp.webp", alt: "GIMP logo" },
        { thumbnail: "/logo-css.webp", alt: "CSS logo" },
    ]);

    // Bottom row - Backend/Tools (right to left)
    const [bottomItems, setBottomItems] = useState([
        { thumbnail: "/logo-python.webp", alt: "Python logo" },
        { thumbnail: "/logo-django.webp", alt: "Django logo" },
        { thumbnail: "/logo-flask.webp", alt: "Flask logo" },
        { thumbnail: "/logo-mongodb.webp", alt: "MongoDB logo" },
        { thumbnail: "/logo-docker.webp", alt: "Docker logo" },
        { thumbnail: "/logo-git.webp", alt: "Git logo" },
        { thumbnail: "/logo-stripe.webp", alt: "Stripe logo" },
        { thumbnail: "/logo-sanity.webp", alt: "Sanity logo" },
        { thumbnail: "/logo-wordpress.webp", alt: "WordPress logo" },
    ]);

    // Skills carousel animation
    // NOTE: If actively adjusting the viewport width, the carousel will become jumpy. A browser refresh is required for a smooth effect.
    useEffect(() => {
        const topContainer = topContainerRef.current;
        const bottomContainer = bottomContainerRef.current;
        if (!topContainer || !bottomContainer) return;

        let topItemFullWidth: number;
        let bottomItemFullWidth: number;
        let speed = 25;
        let startTime: number;
        let animationFrameId: number;
        let isResizing = false;

        const calculateItemWidth = (container: HTMLElement) => {
            const firstItem = container.children[0] as HTMLElement;
            if (!firstItem) return 0;

            const itemWidth = firstItem.offsetWidth;
            const computedStyle = getComputedStyle(firstItem);
            const marginLeft = parseFloat(computedStyle.marginLeft) || 0;
            const marginRight = parseFloat(computedStyle.marginRight) || 0;

            return itemWidth + marginLeft + marginRight;
        };

        const resetAnimation = () => {
            const newTopItemWidth = calculateItemWidth(topContainer);
            const newBottomItemWidth = calculateItemWidth(bottomContainer);
            if (newTopItemWidth > 0 && newBottomItemWidth > 0) {
                topItemFullWidth = newTopItemWidth;
                bottomItemFullWidth = newBottomItemWidth;
                startTime = performance.now();
                setTopTranslateX(0);
                setBottomTranslateX(-bottomItemFullWidth);
                isResizing = false;
            }
        };

        // Initial setup
        resetAnimation();

        const animate = (timestamp: number) => {
            if (isResizing || !topItemFullWidth || !bottomItemFullWidth) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }

            if (!startTime) startTime = timestamp;

            const progress = (timestamp - startTime) / 1000;
            let newTopTranslateX = progress * speed;
            let newBottomTranslateX = progress * speed;

            // Top carousel (right to left)
            if (newTopTranslateX >= topItemFullWidth) {
                setTopItems(prevItems => {
                    const newItems = [...prevItems.slice(1), prevItems[0]];
                    return newItems;
                });
                newTopTranslateX = 0;
                startTime = timestamp;
            }

            // Bottom carousel (left to right)
            if (newBottomTranslateX >= bottomItemFullWidth) {
                setBottomItems(prevItems => {
                    const newItems = [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)];
                    return newItems;
                });
                newBottomTranslateX = 0;
                startTime = timestamp;
            }

            setTopTranslateX(-newTopTranslateX);
            setBottomTranslateX(-bottomItemFullWidth + newBottomTranslateX); // Keep bottom carousel offset by one item width
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
            }, 150);
        };

        let resizeObserver: ResizeObserver | null = null;

        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(() => {
                handleResize();
            });
            resizeObserver.observe(topContainer);
            resizeObserver.observe(bottomContainer);
        } else {
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
    }, []);

    if (isMobile) {
        return null;
    }

    return (
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {/* Top Carousel - Left to Right */}
            <div className="carouselWrapper flex overflow-hidden w-full max-w-[1200px]">
                <div
                    ref={topContainerRef}
                    className="flex flex-row"
                    style={{ transform: `translateX(${topTranslateX}px)`, willChange: 'transform' }}
                >
                    {topItems.map((item) => (
                        <SkillsCarouselImage
                            key={`top-${item.thumbnail}`}
                            thumbnail={item.thumbnail}
                            alt={item.alt}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Carousel - Right to Left */}
            <div className="carouselWrapper flex overflow-hidden w-full max-w-[1200px]">
                <div
                    ref={bottomContainerRef}
                    className="flex flex-row"
                    style={{ transform: `translateX(${bottomTranslateX}px)`, willChange: 'transform' }}
                >
                    {bottomItems.map((item) => (
                        <SkillsCarouselImage
                            key={`bottom-${item.thumbnail}`}
                            thumbnail={item.thumbnail}
                            alt={item.alt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
