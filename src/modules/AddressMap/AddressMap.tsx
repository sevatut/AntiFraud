import { useEffect, useRef } from "react";

interface AddressMapProps {
  address: string;
}

export function AddressMap({ address }: AddressMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;

    const ymaps = (window as any).ymaps;

    if (!ymaps) {
      console.error("Yandex Maps API не загружен");
      return;
    }

    ymaps.ready(async () => {
      if (cancelled || !mapRef.current) {
        return;
      }

      try {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.destroy();
          mapInstanceRef.current = null;
        }

        const result = await ymaps.geocode(address);

        if (cancelled) {
          return;
        }

        const firstGeoObject = result.geoObjects.get(0);

        if (!firstGeoObject) {
          console.error("Адрес не найден:", address);
          return;
        }

        const coordinates =
          firstGeoObject.geometry.getCoordinates();

        const map = new ymaps.Map(mapRef.current, {
          center: coordinates,
          zoom: 16,
        });

        const placemark = new ymaps.Placemark(
          coordinates,
          {
            balloonContent: address,
          }
        );

        map.geoObjects.add(placemark);

        mapInstanceRef.current = map;
      } catch (error) {
        if (!cancelled) {
          console.error("Ошибка при загрузке карты:", error);
        }
      }
    });

    return () => {
      cancelled = true;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [address]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "400px",
      }}
    />
  );
}
