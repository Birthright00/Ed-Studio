import React from 'react';

const ProtectedImage = ({ src, alt, className, ...props }) => {
  // Create a unique watermark overlay
  const WatermarkOverlay = () => (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(255, 255, 255, 0.03) 50px,
            rgba(255, 255, 255, 0.03) 100px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 30px,
            rgba(255, 255, 255, 0.02) 30px,
            rgba(255, 255, 255, 0.02) 60px
          )
        `,
        pointerEvents: 'none',
        zIndex: 10,
        mixBlendMode: 'overlay'
      }}
    />
  );

  // Generate random query parameter to make caching harder
  const obfuscatedSrc = `${src}?t=${Date.now()}&r=${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%' }}>
      <img
        src={obfuscatedSrc}
        alt={alt}
        className={className}
        {...props}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        onSelectStart={(e) => e.preventDefault()}
        style={{
          ...props.style,
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          WebkitUserDrag: 'none',
          KhtmlUserDrag: 'none',
          MozUserDrag: 'none',
          OUserDrag: 'none',
          userDrag: 'none',
          WebkitTouchCallout: 'none',
          WebkitTapHighlightColor: 'transparent'
        }}
      />
      <WatermarkOverlay />
      {/* Invisible overlay to prevent selection */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 5,
          background: 'transparent'
        }}
        onContextMenu={(e) => e.preventDefault()}
        onSelectStart={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default ProtectedImage;