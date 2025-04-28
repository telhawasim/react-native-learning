import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isReady) {
      router.replace("/onboarding/onboarding");
    }
  }, [isReady]);

  return null;
};

export default index;
