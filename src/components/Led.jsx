import React, { useEffect, useState } from 'react';
import fetchLeaderboardData from '../api/leaderboard';
import DropdownButton from './DropdownButton';

const LeaderboardEntry = ({ rank, username, wagered, prize, avatar }) => {
  const [wagerWhole, wagerDecimal] = wagered.split('.');
  const [prizeWhole, prizeDecimal] = prize.split('.');

  return (
    <div className="self-stretch rounded-lg bg-gray-400 flex flex-row items-center justify-between py-[7px] px-[33px] gap-[20px] border-[1px] border-solid border-ghostwhite-700 ">
      <div className="w-60 flex flex-row items-center justify-start gap-[8px]">
        <div className="flex flex-col items-center justify-center relative">
          <img
            className="w-7 h-8"
            loading="lazy"
            alt=""
            src="/svg-111.svg"
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-center">
            <div className="clash-regular leading-[23px] uppercase inline-block min-w-[14px]">
              {rank}
            </div>
          </div>
        </div>
        <div className="h-10 w-10 rounded-full box-border flex items-center justify-center py-[5px] px-1 border-[1px] border-solid border-gray-200">
          <div className="h-[30px] w-[30px] rounded-full bg-gray-400 overflow-hidden flex items-center justify-center">
            <img
              className="w-[30px] h-[30px] rounded-full object-cover"
              loading="lazy"
              alt={`${username}'s avatar`}
              src={avatar}
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-start text-left text-ghostwhite-600">
          <div className="relative leading-[22.8px] uppercase">
            {username}
          </div>
        </div>
      </div>
      <div className="w-[201.8px] flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0 box-border text-sm-5 text-limegreen">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="w-[74.1px] flex flex-row items-end justify-start">
            <div className="flex-1 relative leading-[22.8px] uppercase min-w-[55.5px] whitespace-nowrap">
              <span>$</span>
              <span className="text-ghostwhite-100">{wagerWhole}</span>
            </div>

          </div>
          <div className="w-[65.9px] flex flex-row items-end justify-start text-sm">
            <div className="flex-1 relative leading-[22.8px] uppercase min-w-[47px] shrink-0 whitespace-nowrap">
              <span>$</span>
              <span className="text-ghostwhite-100">{prizeWhole}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const Led = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(10);

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

  const handleDisplayCountChange = (count) => {
    setDisplayCount(parseInt(count, 10));
  };

  if (isLoading) return <div className="flex items-center justify-center h-screen w-full text-lg">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen w-full text-lg">Error: {error}</div>;


  return (
    <div className="clash-medium self-stretch flex flex-col items-start justify-start gap-[8px] shrink-0 text-ghostwhite-100">
      <div className="flex justify-between items-center w-full mb-4">

        <h2 className="text-2xl clash-semibold uppercase">Challengers</h2>

        <DropdownButton
          options={['10', '20', '30']}
          onChange={handleDisplayCountChange}
        />

      </div>
      <div className="self-stretch flex flex-row  items-start justify-start py-0 px-8 box-border shrink-0 max-w-full [row-gap:20px]">
        <div className="flex-1 flex flex-row items-center justify-start pt-0 pb-[0.9px] pr-[451px] pl-0 box-border gap-[8px] min-w-[53px] max-w-full mq450:pr-5 mq450:box-border  mq750:pr-[225px] mq750:box-border">
          <img
            className="h-4 w-4 relative object-contain"
            alt=""
            src="/svg-81@2x.png"
          />
          <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-[0.9px] box-border min-w-[24px]">
            <div className="self-stretch relative leading-[23px] uppercase inline-block min-w-[37px]">
              User
            </div>
          </div>
        </div>
        <div className="w-32 flex flex-row items-center justify-end pt-0 pb-[0.9px] pr-0 pl-[35px] box-border gap-[8px] clash-regular text-ghostwhite-600 text-sm-5">
          <img
            className="h-4 w-4 relative object-contain"
            alt=""
            src="/svg-9@2x.png"
          />
          <div className="flex-1 flex items-center">
            <span className="leading-[23px] uppercase">Wagered</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end pt-0 pb-[0.9px] pr-0 pl-[65px] gap-[8px]">
          <img
            className="h-4 w-4 relative object-contain"
            alt=""
            src="/svg-10@2x.png"
          />
          <div className="flex items-center">
            <span className="text-ghostwhite-600 relative leading-[23px] uppercase">
              Prize
            </span>
          </div>
        </div>
      </div>

      {leaderboardData.slice(3, 3 + displayCount).map((user, index) => (

        <LeaderboardEntry
          key={index}
          rank={index + 4}
          username={user.username}
          wagered={user.wagered}
          prize={user.prize || '1000.00'}
          avatar={user.avatar || '/default-avatar.png'}
        />
      ))}
    </div>
  );
};

export default Led;