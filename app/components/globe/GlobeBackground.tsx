'use client';

export default function GlobeBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white via-[#f3f4f6] to-[#f9fafb]"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(134, 239, 172, 0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(134, 239, 172, 0.35) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating orbs with glow effect */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-[#86efac]/20 blur-3xl" />
      <div
        className="absolute bottom-1/3 right-1/3 h-80 w-80 animate-pulse rounded-full bg-[#bbf7d0]/25 blur-3xl"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute right-1/4 top-1/2 h-64 w-64 animate-pulse rounded-full bg-[#dcfce7]/35 blur-3xl"
        style={{ animationDelay: '2s' }}
      />

      {/* Energy network lines effect */}
      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#line-gradient)" strokeWidth="1">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="80%" y1="10%" x2="20%" y2="90%" stroke="url(#line-gradient)" strokeWidth="1">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="url(#line-gradient)" strokeWidth="1">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
        </line>
      </svg>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}

