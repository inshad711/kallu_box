// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { Package, Star, CheckCircle2 } from "lucide-react";

// /**
//  * Hook to animate numbers
//  */
// const useCounter = (end, duration = 2000, isDecimal = false) => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 },
//     );

//     if (countRef.current) {
//       observer.observe(countRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     let startTimestamp = null;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//       const currentVal = progress * end;
//       setCount(currentVal);

//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       } else {
//         setCount(end);
//       }
//     };

//     window.requestAnimationFrame(step);
//   }, [end, duration, isVisible]);

//   return {
//     value: isDecimal ? count.toFixed(1) : Math.floor(count),
//     ref: countRef,
//   };
// };

// const StatItem = ({ icon: Icon, title, value, suffix, isDecimal, delay }) => {
//   const { value: animatedValue, ref } = useCounter(value, 2000, isDecimal);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShow(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div
//       ref={ref}
//       className={`flex flex-row items-center gap-6 p-4 transition-all duration-700 transform ${
//         show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       }`}
//     >
//       {/* Icon - Stacked Style (Solid Background) */}
//       <div className="flex-shrink-0 relative group">
//         {/* Hover Effect Ring */}
//         <div className="absolute inset-0 bg-orange-200 rounded-full scale-0 group-hover:scale-125 transition-transform duration-300 opacity-50" />

//         {/* Main Icon Circle */}
//         <div className="relative flex items-center justify-center w-[70px] h-[70px] bg-orange-500 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105">
//           <Icon className="w-8 h-8 text-white" strokeWidth={2} />
//         </div>
//       </div>

//       {/* Content - Left Aligned */}
//       <div className="flex flex-col items-start justify-center">
//         <h3 className="text-gray-500 font-medium text-base uppercase tracking-wider mb-1">
//           {title}
//         </h3>
//         <div className="flex items-baseline font-bold text-5xl text-gray-900 font-sans leading-none">
//           <span>{animatedValue}</span>
//           {suffix && (
//             <span className="text-orange-500 ml-1 text-4xl">{suffix}</span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Divider = () => (
//   <div className="w-full h-6 mt-12 overflow-hidden text-gray-900 opacity-20">
//     <svg
//       viewBox="0 0 126 26"
//       preserveAspectRatio="none"
//       className="w-full h-full fill-current"
//     >
//       <path d="M3,10.2c2.6,0,2.6,2,2.6,3.2S4.4,16.5,3,16.5s-3-1.4-3-3.2S0.4,10.2,3,10.2z M18.8,10.2c1.7,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2c-1.7,0-3.2-1.4-3.2-3.2S17,10.2,18.8,10.2z M34.6,10.2c1.5,0,2.6,1.4,2.6,3.2s-0.5,3.2-1.9,3.2c-1.5,0-3.4-1.4-3.4-3.2S33.1,10.2,34.6,10.2z M50.5,10.2c1.7,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2c-1.7,0-3.3-0.9-3.3-2.6S48.7,10.2,50.5,10.2z M66.2,10.2c1.5,0,3.4,1.4,3.4,3.2s-1.9,3.2-3.4,3.2c-1.5,0-2.6-0.4-2.6-2.1S64.8,10.2,66.2,10.2z M82.2,10.2c1.7,0.8,2.6,1.4,2.6,3.2s-0.1,3.2-1.6,3.2c-1.5,0-3.7-1.4-3.7-3.2S80.5,9.4,82.2,10.2zM98.6,10.2c1.5,0,2.6,0.4,2.6,2.1s-1.2,4.2-2.6,4.2c-1.5,0-3.7-0.4-3.7-2.1S97.1,10.2,98.6,10.2z M113.4,10.2c1.2,0,2.2,0.9,2.2,3.2s-0.1,3.2-1.3,3.2s-3.1-1.4-3.1-3.2S112.2,10.2,113.4,10.2z" />
//     </svg>
//   </div>
// );

// export default function Stats2() {
//   return (
//     <div className="flex items-center justify-center ">
//       <div className="w-full max-w-7xl">
//         {/* Main Card */}
//         <div className="bg-white  p-8 lg:px-16 lg:py-12 relative overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative z-10 divide-y md:divide-y-0 md:divide-x divide-gray-100">
//             <div className="flex justify-center md:justify-start">
//               <StatItem
//                 icon={Package}
//                 title="Experience"
//                 value={23}
//                 delay={0}
//               />
//             </div>

//             <div className="flex justify-center md:justify-start md:pl-8">
//               <StatItem
//                 icon={Star}
//                 title="Customer Rate"
//                 value={5.8}
//                 isDecimal={true}
//                 delay={200}
//               />
//             </div>

//             <div className="flex justify-center md:justify-start md:pl-8">
//               <StatItem
//                 icon={CheckCircle2}
//                 title="Project Done"
//                 value={6.1}
//                 isDecimal={true}
//                 suffix="+"
//                 delay={400}
//               />
//             </div>
//           </div>

//           <Divider />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState, useRef } from "react";
import { Package, Star, CheckCircle2, LucideIcon } from "lucide-react";

/**
 * Hook to animate numbers
 */
interface UseCounterReturn {
  value: string | number;
  ref: React.RefObject<HTMLDivElement | null>;
}

const useCounter = (
  end: number,
  duration: number = 2000,
  isDecimal: boolean = false,
): UseCounterReturn => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const currentVal = progress * end;
      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return {
    value: isDecimal ? count.toFixed(1) : Math.floor(count),
    ref: countRef,
  };
};

interface StatItemProps {
  icon: LucideIcon;
  title: string;
  value: number;
  suffix?: string;
  isDecimal?: boolean;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({
  icon: Icon,
  title,
  value,
  suffix,
  isDecimal = false,
  delay,
}) => {
  const { value: animatedValue, ref } = useCounter(value, 2000, isDecimal);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`flex flex-row items-center gap-6 p-4 transition-all duration-700 transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Icon */}
      {/* <div className="flex-shrink-0 relative group">
        <div className="relative flex items-center justify-center w-[70px] h-[70px] bg-gradient-to-r from-[#700000] to-[#3b0000] text-white rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Icon className="w-8 h-8 text-white" strokeWidth={2} />
        </div>
      </div> */}

      {/* Content */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-baseline font-medium text-5xl text-gray-900 leading-none">
          <span>{animatedValue}+</span>
          {suffix && (
            <span className="text-[#700000] ml-1 text-4xl">{suffix}</span>
          )}
        </div>
        <h3 className="text-gray-500 font-medium text-base uppercase tracking-wider mb-1">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Stats2: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <div className="bg-white p-8 lg:px-16 lg:py-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 relative z-10 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex justify-start md:justify-start">
              <StatItem icon={Package} title="Experience" value={5} delay={0} />
            </div>

            <div className="flex justify-start md:justify-start md:pl-8">
              <StatItem
                icon={Star}
                title="Customer Rate"
                value={5.8}
                isDecimal
                delay={200}
              />
            </div>

            <div className="flex justify-start md:justify-start md:pl-8">
              <StatItem
                icon={CheckCircle2}
                title="Project Done"
                value={6.1}
                isDecimal
                delay={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats2;
