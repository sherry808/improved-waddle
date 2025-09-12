"use client";

import BoxCarouselDemo from "@/components/common/BoxCarouselDemo";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="px-[38px] md:px-[103px] xl:px-[424px] pt-[168px] md:pt-[100px] xl:pt-[104px] pb-[58px] xl:pb-[55px] h-[549px] lg:h-[693px] bg-[#F0E5D6]">
      <BoxCarouselDemo />
    </div>
  );
}
