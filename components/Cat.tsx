
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

type CatState = 
  | 'IDLE' | 'WALKING' | 'CLIMBING' | 'FALLING' | 'DRAGGING' 
  | 'PLAYING_DEAD' | 'POUNCING' | 'WIGGLING' | 'SNIFFING' | 'STRETCHING';

interface CatProps {
  id: number;
  color: string;
  initialX: number;
  initialY: number;
}

const Cat: React.FC<CatProps> = ({ color, initialX, initialY }) => {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [state, setState] = useState<CatState>('FALLING');
  const [direction, setDirection] = useState<1 | -1>(1);
  const [frame, setFrame] = useState(0);
  const [isLegendary, setIsLegendary] = useState(Math.random() > 0.92);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isOnUI, setIsOnUI] = useState(false);
  
  const draggingRef = useRef(false);
  const requestRef = useRef<number | null>(null);
  const stateTimerRef = useRef<number | null>(null);
  const surfacesRef = useRef<DOMRect[]>([]);
  const targetSurfaceRef = useRef<DOMRect | null>(null);

  const SIZE = 90;
  const SPEED_BASE = (isLegendary ? 4.5 : 2.8) + Math.random() * 1.5;
  const [currentSpeed] = useState(SPEED_BASE);
  const GRAVITY = 7;

  const updateSurfaces = useCallback(() => {
    // Select elements likely to be "solid" or contain text
    const elements = document.querySelectorAll('header, footer, nav, section, h1, h2, h3, h4, h5, h6, p, li, a, button, img, .glass-card, [role="button"]');
    const rects: DOMRect[] = [];
    const sw = window.innerWidth;
    const sh = window.innerHeight;
    
    elements.forEach((el) => {
      if (el.classList.contains('cat-mascot') || el.closest('.cat-mascot')) return;
      
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      
      // Basic visibility checks
      if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) < 0.1) return;
      
      // Avoid giant background containers that aren't specific sections
      const isGiant = rect.width > sw * 0.95 && rect.height > sh * 0.95;
      
      // Elements that are visible enough to walk on:
      // 1. Have visible borders or backgrounds
      // 2. Contain text (for p, h1, etc.)
      // 3. Are functional UI elements (buttons, images)
      const hasVisualPresence = 
        style.backgroundColor !== 'rgba(0, 0, 0, 0)' || 
        style.borderStyle !== 'none' ||
        style.backdropFilter !== 'none' ||
        ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'A', 'BUTTON', 'IMG'].includes(el.tagName);

      if (!isGiant && hasVisualPresence && rect.width > 20 && rect.height > 10 && rect.top < sh && rect.bottom > 0) {
        rects.push(rect);
      }
    });
    surfacesRef.current = rects;
  }, []);

  useEffect(() => {
    updateSurfaces();
    window.addEventListener('resize', updateSurfaces);
    window.addEventListener('scroll', updateSurfaces);
    const interval = setInterval(updateSurfaces, 2000);
    return () => {
      window.removeEventListener('resize', updateSurfaces);
      window.removeEventListener('scroll', updateSurfaces);
      clearInterval(interval);
    };
  }, [updateSurfaces]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % 24);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const updatePhysics = useCallback(() => {
    if (draggingRef.current) return;

    setPos((prev) => {
      let { x, y } = prev;
      const sw = window.innerWidth;
      const sh = window.innerHeight;
      const screenFloor = sh - SIZE;
      
      let currentlyOnUI = false;

      // Surface detection: checking if the cat's bottom is roughly at an element's top
      for (const rect of surfacesRef.current) {
        const isHorizontallyOver = (x + SIZE * 0.3 < rect.right) && (x + SIZE * 0.7 > rect.left);
        if (isHorizontallyOver) {
          const surfaceTop = rect.top - SIZE + 5;
          // Small tolerance for walking
          if (Math.abs(y - surfaceTop) < 15) {
            currentlyOnUI = true;
            y = surfaceTop; // Snap to surface
            break;
          }
        }
      }

      setIsOnUI(currentlyOnUI);

      if (state === 'FALLING') {
        let landedOnSurface = false;
        let surfaceTopVal = screenFloor;

        for (const rect of surfacesRef.current) {
          const sTop = rect.top - SIZE + 5;
          const isHorizontallyOver = (x + SIZE * 0.3 < rect.right) && (x + SIZE * 0.7 > rect.left);
          // If falling and passing through a surface
          if (y + GRAVITY >= sTop && y < sTop && isHorizontallyOver) {
            surfaceTopVal = sTop;
            landedOnSurface = true;
            break;
          }
        }

        if (landedOnSurface || y + GRAVITY >= screenFloor) {
          y = landedOnSurface ? surfaceTopVal : screenFloor;
          setState('WALKING');
        } else {
          y += GRAVITY;
        }
      } else if (state === 'WALKING' || state === 'POUNCING') {
        // Strict adherence to UI platforms unless on the very bottom floor
        const isOnFloor = Math.abs(y - screenFloor) < 5;
        if (!currentlyOnUI && !isOnFloor) {
          setState('FALLING');
          return prev;
        }

        const moveSpeed = state === 'POUNCING' ? currentSpeed * 2.8 : currentSpeed;
        const nextX = x + moveSpeed * direction;
        
        let hitWall = false;
        let wallRect: DOMRect | null = null;
        for (const rect of surfacesRef.current) {
          const isAtSameHeight = y + SIZE > rect.top + 5 && y < rect.bottom - 5;
          if (isAtSameHeight) {
            if (direction === 1 && nextX + SIZE >= rect.left && x + SIZE <= rect.left + 5) {
              hitWall = true;
              wallRect = rect;
              x = rect.left - SIZE;
            } else if (direction === -1 && nextX <= rect.right && x >= rect.right - 5) {
              hitWall = true;
              wallRect = rect;
              x = rect.right;
            }
          }
        }

        if (!hitWall && (nextX >= sw - SIZE || nextX <= 0)) {
          hitWall = true;
          x = nextX <= 0 ? 0 : sw - SIZE;
        }

        if (hitWall) {
          if (Math.random() < 0.7 && wallRect) {
            setState('CLIMBING');
            targetSurfaceRef.current = wallRect;
          } else {
            setDirection(direction === -1 ? 1 : -1);
          }
        } else {
          x = nextX;
          // Platform safety check for next step
          let willStayOnElement = false;
          if (isOnFloor) {
            willStayOnElement = true;
          } else {
            for (const rect of surfacesRef.current) {
              const isOver = (x + SIZE * 0.3 < rect.right) && (x + SIZE * 0.7 > rect.left);
              if (isOver && Math.abs(y - (rect.top - SIZE + 5)) < 15) {
                willStayOnElement = true;
                break;
              }
            }
          }
          if (!willStayOnElement) setState('FALLING');
        }
      } else if (state === 'CLIMBING') {
        y -= currentSpeed * 0.8;
        if (targetSurfaceRef.current) {
          const rect = targetSurfaceRef.current;
          x = direction === 1 ? rect.left - SIZE : rect.right;
          if (y <= rect.top - SIZE + 5) {
            y = rect.top - SIZE + 5;
            setState('WALKING');
            targetSurfaceRef.current = null;
          }
        } else if (y <= 0) {
          y = 0;
          setState('FALLING');
        }
      } else {
        // Static states check
        const isOnFloor = Math.abs(y - screenFloor) < 5;
        if (!currentlyOnUI && !isOnFloor) {
          setState('FALLING');
        }
      }

      return { x, y };
    });
    requestRef.current = requestAnimationFrame(updatePhysics);
  }, [state, direction, currentSpeed]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updatePhysics);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [updatePhysics]);

  const changeStateRandomly = useCallback(() => {
    const activeLockStates: CatState[] = ['CLIMBING', 'POUNCING', 'WIGGLING', 'DRAGGING'];
    if (draggingRef.current || activeLockStates.includes(state)) return;

    const allPossible: CatState[] = [
      'WALKING', 'WALKING', 'WALKING', 'WALKING', 'WALKING', 
      'WALKING', 'WALKING', 'WALKING', 'WALKING', 'WALKING',
      'POUNCING', 'POUNCING', 'POUNCING',
      'SNIFFING', 'STRETCHING', 'WIGGLING', 'PLAYING_DEAD'
    ];
    
    const next = allPossible[Math.floor(Math.random() * allPossible.length)];
    setState(next);
    
    if (next === 'WALKING' || next === 'POUNCING') setDirection(Math.random() > 0.5 ? 1 : -1);
    
    const transitionTime = 
      next === 'SNIFFING' ? 1000 :
      next === 'STRETCHING' ? 1200 :
      next === 'WIGGLING' ? 800 :
      next === 'PLAYING_DEAD' ? 1500 :
      next === 'POUNCING' ? 1000 : 0;

    if (transitionTime > 0) {
      setTimeout(() => {
        if (!draggingRef.current) setState('WALKING');
      }, transitionTime);
      stateTimerRef.current = window.setTimeout(changeStateRandomly, transitionTime + 500);
    } else {
      const walkDuration = 6000 + Math.random() * 8000;
      stateTimerRef.current = window.setTimeout(changeStateRandomly, walkDuration);
    }
  }, [state]);

  useEffect(() => {
    stateTimerRef.current = window.setTimeout(changeStateRandomly, 1000);
    return () => { if (stateTimerRef.current) clearTimeout(stateTimerRef.current); };
  }, [changeStateRandomly]);

  const handleInteraction = () => {
    if (state === 'DRAGGING') return;

    setIsZoomed(true);
    setTimeout(() => setIsZoomed(false), 800);

    const forcedStates: CatState[] = [
      'POUNCING', 'SNIFFING', 'STRETCHING', 
      'WIGGLING', 'PLAYING_DEAD', 'WALKING'
    ];
    
    const next = forcedStates[Math.floor(Math.random() * forcedStates.length)];
    setState(next);
    setDirection(Math.random() > 0.5 ? 1 : -1);
    
    if (stateTimerRef.current) clearTimeout(stateTimerRef.current);

    const transitionTime = 
      next === 'SNIFFING' ? 1200 :
      next === 'STRETCHING' ? 1400 :
      next === 'WIGGLING' ? 1000 :
      next === 'PLAYING_DEAD' ? 2000 :
      next === 'POUNCING' ? 1500 : 0;

    if (transitionTime > 0) {
      setTimeout(() => {
        if (!draggingRef.current) setState('WALKING');
      }, transitionTime);
      stateTimerRef.current = window.setTimeout(changeStateRandomly, transitionTime + 1000);
    } else {
      stateTimerRef.current = window.setTimeout(changeStateRandomly, 5000 + Math.random() * 4000);
    }
  };

  const catSVG = useMemo(() => {
    const isPlayingDead = state === 'PLAYING_DEAD';
    const isClimbing = state === 'CLIMBING';
    const isWiggling = state === 'WIGGLING';
    const isStretching = state === 'STRETCHING';
    const isSniffing = state === 'SNIFFING';
    const isPouncing = state === 'POUNCING';
    const isWalking = state === 'WALKING';

    const t = (frame / 24) * Math.PI * 2;
    const tailWiggle = Math.sin(t * 1.5) * (isWiggling ? 35 : isWalking ? 10 : 5);
    const bodyScaleX = isStretching ? 1.45 : isWiggling ? 0.96 : 1;
    const bodyScaleY = isStretching ? 0.75 : isWiggling ? 1.04 : 1;
    const sniffOffset = isSniffing ? Math.sin(t * 4) * 3 : 0;

    const renderLeg = (startX: number, startY: number, phase: number, isFar: boolean = false) => {
      let endX = startX - 5;
      let endY = startY + 18;
      let toeBeanVisible = false;

      if (isWalking || isPouncing) {
        const speedMult = isPouncing ? 3.5 : 1.8;
        const cycle = Math.sin(t * speedMult + phase);
        endX += cycle * 10;
        endY -= Math.max(0, Math.cos(t * speedMult + phase) * 8);
        toeBeanVisible = cycle < -0.5;
      } else if (isClimbing) {
        const cycle = Math.sin(t * 2.5 + phase);
        endY -= 12 + cycle * 8;
        endX += cycle * 4;
        toeBeanVisible = true;
      } else if (isStretching) {
        endX += 15;
        endY += 4;
      }

      return (
        <g opacity={isFar ? 0.6 : 1}>
          <path d={`M${startX} ${startY} L${endX} ${endY}`} stroke={isFar ? '#00000033' : 'none'} strokeWidth="11" strokeLinecap="round" className="transition-all duration-75" />
          <path d={`M${startX} ${startY} L${endX} ${endY}`} stroke={color} strokeWidth="9" strokeLinecap="round" className="transition-all duration-75" />
          {toeBeanVisible && <circle cx={endX} cy={endY} r="3" fill="#FFB6C1" opacity="0.6" />}
        </g>
      );
    };

    const getBodyRotation = () => {
      if (isClimbing) return 'rotate(-90deg)';
      if (isPlayingDead) return 'rotate(180deg)';
      return 'rotate(0deg)';
    };

    return (
      <svg viewBox="0 0 100 100" className={`w-full h-full pointer-events-none drop-shadow-2xl transition-transform duration-300 ${isWiggling ? 'vibrate' : ''}`}>
        <g transform={`scale(${direction}, 1) translate(${direction === -1 ? -100 : 0}, 0)`}>
          <g className="transition-transform duration-500 origin-center" style={{ transform: getBodyRotation() }}>
            <path d={`M30 75 Q8 ${60 + tailWiggle} 12 ${35 + tailWiggle}`} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" className="transition-all duration-300" />
            {renderLeg(45, 75, Math.PI, true)}
            {renderLeg(65, 75, 0, true)}
            <ellipse cx="55" cy="72" rx={28 * bodyScaleX} ry={20 * bodyScaleY} fill={color} className="transition-all duration-500" />
            {renderLeg(40, 78, 0, false)}
            {renderLeg(70, 78, Math.PI, false)}
            <g transform={`translate(${sniffOffset}, ${sniffOffset * 0.5})`} className="transition-transform duration-200">
              <circle cx="78" cy="55" r="23" fill={color} />
              <path d="M62 40 L58 12 L78 35 Z" fill={color} />
              <path d="M85 35 L102 12 L105 40 Z" fill={color} />
              <circle cx="68" cy="62" r="4" fill="#FFB6C1" opacity="0.3" />
              <circle cx="88" cy="62" r="4" fill="#FFB6C1" opacity="0.3" />
              {isPlayingDead ? (
                <g transform="translate(72, 55)" stroke="#222" strokeWidth="2.5" fill="none">
                   <path d="M0 2 Q4 6 8 2" strokeLinecap="round" />
                   <path d="M12 2 Q16 6 20 2" strokeLinecap="round" />
                </g>
              ) : isWiggling ? (
                <g transform="translate(70, 52)">
                   <path d="M0 0 L6 6 M0 6 L6 0" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
                   <path d="M14 0 L20 6 M14 6 L20 0" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
                </g>
              ) : (
                <g>
                  <circle cx="71" cy="52" r="5" fill="#111" />
                  <circle cx="85" cy="52" r="5" fill="#111" />
                  <circle cx="72" cy="50" r="2" fill="white" />
                  <circle cx="86" cy="50" r="2" fill="white" />
                </g>
              )}
              <path d="M75 64 Q78 67 81 64" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
    );
  }, [state, color, frame, direction]);

  return (
    <div 
      onMouseDown={() => {
        draggingRef.current = true;
        setState('DRAGGING');
      }}
      onMouseUp={() => {
        draggingRef.current = false;
        setState('FALLING');
      }}
      onClick={handleInteraction} 
      className={`fixed z-[9999] cursor-grab active:cursor-grabbing select-none cat-mascot`} 
      style={{ 
        left: pos.x, 
        top: pos.y, 
        width: SIZE, 
        height: SIZE, 
        transform: isZoomed ? 'scale(1.25)' : 'scale(1)',
        transition: 'left 0.1s linear, top 0.1s linear, transform 0.3s ease-out'
      }}
    >
      <div className="relative w-full h-full group">
        {catSVG}
      </div>
    </div>
  );
};

export default Cat;
