import React, { useEffect, useState } from 'react';
import fetchLeaderboardData from '../api/leaderboard';

const LeaderboardEntry = ({ rank, username, wagered, prize, avatar }) => {
  // Determine additional class names based on rank
  const additionalStyles = {
    paddingBottom: rank === 1 ? 'pb-[28px]' : 'pb-[28px]',
    bottomOffset: rank === 1 ? '50px' : '50px',
    imageSize: rank === 1 ? 'max-w-[320px] max-h-[320px]' : 'max-w-[280px] max-h-[280px]', // Adjust sizes

  };
  
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  };
  const { width } = useWindowSize();

  const isSmallScreen = width <= 754;


  // Calculate styles based on rank and screen size
  const top = isSmallScreen ? (rank === 2 || rank === 3 ? '10px' : '10px') : (rank === 2 || rank === 3 ? '-25px' : '0px');
  const left = isSmallScreen ? (rank === 2 || rank === 3 ? '15px' : '15px') : (rank === 2 || rank === 3 ? '1px' : '1px');
  const bottom = rank === 2 || rank === 3 ? '5px' : '0px';
  const right = isSmallScreen ? (rank === 2 || rank === 3 ? '10px' : '10px') : (rank === 2 || rank === 3 ? '2px' : '2px');
  return (
    <div
    className={`flex-1 flex flex-col items-center justify-start pt-6 px-4 box-border relative gap-4 min-w-[204px] ${
      rank === 1
        ? 'flex-[1] order-2 sm:order-1' // Rank 1 is first in order for both large and small screens
        : 'flex-[0.7721] order-2 sm:order-1'
    }`}
  >
      <div className={`relative w-full`}>
      <img
          className="w-full h-[350px] object-contain"
          alt=""
          src={`/leadercardsvg-fill${rank !== 1 ? '-1' : ''}@2x.png`}
        />
        <div className="mt-4 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-start p-4">
          <div className={`relative h-[${rank === 1 ? '92px' : '72px'}] w-[${rank === 1 ? '92px' : '72px'}] rounded-full box-border flex items-center justify-center py-2.5 px-2 z-[1] border-[2px] border-solid border-ghostwhite-500 mt-8`}>
  <div className={`h-[${rank === 1 ? '72px' : '54px'}] w-[${rank === 1 ? '72px' : '54px'}] rounded-full bg-gray-400 flex items-center justify-center`}>
    <img
      className={`h-[${rank === 1 ? '72px' : '54px'}] w-[${rank === 1 ? '72px' : '54px'}] rounded-full object-cover`}
      loading="lazy"
      alt={`${username}'s avatar`}
      src={avatar}
    />
  </div>
            <img
              className={` absolute bottom-[-45px] left-[calc(50%_-_44px)] z-[2] w-[88px]`}
              alt=""
              src={rank === 1 ? "/rank1-hex.svg.png" : `/rank${rank}hexsvg.svg`}
            />
          </div>
          <h3 className="pt-6 pb-2 clash-medium m-0 text-center text-inherit leading-[26px] uppercase font-inherit z-[1] mq450:text-base mq450:leading-[21px]">
            {username}
          </h3>
          <div className="flex flex-col items-center justify-start text-base-4">
            <div className="relative leading-[22px] uppercase z-[1]">
              WAGERED
            </div>
            <div className="relative text-base-8 leading-[22px] uppercase whitespace-nowrap z-[1] text-limegreen">
              <span>$</span>
              <span className="text-ghostwhite-300">{wagered}</span>
            </div>
          </div>
          <div
      className={`self-stretch flex items-center justify-center pt-1.5 ${additionalStyles.paddingBottom} relative text-2xl-9 text-gray-400 mt-auto`}
      style={{ position: 'relative', top, left }}
    >
      <img
        className="absolute inset-0 max-w-full max-h-full object-contain z-0"
        loading="lazy"
        alt=""
        src={`/rank${rank}ribbonsvg@2x.png`}
      />
      <b
        className={`clash-bold relative leading-[30px] uppercase whitespace-nowrap z-10 ${rank === 2 || rank === 3 ? 'bottom-0' : 'top-0'}`}
        style={{ position: 'relative', bottom, right }}
      >
        ${prize}
      </b>
    </div>
        </div>
      </div>
    </div>
  );
};

const TopLeaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const loadLeaderboard = async () => {
      setIsLoading(true);
      try {
        const result = await fetchLeaderboardData();
        if (result.status === 'success') {
          setLeaderboardData(result.users);
        } else {
          setError(`${result.message}: ${result.error}`);
        }
      } catch (err) {
        setError(`Failed to load leaderboard data: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadLeaderboard();
  }, []);

  if (isLoading) return <div className="flex items-center justify-center h-screen w-full text-lg">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen w-full text-lg">Error: {error}</div>;

  const topThree = leaderboardData
  .sort((a, b) => parseFloat(b.wagered.replace(',', '')) - parseFloat(a.wagered.replace(',', '')))
  .slice(0, 3);

const prizes = ['3000', '5000', '2000'];
  const orderedTopThree = windowWidth <= 640 
    ? [topThree[0], topThree[1], topThree[2]] // Mobile: 1st, 2nd, 3rd
    : [topThree[1], topThree[0], topThree[2]]; // Desktop: 2nd, 1st, 3rd


  return (
    <div className="flex flex-n flex-wrap items-center justify-center pt-0 px-4 pb-[39.6px] box-border max-w-full mx-auto sm:flex-col">
    <div className="flex flex-n items-center justify-center gap-8 max-w-full z-[1] sm:flex-col">
      {orderedTopThree.map((user, index) => (
        <LeaderboardEntry
          key={index}
          rank={index === 0 ? 2 : index === 1 ? 1 : 3}
          username={user.username}
          wagered={user.wagered}
          prize={prizes[index]}
          avatar={user.avatar || '/default-avatar.png'} // uses default avatar if not provided
        />
      ))}
    </div>
  </div>
  );
};
export default TopLeaderboard;