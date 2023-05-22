import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useLottie = (lottieCdnPath: any, loop = true, autoplay = true) => {
  const DEFAULT_OPTIONS = {
    loop: loop,
    autoplay: autoplay,
    animationData: '',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [lottieConfig, setLottieConfig] = useState(DEFAULT_OPTIONS);
  useEffect(() => {
    (async function () {
      if (lottieCdnPath?.animationData) {
        setLottieConfig({
          ...lottieConfig,
          animationData: lottieCdnPath?.animationData,
        });
      }

      if (!lottieCdnPath?.animationData) {
        try {
          const response = await (
            await fetch(lottieCdnPath, { method: 'GET' })
          ).text();
          const animationData = JSON.parse(response);
          setLottieConfig({ ...lottieConfig, animationData: animationData });
          // @ts-ignore:
          window[lottieCdnPath] = lottieConfig;
          lottieCdnPath.animationData = animationData;
        } catch (err: any) {
          toast.error(err);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lottieCdnPath]);

  return lottieConfig;
};

export default useLottie;
