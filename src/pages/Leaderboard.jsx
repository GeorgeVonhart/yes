import { useCallback } from "react";
import OverlayHorizontalBorderOverl from "../components/OverlayHorizontalBorderOverl";
import Container2 from "../components/Container2";
import BackgroundBorder1 from "../components/BackgroundBorder1";

const Leaderboard = () => {
  const onLinkClick = useCallback(() => {
    window.open("https://www.betjuicy.com/leaderboard/clash");
  }, []);

  const onLinkClick1 = useCallback(() => {
    window.open("https://www.betjuicy.com/leaderboard/roobet");
  }, []);

  return (
    <div className="w-full relative bg-gray-500 overflow-y-auto flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 flex flex-col items-start justify-start min-w-[320px] min-h-[1200px] max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start min-h-[1200px] max-w-full text-center text-xl text-ghostwhite-100 ">
          <OverlayHorizontalBorderOverl />
          <div className="self-stretch flex flex-row items-start justify-center max-w-full">
            <div className="w-[896px] flex flex-col items-end justify-start pt-[137px] px-8 pb-16 box-border relative gap-[56.4px] max-w-[896px] mq450:gap-[28px] mq750:pt-[38px] mq750:pb-5 mq750:box-border mq1100:max-w-full mq1275:pt-[58px] mq1275:pb-[27px] mq1275:box-border">
              <img
                className="w-[651px] h-[1077px] absolute !m-[0] top-[-38px] left-[-622px] overflow-hidden shrink-0 object-contain mix-blend-luminosity"
                alt=""
                src="/clashleftbgwebp@2x.png"
              />
              <img
                className="w-[666px] h-[1187px] absolute !m-[0] top-[-78px] right-[-552px] overflow-hidden shrink-0 object-contain mix-blend-luminosity"
                loading="lazy"
                alt=""
                src="/clashrightbgwebp@2x.png"
              />
              <div className="self-stretch h-[22px] hidden z-[2]" />
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9.6px] box-border gap-[18px] max-w-full text-[47.8px]">
                <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[29px] pr-[21px] pl-5 box-border max-w-full">
                  <div className="w-[389px] relative leading-[72px] uppercase  flex items-center shrink-0 max-w-full mq450:text-10xl mq450:leading-[43px] mq750:text-19xl mq750:leading-[58px]">
                    <span className="[line-break:anywhere] w-full">
                      <span className="clash-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#0075ff,_#fff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Leaderboard
                      </span>
                    </span>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-start justify-start py-0 px-8 max-w-full z-[1] border-b-[1px] border-solid border-ghostwhite-700">
                  <div className="flex-1 flex flex-row items-start justify-center max-w-[768px] mq750:max-w-full">
                    <div className="h-16 w-32 relative [background:linear-gradient(0deg,_rgba(0,_102,_255,_0.25),_rgba(0,_0,_0,_0))] box-border border-b-[2px] border-solid border-royalblue-200">
                      <img
                        className="absolute top-[56px] left-[54px] w-5 h-3.5"
                        loading="lazy"
                        alt=""
                        src="/svg-21.svg"
                      />
                      <img
                        className="absolute h-[calc(100%_-_6px)] top-[5px] bottom-[1px] left-[14px] max-h-full w-[99px] overflow-hidden object-contain z-[1]"
                        alt=""
                        src="/logoclashwebp@2x.png"
                      />
                    </div>
                    <div
                      className="self-stretch flex-1 hidden max-w-full cursor-pointer"
                      onClick={onLinkClick}
                    />
                    <div
                      className="self-stretch flex-1 hidden opacity-[0.5] max-w-full cursor-pointer"
                      onClick={onLinkClick1}
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-xs text-ghostwhite-200 ">
                  <div className="clash-regular relative leading-[18px] uppercase">
                    *All prizes are in SITE Credits *
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[39.6px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-start gap-[8px] max-w-full z-[1] mq750:flex-wrap">
                  <div className="flex-[0.7721] rounded-xl flex flex-col items-start justify-start pt-8 px-[31px] pb-0 box-border relative gap-[24px] min-w-[204px] mq450:flex-1">
                    <img
                      className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/leadercardsvg-fill@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[59px]">
                      <div className="h-[92px] w-[92px] rounded-9980xl box-border flex flex-row items-start justify-start py-2.5 px-2 z-[1] border-[2px] border-solid border-ghostwhite-500">
                        <div className="h-[72px] w-[72px] rounded-9980xl bg-gray-400 flex flex-row items-start justify-start relative">
                          <img
                            className="h-[72px] w-[72px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[72px]"
                            loading="lazy"
                            alt=""
                            src="/b73c661b4c1286030ceec699ecd5d64610fa4c5c-fulljpg@2x.png"
                          />
                          <img
                            className="h-[91.5px] w-[88px] absolute !m-[0] bottom-[-56px] left-[calc(50%_-_44px)] overflow-hidden shrink-0 z-[1]"
                            alt=""
                            src="/rank2hexsvg.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px]">
                      <h3 className="clash-medium m-0 w-[99px] relative text-inherit leading-[26px] uppercase  font-inherit flex items-center justify-center min-w-[99px] z-[1] mq450:text-base mq450:leading-[21px]">
                        EHSANXA
                      </h3>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[57px] pb-[22px] text-base-4 ">
                      <div className="flex-1 flex flex-col items-end justify-start">
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-[9px]">
                          <div className="flex-1 relative leading-[22px] uppercase inline-block min-w-[77.9px] z-[1]">
                            Wagered
                          </div>
                        </div>
                        <div className="self-stretch relative text-base-8 leading-[22px] uppercase inline-block min-w-[95px] whitespace-nowrap z-[1] text-limegreen">
                          <span>$</span>
                          <span className="text-ghostwhite-300">
                            375,854.43
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-1.5 px-[62px] pb-[26px] relative text-2xl-9 text-gray-400">
                      <img
                        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rank2ribbonsvg@2x.png"
                      />
                      <b className="clash-bold flex-1 relative leading-[30px] uppercase whitespace-nowrap z-[2] mq450:text-lg mq450:leading-[24px]">
                        $3,000
                      </b>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-8 box-border min-w-[204px]">
                    <div className="self-stretch rounded-xl flex flex-col items-start justify-start pt-8 px-[31px] pb-0 relative gap-[24px]">
                      <img
                        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/leadercardsvg-fill-1@2x.png"
                      />
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[59px]">
                        <div className="h-[92px] w-[92px] rounded-9980xl box-border flex flex-row items-start justify-start py-2.5 px-2 z-[1] border-[2px] border-solid border-ghostwhite-500">
                          <div className="h-[72px] w-[72px] rounded-9980xl bg-gray-400 flex flex-row items-start justify-start relative">
                            <img
                              className="h-[72px] w-[72px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[72px]"
                              loading="lazy"
                              alt=""
                              src="/b73c661b4c1286030ceec699ecd5d64610fa4c5c-fulljpg@2x.png"
                            />
                            <img
                              className="h-[91.5px] w-[88px] absolute !m-[0] bottom-[-56px] left-[calc(50%_-_44px)] overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/rank2hexsvg.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px]">
                        <h3 className="clash-medium m-0 w-[99px] relative text-inherit leading-[26px] uppercase  font-inherit flex items-center justify-center min-w-[99px] z-[1] mq450:text-base mq450:leading-[21px]">
                          EHSANXA
                        </h3>
                      </div>
                      <div className="w-20 h-20 absolute !m-[0] top-[-48px] left-[calc(50%_-_40px)] overflow-hidden shrink-0 z-[1]" />
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[22px] pr-[62px] pl-[58px] text-base-4 ">
                        <div className="flex-1 flex flex-col items-end justify-start">
                          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-2">
                            <div className="flex-1 relative leading-[22px] uppercase inline-block min-w-[77.9px] z-[1]">
                              Wagered
                            </div>
                          </div>
                          <div className="self-stretch relative text-base leading-[22px] uppercase inline-block min-w-[89px] whitespace-nowrap z-[1] text-limegreen">
                            <span>$</span>
                            <span className="text-ghostwhite-300">
                              817,822.53
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-1.5 px-[62px] pb-[26px] relative text-[21.8px] text-gray-400">
                        <img
                          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rank1ribbonsvg@2x.png"
                        />
                        <b className="clash-bold flex-1 relative leading-[30px] uppercase whitespace-nowrap z-[2] mq450:text-mid mq450:leading-[24px]">
                          $5,000
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[0.7721] rounded-xl flex flex-col items-start justify-start pt-8 px-[31px] pb-0 box-border relative gap-[24px] min-w-[204px] mq450:flex-1">
                    <img
                      className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/leadercardsvg-fill-1@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[59px]">
                      <div className="h-[92px] w-[92px] rounded-9980xl box-border flex flex-row items-start justify-start py-2.5 px-2 z-[1] border-[2px] border-solid border-ghostwhite-500">
                        <div className="h-[72px] w-[72px] rounded-9980xl bg-gray-400 flex flex-row items-start justify-start relative">
                          <img
                            className="h-[72px] w-[72px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[72px]"
                            loading="lazy"
                            alt=""
                            src="/b73c661b4c1286030ceec699ecd5d64610fa4c5c-fulljpg@2x.png"
                          />
                          <img
                            className="h-[90.6px] w-[88px] absolute !m-[0] bottom-[-56px] left-[calc(50%_-_44px)] overflow-hidden shrink-0 z-[1]"
                            alt=""
                            src="/rank3hexsvg.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px]">
                      <h3 className="clash-medium m-0 w-[99px] relative text-inherit leading-[26px] uppercase  font-inherit flex items-center justify-center min-w-[99px] z-[1] mq450:text-base mq450:leading-[21px]">
                        EHSANXA
                      </h3>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[22px] pr-[66px] pl-[59px] text-base-4 ">
                      <div className="flex-1 flex flex-col items-end justify-start">
                        <div className="w-[77.9px] relative leading-[22px] uppercase flex items-center justify-center min-w-[77.9px] z-[1]">
                          Wagered
                        </div>
                        <div className="self-stretch relative text-base leading-[22px] uppercase inline-block min-w-[85px] whitespace-nowrap z-[1] text-limegreen">
                          <span>$</span>
                          <span className="text-ghostwhite-300">
                            119,705.22
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-1.5 px-[62px] pb-[26px] relative text-[22.1px] text-gray-400">
                      <img
                        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                        alt=""
                        src="/rank3ribbonsvg@2x.png"
                      />
                      <b className="clash-bold flex-1 relative leading-[30px] uppercase whitespace-nowrap z-[2] mq450:text-lg mq450:leading-[24px]">
                        $2,000
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[437.9px] flex flex-col items-start justify-start gap-[23.1px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <div className="flex flex-row items-start justify-start relative">
                      <img
                        className="h-[103.7px] w-24 absolute !m-[0] top-[-99.8px] left-[calc(50%_-_48px)] overflow-hidden shrink-0 max-w-[96px]"
                        loading="lazy"
                        alt=""
                        src="/timeflameiconsvg.svg"
                      />
                      <h3 className="clash-medium m-0 relative text-inherit leading-[26px] uppercase  font-inherit mq450:text-base mq450:leading-[21px]">
                        Leaderboard Ends In
                      </h3>
                    </div>
                  </div>
                  <div className="self-stretch relative text-sm leading-[22.75px] uppercase text-ghostwhite-600">
                    <p className="clash-medium m-0">
                      The winner will be determined when the time runs out,
                    </p>
                    <p className="clash medium m-0">hurry up!</p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[39.6px] box-border gap-[32px] max-w-full text-[14.5px] text-cornflowerblue-200 mq450:gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq750:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[29.5px] px-0 pb-0 box-border min-w-[210px]">
                    <div className="self-stretch h-px relative box-border overflow-hidden shrink-0 border-t-[1px] border-solid border-ghostwhite-700" />
                  </div>
                  <div className="flex-[0.8824] flex flex-row items-start justify-start py-0 px-4 box-border min-w-[204px] z-[1] mq450:flex-1">
                    <div className="h-[60px] flex-1 flex flex-row items-center justify-center relative">
                      <img
                        className="h-full w-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        loading="lazy"
                        alt=""
                        src="/svg-31@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start py-0 px-3.5 z-[1]">
                        <div className="self-stretch flex flex-col items-center justify-start py-0 px-2.5">
                          <div className="clash-semibold w-[9px] relative leading-[22px] uppercase flex items-center justify-center min-w-[9px]">
                            7
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start text-[11.1px] text-ghostwhite-600 ">
                          <div className="relative leading-[12px] uppercase inline-block min-w-[30px]">
                            days
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[60px] flex flex-row items-center justify-center relative text-base">
                      <img
                        className="h-full w-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        loading="lazy"
                        alt=""
                        src="/svg-31@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start py-0 px-[18px] z-[1]">
                        <div className="flex flex-col items-center justify-start py-0 px-1">
                          <div className="clash-semibold relative leading-[22px] uppercase inline-block min-w-[16px]">
                            11
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start text-xs text-ghostwhite-600 ">
                          <div className="relative leading-[12px] uppercase inline-block min-w-[24px]">
                            hrs
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[60px] flex-1 flex flex-row items-center justify-center relative text-sm">
                      <img
                        className="h-full w-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        loading="lazy"
                        alt=""
                        src="/svg-31@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start py-0 px-[18px] z-[1]">
                        <div className="self-stretch flex flex-col items-center justify-start py-0 px-px">
                          <div className="clash-semibold w-5 relative leading-[22px] uppercase flex items-center justify-center min-w-[20px]">
                            44
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-center justify-start text-xs text-ghostwhite-600 ">
                          <div className="relative leading-[12px] uppercase inline-block min-w-[22px]">
                            min
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[60px] flex-1 flex flex-row items-center justify-center relative text-mini text-ghostwhite-300">
                      <img
                        className="h-full w-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        loading="lazy"
                        alt=""
                        src="/svg-31@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start py-0 px-[18px] z-[1]">
                        <div className="self-stretch flex flex-col items-center justify-start py-0 px-1.5">
                          <div className="clash-medium w-[11px] relative leading-[22px] uppercase flex items-center justify-center min-w-[11px]">
                            9
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-center justify-start text-xs text-ghostwhite-600 ">
                          <div className="self-stretch relative leading-[12px] uppercase inline-block min-w-[24px]">
                            sec
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[29.5px] px-0 pb-0 box-border min-w-[210px]">
                    <div className="self-stretch h-px relative box-border overflow-hidden shrink-0 z-[2] border-t-[1px] border-solid border-ghostwhite-700" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-[23.1px] text-ghostwhite-100">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
                    <div className="flex flex-col items-center justify-start">
                      <div className="clash-semibold relative leading-[30px] uppercase mq450:text-lg mq450:leading-[24px]">
                        Challengers
                      </div>
                    </div>
                    <div className="w-[150px] flex flex-col items-start justify-start text-[11px] text-ghostwhite-600 ">
                      <div className="self-stretch flex flex-col items-start justify-center pt-0 px-0 pb-0 box-border relative min-w-[150px]">
                        <div className="w-[34px] absolute !m-[0] top-[-19.5px] left-[4px] leading-[18px] uppercase flex items-center justify-center min-w-[34px]">
                          Show
                        </div>
                        <div className="self-stretch rounded-md bg-gray-700 overflow-hidden flex flex-row items-center justify-start text-left text-sm text-white border-[1px] border-solid border-ghostwhite-500">
                          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-5 pb-[0.9px]">
                            <div className="self-stretch relative leading-[23px] uppercase">
                              10
                            </div>
                          </div>
                          <div className="w-[45px] box-border flex flex-row items-center justify-center py-[13px] pr-[15px] pl-4 border-l-[1px] border-solid border-ghostwhite-500">
                            <img
                              className="h-3 w-3 relative object-contain"
                              alt=""
                              src="/svg-7@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full text-sm text-ghostwhite-600 ">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-8 box-border shrink-0 max-w-full [row-gap:20px]">
                      <div className="flex-1 flex flex-row items-center justify-start pt-0 pb-[0.9px] pr-[451px] pl-0 box-border gap-[8px] min-w-[53px] max-w-full mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pr-[225px] mq750:box-border">
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
                      <div className="w-32 flex flex-row items-center justify-end pt-0 pb-[0.9px] pr-0 pl-[35px] box-border gap-[8px] text-sm-5">
                        <img
                          className="h-4 w-4 relative object-contain"
                          alt=""
                          src="/svg-9@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-[0.9px]">
                          <div className="self-stretch relative leading-[23px] uppercase inline-block min-w-[69px]">
                            Wagered
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-end pt-0 pb-[0.9px] pr-0 pl-[65px] gap-[8px]">
                        <img
                          className="h-4 w-4 relative object-contain"
                          alt=""
                          src="/svg-10@2x.png"
                        />
                        <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[0.9px]">
                          <div className="relative leading-[23px] uppercase inline-block min-w-[39px]">
                            Prize
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clash-medium self-stretch flex flex-col items-start justify-start gap-[8px] shrink-0 text-ghostwhite-100">
                      <div className="self-stretch rounded-lg bg-gray-400 flex flex-row items-start justify-between py-[7px] px-[33px] gap-[20px] text-[13.6px] border-[1px] border-solid border-ghostwhite-700 mq750:flex-wrap">
                        <div className="w-60 flex flex-row items-end justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                                <div className="flex flex-col items-start justify-start relative">
                                  <img
                                    className="w-7 h-8 relative"
                                    alt=""
                                    src="/svg-111.svg"
                                  />
                                  <div className="w-full !m-[0] absolute top-[3.8px] right-[0%] left-[0%] flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.9px] box-border z-[1]">
                                    <div className="clash-regular self-stretch relative leading-[23px] uppercase inline-block min-w-[10px]">
                                      4
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-10 w-10 rounded-9980xl box-border flex flex-row items-start justify-start py-[5px] px-1 border-[1px] border-solid border-gray-200">
                              <div className="h-[30px] w-[30px] rounded-9980xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <img
                                  className="w-[30px] h-[30px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[30px]"
                                  loading="lazy"
                                  alt=""
                                  src="/b21dcdb7f447d90d80fb7f75bca40531c38ef91c-fulljpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[8.6px] text-left text-sm text-ghostwhite-600 ">
                            <div className="self-stretch h-[22.8px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                              <div className="relative leading-[23px] uppercase  inline-block min-w-[77px]">
                                EHSANXA
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[200.3px] flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0 box-border text-sm-3 text-limegreen ">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="w-[72.6px] flex flex-row items-end justify-start">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[56.1px] shrink-0 whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  94,239
                                </span>
                              </div>
                              <div className="w-[16.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.3px] text-xs text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[16.8px] shrink-0">
                                  .77
                                </div>
                              </div>
                            </div>
                            <div className="w-[65.4px] flex flex-row items-end justify-start text-sm">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[46.5px] shrink-0 whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  1,500
                                </span>
                              </div>
                              <div className="w-[19.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.2px] text-xs-8 text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[19.1px] shrink-0">
                                  .00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-gray-400 flex flex-row items-start justify-between py-[7px] px-[33px] gap-[20px] border-[1px] border-solid border-ghostwhite-700 mq750:flex-wrap">
                        <div className="w-60 flex flex-row items-end justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                                <div className="flex flex-col items-start justify-start relative">
                                  <img
                                    className="w-7 h-8 relative"
                                    alt=""
                                    src="/svg-111.svg"
                                  />
                                  <div className="w-full !m-[0] absolute top-[3.8px] right-[0%] left-[0%] flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.9px] box-border z-[1]">
                                    <div className="clash-regular w-[9px] relative leading-[23px] uppercase flex items-center justify-center min-w-[9px]">
                                      5
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-10 w-10 rounded-9980xl box-border flex flex-row items-start justify-start py-[5px] px-1 border-[1px] border-solid border-gray-200">
                              <div className="h-[30px] w-[30px] rounded-9980xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <img
                                  className="w-[30px] h-[30px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[30px]"
                                  loading="lazy"
                                  alt=""
                                  src="/b21dcdb7f447d90d80fb7f75bca40531c38ef91c-fulljpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[8.6px] text-left text-ghostwhite-600 ">
                            <div className="self-stretch h-[22.8px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                              <div className="w-[87px] relative leading-[23px] uppercase  flex items-center shrink-0">
                                EHSANXA
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[199.8px] flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0 box-border text-limegreen ">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="w-[72.1px] flex flex-row items-end justify-start">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[53.6px] shrink-0 whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  89,751
                                </span>
                              </div>
                              <div className="w-[18.7px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.2px] text-xs-8 text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[18.7px] shrink-0">
                                  .94
                                </div>
                              </div>
                            </div>
                            <div className="w-[65.4px] flex flex-row items-end justify-start">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[46.5px] shrink-0 whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  1,500
                                </span>
                              </div>
                              <div className="w-[19.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.2px] text-xs-8 text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[19.1px] shrink-0">
                                  .00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-gray-400 flex flex-row items-start justify-between py-[7px] px-[33px] gap-[20px] border-[1px] border-solid border-ghostwhite-700 mq750:flex-wrap">
                        <div className="w-60 flex flex-row items-end justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                                <div className="flex flex-col items-start justify-start relative">
                                  <img
                                    className="w-7 h-8 relative"
                                    alt=""
                                    src="/svg-111.svg"
                                  />
                                  <div className="w-full !m-[0] absolute top-[3.8px] right-[0%] left-[0%] flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.9px] box-border z-[1]">
                                    <div className="clash-regular self-stretch relative leading-[23px] uppercase inline-block min-w-[10px]">
                                      6
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-10 w-10 rounded-9980xl box-border flex flex-row items-start justify-start py-[5px] px-1 border-[1px] border-solid border-gray-200">
                              <div className="h-[30px] w-[30px] rounded-9980xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <img
                                  className="w-[30px] h-[30px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[30px]"
                                  loading="lazy"
                                  alt=""
                                  src="/b21dcdb7f447d90d80fb7f75bca40531c38ef91c-fulljpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[8.6px] text-left text-ghostwhite-600 ">
                            <div className="self-stretch h-[22.8px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.9px] box-border">
                              <div className="w-[100.2px] relative leading-[22.8px] uppercase  flex items-center shrink-0">
                                EHSANXA
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[202.1px] flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0 box-border text-sm-3 text-limegreen ">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="w-[74.5px] flex flex-row items-end justify-start">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[55.9px] whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  75,000
                                </span>
                              </div>
                              <div className="w-[18.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.2px] text-xs text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[18.8px]">
                                  .84
                                </div>
                              </div>
                            </div>
                            <div className="w-[65.4px] flex flex-row items-end justify-start text-sm">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[46.5px] shrink-0 whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  1,500
                                </span>
                              </div>
                              <div className="w-[19.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.2px] text-xs-8 text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[19.1px] shrink-0">
                                  .00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-gray-400 flex flex-row items-start justify-between py-[7px] px-[33px] gap-[20px] text-sm-9 border-[1px] border-solid border-ghostwhite-700 mq750:flex-wrap">
                        <div className="w-60 flex flex-row items-end justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                                <div className="flex flex-col items-start justify-start relative">
                                  <img
                                    className="w-7 h-8 relative"
                                    alt=""
                                    src="/svg-111.svg"
                                  />
                                  <div className="w-full !m-[0] absolute top-[3.8px] right-[0%] left-[0%] flex flex-col items-center justify-start pt-0 px-2.5 pb-[0.9px] box-border z-[1]">
                                    <div className="clash-regular self-stretch relative leading-[23px] uppercase inline-block min-w-[8px]">
                                      7
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-10 w-10 rounded-9980xl box-border flex flex-row items-start justify-start py-[5px] px-1 border-[1px] border-solid border-gray-200">
                              <div className="h-[30px] w-[30px] rounded-9980xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <img
                                  className="w-[30px] h-[30px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[30px]"
                                  loading="lazy"
                                  alt=""
                                  src="/b21dcdb7f447d90d80fb7f75bca40531c38ef91c-fulljpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[8.6px] text-left text-sm text-ghostwhite-600 ">
                            <div className="self-stretch h-[22.8px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                              <div className="relative leading-[23px] uppercase  inline-block min-w-[72px]">
                                EHSANXA
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[200.3px] flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0 box-border text-sm-5 text-limegreen ">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="w-[72.6px] flex flex-row items-end justify-start">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[55px] whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  73,296
                                </span>
                              </div>
                              <div className="w-[17.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.3px] text-xs text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[17.9px]">
                                  .70
                                </div>
                              </div>
                            </div>
                            <div className="w-[65.9px] flex flex-row items-end justify-start text-sm">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[47px] shrink-0 whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  1,000
                                </span>
                              </div>
                              <div className="w-[19.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.2px] text-xs-8 text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[19.1px] shrink-0">
                                  .00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-gray-400 flex flex-row items-start justify-between py-[7px] px-[33px] gap-[20px] border-[1px] border-solid border-ghostwhite-700 mq750:flex-wrap">
                        <div className="w-60 flex flex-row items-end justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                                <div className="flex flex-col items-start justify-start relative">
                                  <img
                                    className="w-7 h-8 relative"
                                    alt=""
                                    src="/svg-111.svg"
                                  />
                                  <div className="w-full !m-[0] absolute top-[3.8px] right-[0%] left-[0%] flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.9px] box-border z-[1]">
                                    <div className="clash-regular self-stretch relative leading-[23px] uppercase inline-block min-w-[10px]">
                                      8
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-10 w-10 rounded-9980xl box-border flex flex-row items-start justify-start py-[5px] px-1 border-[1px] border-solid border-gray-200">
                              <div className="h-[30px] w-[30px] rounded-9980xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <img
                                  className="w-[30px] h-[30px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[30px]"
                                  alt=""
                                  src="/b21dcdb7f447d90d80fb7f75bca40531c38ef91c-fulljpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[8.6px] text-left text-ghostwhite-600 ">
                            <div className="self-stretch h-[22.8px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                              <div className="w-20 relative leading-[23px] uppercase  flex items-center shrink-0">
                                EHSANXA
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[199.4px] flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0 box-border text-limegreen ">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="w-[71.8px] flex flex-row items-end justify-start">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[53.8px] whitespace-nowrap shrink-0">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  71,560
                                </span>
                              </div>
                              <div className="w-[18.2px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.2px] text-xs text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[18.2px]">
                                  .32
                                </div>
                              </div>
                            </div>
                            <div className="w-[65.9px] flex flex-row items-end justify-start">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[47px] shrink-0 whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  1,000
                                </span>
                              </div>
                              <div className="w-[19.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.2px] text-xs-8 text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[19.1px] shrink-0">
                                  .00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-gray-400 flex flex-row items-start justify-between py-[7px] px-[33px] gap-[20px] border-[1px] border-solid border-ghostwhite-700 mq750:flex-wrap">
                        <div className="w-60 flex flex-row items-end justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                                <div className="flex flex-col items-start justify-start relative">
                                  <img
                                    className="w-7 h-8 relative"
                                    loading="lazy"
                                    alt=""
                                    src="/svg-111.svg"
                                  />
                                  <div className="w-full !m-[0] absolute top-[3.8px] right-[0%] left-[0%] flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.9px] box-border z-[1]">
                                    <div className="clash-regular self-stretch relative leading-[23px] uppercase inline-block min-w-[10px]">
                                      9
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-10 w-10 rounded-9980xl box-border flex flex-row items-start justify-start py-[5px] px-1 border-[1px] border-solid border-gray-200">
                              <div className="h-[30px] w-[30px] rounded-9980xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <img
                                  className="w-[30px] h-[30px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[30px]"
                                  loading="lazy"
                                  alt=""
                                  src="/b21dcdb7f447d90d80fb7f75bca40531c38ef91c-fulljpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[8.6px] text-left text-ghostwhite-600 ">
                            <div className="self-stretch h-[22.8px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.9px] box-border">
                              <div className="w-[89.8px] relative leading-[22.8px] uppercase  flex items-center shrink-0">
                                EHSANXA
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[199.5px] flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0 box-border text-limegreen ">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="w-[71.9px] flex flex-row items-end justify-start">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[55px] whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  64,491
                                </span>
                              </div>
                              <div className="w-[17px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.1px] text-xs text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[17px]">
                                  .51
                                </div>
                              </div>
                            </div>
                            <div className="w-[65.9px] flex flex-row items-end justify-start">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[47px] shrink-0 whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  1,000
                                </span>
                              </div>
                              <div className="w-[19.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.2px] text-xs-8 text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[19.1px] shrink-0">
                                  .00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-gray-400 flex flex-row items-start justify-between py-[7px] px-[33px] gap-[20px] border-[1px] border-solid border-ghostwhite-700 mq750:flex-wrap">
                        <div className="w-60 flex flex-row items-end justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                                <div className="flex flex-col items-start justify-start relative">
                                  <img
                                    className="w-7 h-8 relative"
                                    loading="lazy"
                                    alt=""
                                    src="/svg-111.svg"
                                  />
                                  <div className="!m-[0] absolute w-full top-[3.8px] right-[0%] left-[0%] flex flex-col items-center justify-start pt-0 px-[7px] pb-[0.9px] box-border z-[1]">
                                    <div className="clash-regular relative leading-[23px] uppercase inline-block min-w-[14px]">
                                      10
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-10 w-10 rounded-9980xl box-border flex flex-row items-start justify-start py-[5px] px-1 border-[1px] border-solid border-gray-200">
                              <div className="h-[30px] w-[30px] rounded-9980xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <img
                                  className="w-[30px] h-[30px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[30px]"
                                  loading="lazy"
                                  alt=""
                                  src="/b21dcdb7f447d90d80fb7f75bca40531c38ef91c-fulljpg@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[8.6px] text-left text-ghostwhite-600 ">
                            <div className="self-stretch h-[22.8px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.9px] box-border">
                              <div className="relative leading-[22.8px] uppercase  inline-block min-w-[72.3px]">
                                EHSANXA
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[201.8px] flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0 box-border text-sm-5 text-limegreen ">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="w-[74.1px] flex flex-row items-end justify-start">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[55.5px] whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  60,274
                                </span>
                              </div>
                              <div className="w-[18.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.3px] text-xs-8 text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[18.9px]">
                                  .40
                                </div>
                              </div>
                            </div>
                            <div className="w-[65.9px] flex flex-row items-end justify-start text-sm">
                              <div className="flex-1 relative leading-[22.8px] uppercase  inline-block min-w-[47px] shrink-0 whitespace-nowrap">
                                <span>$</span>
                                <span className="text-ghostwhite-100">
                                  1,000
                                </span>
                              </div>
                              <div className="w-[19.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border ml-[-0.2px] text-xs-8 text-ghostwhite-600">
                                <div className="self-stretch relative leading-[16px] uppercase  inline-block min-w-[19.1px] shrink-0">
                                  .00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[47.5px] max-w-full mq450:gap-[24px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="w-[448px] flex flex-col items-start justify-start pt-0 px-2 pb-[0.9px] box-border gap-[23.1px] max-w-[448px] mq450:max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                      <h3 className="clash-medium m-0 w-[183.4px] relative text-inherit leading-[26px] uppercase whitespace-nowrap text-center mq450:text-base mq450:leading-[21px]">
                        LEADERS HISTORY
                      </h3>
                    </div>
                    <div className="self-stretch relative text-sm leading-[22.75px] uppercase text-ghostwhite-600">
                      <p className="clash-medium m-0">
                        This is a history of latest leaderboard top winners.
                      </p>
                      <p className="clash-medium m-0">{`Click on it to explore the whole leaderboard & prizes`}</p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[24.1px] text-base text-ghostwhite-600  mq750:flex-wrap">
                  <div className="flex-[0.9537] rounded-lg bg-gray-600 box-border overflow-hidden flex flex-col items-end justify-start pt-0 pb-[19px] pr-3 pl-0 gap-[0.7px] min-w-[196px] border-[1px] border-solid border-ghostwhite-700 mq450:flex-1">
                    <div className="w-[100px] h-[100px] relative overflow-hidden shrink-0 hidden" />
                    <div className="self-stretch flex flex-row items-start justify-start gap-[21.8px]">
                      <div className="rounded-t-none rounded-br rounded-bl-none bg-gray-300 flex flex-row items-start justify-start py-1 px-2">
                        <div className="clash-regular relative leading-[22px] uppercase inline-block min-w-[27px] whitespace-nowrap">
                        № 1.
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 text-mini">
                        <div className="self-stretch flex flex-col items-end justify-start gap-[30px]">
                          <div className="w-[54px] relative leading-[22px] uppercase flex items-center justify-center min-w-[54px]">
                            6-2024
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start text-sm text-ghostwhite-400">
                            <div className="w-[130px] flex flex-col items-start justify-start gap-[15.1px]">
                              <div className="flex flex-row items-start justify-start py-0 pr-[19px] pl-[18px]">
                                <div className="h-[92px] w-[92px] rounded-9980xl box-border flex flex-row items-start justify-start py-2.5 px-2 z-[2] border-[2px] border-solid border-ghostwhite-500">
                                  <div className="h-[72px] w-[72px] rounded-9980xl bg-gray-400 overflow-hidden shrink-0 flex flex-row items-start justify-start">
                                    <img
                                      className="h-[72px] w-[72px] relative rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[72px]"
                                      loading="lazy"
                                      alt=""
                                      src="/c1001814851f32140a476e50bab4377b189587d8-fulljpg@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[13px]">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[0.6px]">
                                  <div className="flex flex-row items-start justify-start py-0 pr-[25px] pl-[21px]">
                                    <div className="relative leading-[23px] uppercase inline-block min-w-[56px]">
                                      Winner
                                    </div>
                                  </div>
                                  <h3 className="clash-semibold m-0 self-stretch relative text-xl leading-[20px] uppercase   text-ghostwhite-100 inline-block min-w-[102px] mq450:text-base mq450:leading-[16px]">
                                    EHSANXA
                                  </h3>
                                </div>
                              </div>
                              <div className="clash-semibold self-stretch relative text-sm-9 leading-[23px] uppercase   text-ghostwhite-600">
                                Total Prize Pool
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[235.3px] flex flex-row items-start justify-end py-0 px-2 box-border">
                      <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <button className="cursor-pointer [border:none] p-0.5 bg-[transparent] self-stretch rounded-md [background:linear-gradient(90.6deg,_#f9e268,_#eca823_98.02%)] flex flex-col items-start justify-start">
                          <div className="self-stretch rounded-8xs [background:linear-gradient(95.95deg,_#eba41b_2.1%,_#ffe7a8_45.9%,_#ffdf72_50.36%,_#ffb547_88.42%,_#fef17f)] flex flex-col items-start justify-start">
                            <div className="self-stretch flex flex-col items-center justify-start py-2 px-[57px]">
                              <b className="clash-bold self-stretch relative text-2xl-9 leading-[30px] uppercase  text-gray-400 text-center whitespace-nowrap mq450:text-lg mq450:leading-[24px]">
                                $20,000
                              </b>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="h-[329px] flex-1 relative rounded-lg box-border overflow-hidden min-w-[196px] border-[1px] border-dashed border-ghostwhite-700" />
                  <div className="h-[329px] flex-1 relative rounded-lg box-border overflow-hidden min-w-[196px] border-[1px] border-dashed border-ghostwhite-700" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch h-[872px] bg-gray-400 box-border flex flex-col items-start justify-start pt-px px-0 pb-3 max-w-full z-[1] border-t-[1px] border-solid border-ghostwhite-700 mq450:h-auto">
          <Container2 />
          <BackgroundBorder1 />
        </section>
      </main>
    </div>
  );
};

export default Leaderboard;
