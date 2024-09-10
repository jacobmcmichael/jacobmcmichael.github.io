const React = require("react");

exports.onRenderBody = ({ setHeadComponents, setBodyAttributes }) => {
  setHeadComponents([
    <link
      key="google-fonts-preconnect"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="google-fonts-preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="google-fonts-stylesheet"
      href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&family=Unbounded:wght@200..900&display=swap"
      rel="stylesheet"
    />,
  ]);

  setBodyAttributes({
    "data-theme": "dark", // Keep your existing theme setting
  });
};
