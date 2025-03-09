import React, { useEffect, useRef } from 'react';

const WeatherWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    script.id = 'weatherwidget-io-js';
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <div ref={widgetRef}>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/41d75n87d61/60619/"
        data-label_1="CHICAGO"
        data-label_2="WEATHER"
        data-theme="dark"
      >
        CHICAGO WEATHER
      </a>
    </div>
  );
};

export default WeatherWidget;