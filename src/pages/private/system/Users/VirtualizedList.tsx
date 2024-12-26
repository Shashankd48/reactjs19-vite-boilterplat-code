import React, { useState, useEffect, useRef } from 'react';

type VirtualizedListProps = {
  items: string[]; // Array of items to display
  containerHeight: number; // Height of the viewport
  itemHeight: number; // Height of each item
};

const VirtualizedList: React.FC<VirtualizedListProps> = ({
  items,
  containerHeight,
  itemHeight,
}) => {
  const totalHeight = items.length * itemHeight; // Total scrollable height
  const buffer = 5; // Number of extra items to render above and below the viewport

  const [startIndex, setStartIndex] = useState(0); // First visible index
  const [endIndex, setEndIndex] = useState(
    Math.ceil(containerHeight / itemHeight)
  ); // Last visible index
  const containerRef = useRef<HTMLDivElement | null>(null); // Ref for the scrollable container

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = containerRef.current.scrollTop; // Current scroll position
      const visibleStartIndex = Math.floor(scrollTop / itemHeight);
      const visibleEndIndex =
        visibleStartIndex + Math.ceil(containerHeight / itemHeight);

      // Update visible range with a buffer
      setStartIndex(Math.max(0, visibleStartIndex - buffer));
      setEndIndex(Math.min(items.length, visibleEndIndex + buffer));
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => container?.removeEventListener('scroll', handleScroll);
  }, [buffer, containerHeight, itemHeight, items.length]);

  // Calculate the visible items based on the indices
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div
      ref={containerRef}
      style={{
        height: `${containerHeight}px`,
        overflowY: 'auto',
        position: 'relative',
        border: '1px solid #ddd',
      }}
    >
      {/* Outer div to provide the full scrollable area */}
      <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
        {/* Render only the visible items */}
        {visibleItems.map((item, index) => {
          const itemIndex = startIndex + index; // Calculate the real index of the item
          return (
            <div
              key={itemIndex}
              style={{
                position: 'absolute',
                top: `${itemIndex * itemHeight}px`,
                height: `${itemHeight}px`,
                width: '100%',
                borderBottom: '1px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '10px',
                boxSizing: 'border-box',
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualizedList;
