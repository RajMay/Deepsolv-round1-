import React, { useEffect, useState } from 'react';


const LogoCarousel = () => {
  const [position, setPosition] = useState(0);

 
  const logos = [
    { id: 1, name: 'Google', src: '/images/001.png' },
    { id: 2, name: 'BWM ', src: '/images/004.png' },
    { id: 3, name: 'Amazon', src: '/images/005.png' },
    { id: 4, name: 'BlackRock', src: '/images/007.png' },
    { id: 5, name: 'Microsoft', src: '/images/011.png' },
    { id: 6, name: 'Nvadia', src: '/images/013.png' },
    { id: 7, name: 'Google', src: '/images/015.png' },
    { id: 8, name: 'BWM Mediasoft', src: '/images/018.png' },
    { id: 9, name: 'Amazon', src: '/images/021.png' },
    { id: 10, name: 'BlackRock', src: '/images/033.png' },
    { id: 11, name: 'Microsoft', src: '/images/045.png' },
    { id: 12, name: 'Nvidia', src: '/images/048.png' },
  ];

  useEffect(() => {
    const animate = () => {
      setPosition((prevPosition) => {
        if (prevPosition <= -50) {
          return 0;
        }
        return prevPosition - 0.1;  
      });
    };

    const animationFrame = setInterval(animate, 16);  // ~60fps
    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div className="w-full overflow-hidden  py-5 rounded">
      <div className="relative max-w-3xl mx-auto px-2">
        <h2 className="text-2xl text-[#6A38C2] font-bold text-center mb-8">
          Partners
        </h2>

        <div className="relative overflow-hidden bg-gray-90 bg-opacity-80 shadow-sm rounded-full p-2 ">
          <div 
            className="flex items-center gap-20 transition-transform duration-100"
            style={{ transform: `translateX(${position}%)` }}
          >
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 w-26 h-20 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} `}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;

