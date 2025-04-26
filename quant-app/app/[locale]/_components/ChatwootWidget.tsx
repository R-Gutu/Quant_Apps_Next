'use client'

import { useEffect } from "react";

const ChatwootWidget = () => {
  useEffect(() => {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right',
      locale: 'en',
      type: 'standard',
    };

    (function(d, t) {
      const BASE_URL = 'https://app.chatwoot.com';
      const g = d.createElement(t);
      const s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + '/packs/js/sdk.js';
      g.async = true;
      g.defer = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK?.run({
          websiteToken: '4efLqrmUNGkbA5tGBcC9eWmg',
          baseUrl: BASE_URL,
        });
      };
    })(document, 'script');
  }, []);

  return null;
};

export default ChatwootWidget;