"use client";

import { Coordinates, NaverMap } from "@/types/map";
import Script from "next/script";
import { useEffect, useRef } from "react";

interface Props {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
}

// FIXME: 임시 상수
const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439];
const INITIAL_ZOOM = 16;

export default function Map({
  mapId = "map",
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
}: Props) {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.RIGHT_BOTTOM,
      },
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    const map = new naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;
  };

  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} className="w-full h-full" />
    </>
  );
}
