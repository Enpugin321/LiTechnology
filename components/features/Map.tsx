"use client";

import React, { useEffect, useRef, useState } from "react";
import { load } from "@2gis/mapgl";

// Обёртка карты
const MapWrapper = React.memo(
  () => (
    <div
      id="map-container"
      className="w-full h-full rounded-lg border border-[#868686] overflow-hidden"
    ></div>
  ),
  () => true
);
MapWrapper.displayName = "MapWrapper";

const Map = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // отключаем, чтобы не вызывалось повторно
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any;

    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [76.842675, 43.198304],
        zoom: 15,
        key: "0e2126b8-5f99-4017-9bff-a5f46c631742",
      });

      new mapglAPI.Marker(map, {
        coordinates: [76.842675, 43.198304],
      });
    });

    return () => {
      if (map) map.destroy();
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible && <MapWrapper />}
    </div>
  );
};

export default Map;
