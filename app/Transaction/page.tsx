

function Transaction() {
  const table = [
    {
      amount: "₦43,644",
      id: "TR_8401857902",
      type: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status1: "Processed",
    },
    {
      amount: "₦35,471",
      id: "TR_8401857902",
      type: "Withdrawal",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status2: "Failed",
    },
    {
      amount: "₦43,644",
      id: "TR_8401857902",
      type: "Deposit",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status1: "Processed",
    },
    {
      amount: "₦35,471",
      id: "TR_8401857902",
      type: "Request",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status2: "Failed",
    },
    {
      amount: "₦43,644",
      id: "TR_8401857902",
      type: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status1: "Processed",
    },
    {
      amount: "₦35,471",
      id: "TR_8401857902",
      type: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status2: "Failed",
    },
    {
      amount: "₦38,948",
      id: "TR_8401857902",
      type: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status1: "Processed",
    },
  ];
  return (
    <div className="">
      <div className="pt-7 pb-5 px-6 md:px-12 md:bg-[#FBFBFB] md:border-b-[1px] hidden md:block ">
        <div className="flex items-center justify-between md:flex-row flex-col">
          <div className="flex items-center gap-3">
            <p className="font-[16px] text-[#2E2E2E] ">All Accounts</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="6"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                fill="#2E2E2E"
                d="M5 5.306a.55.55 0 01-.206-.037.571.571 0 01-.188-.131L.894 1.425a.516.516 0 01-.14-.403.577.577 0 01.158-.403c.125-.125.26-.178.404-.16A.705.705 0 011.7.638l3.3 3.3 3.3-3.3c.1-.1.234-.157.403-.17a.444.444 0 01.403.17c.125.1.178.23.16.393a.73.73 0 01-.179.413L5.394 5.138a.571.571 0 01-.188.13.55.55 0 01-.206.038z"
              ></path>
            </svg>
          </div>
          <div className="text-[#71717A] flex items-center space-x-3 ">
            <p>Select Date Range:</p>
            <div className="flex items-center space-x-2 border-[1px] p-2 rounded-lg bg-white  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#71717A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.084c0 2.5-1.25 4.166-4.167 4.166H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166z"
                ></path>
                <path
                  stroke="#71717A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.079 11.417h.007M13.079 13.917h.007M9.996 11.417h.008M9.996 13.917h.008M6.912 11.417h.007M6.912 13.917h.007"
                ></path>
              </svg>
              <p className="text-[14px] ">June 6, 2023 - Jun 15, 2023</p>
            </div>
            <div className="flex items-center space-x-2 border-[1px] border-[#D0D5DD] bg-white p-1.5 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <g clipPath="url(#clip0_2_5048)">
                  <path
                    stroke="#344054"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.67"
                    d="M13.333 13.333L10 10m0 0l-3.333 3.333M10 10v7.5m6.992-2.175A4.167 4.167 0 0015 7.5h-1.05A6.666 6.666 0 102.5 13.583"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_5048">
                    <path fill="#fff" d="M0 0H20V20H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-[#344054] ">Export</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="px-10 pt-7 flex flex-row justify-between ">
          <div>
            <div className="w-[18px] h-[18px] border-[1px] rounded-[3px] border-[#B0BABF] bg-[#F6F8F9] "></div>
          </div>
          <div className="w-[112px]">
            <p className=" uppercase text-[#84919A] text-[11px] ">Amount</p>
          </div>
          <div className="w-[112px]">
            <p className=" uppercase text-[#84919A] text-[11px]">TRANSACTION ID</p>
          </div>
          <div className="w-[112px] flex justify-center ">
            <p className=" uppercase text-[#84919A] text-[11px]  ">
              Transaction type
            </p>
          </div>
          <div className="w-[124px]">
            <p className=" uppercase text-[#84919A] text-[11px]  ">DATE</p>
          </div>
          <div className="w-[98px]">
            <p className=" uppercase text-[#84919A] text-[11px]  ">TIME</p>
          </div>
          <div className="w-[112px]">
            <p className=" uppercase text-[#84919A] text-[11px]  ">STATUS</p>
          </div>
        </div>
        <div className="border-[1px] mx-6 rounded-lg mt-5 ">
          {table.map(
            ({ amount, id, type, date, time, status1, status2 }, i) => (
              <div className=" flex flex-row mt-6 mx-4" key={i}>
                <div>
                  <div className="w-[18px] h-[18px] border-[1px] rounded-[3px] border-[#B0BABF] bg-[#F6F8F9] "></div>
                </div>
                <div className="border-b-[1px] ml-[4rem] flex justify-between w-[100%] pb-5 ">
                  <div className="w-[112px]">
                    <p className="text-[#535379] text-xs ">{amount}</p>
                  </div>
                  <div className="w-[112px]">
                    <p className="text-[#535379] text-xs">{id}</p>
                  </div>
                  <div className="w-[112px]">
                    <p className="text-[#535379] text-xs">{type}</p>
                  </div>
                  <div className="w-[112px]">
                    <p className="text-[#535379] text-xs">{date}</p>
                  </div>
                  <div className="w-[112px]">
                    <p className="flex justify-center text-[#535379] text-xs">
                      {time}
                    </p>
                  </div>
                  {status1 ? (
                    <div className="border-[1px] border-[#5DC090] bg-[#EFFDED] flex items-center justify-center gap-1 rounded-2xl px-[12px] py-[4px] w-[12.5%] ">
                      <div className="w-[8px] h-[8px] rounded bg-[#92EF80]"></div>
                      <p className="text-[#144909] text-[14px] ">{status1}</p>
                    </div>
                  ) : (
                    <div className="border-[1px] w-[12.5%] border-[#F14156] bg-[#FEECEE] flex items-center justify-center gap-1 rounded-2xl px-[12px] py-[4px]">
                      <div className="w-[8px] h-[8px] rounded bg-[#F14156]"></div>
                      <p className="text-[#740613] text-[14px] ">{status2}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex items-center justify-between my-8 mx-10">
          <div className=" text-[#696D8C]">
            <p className="text-sm">Showing 6 of 20 results</p>
          </div>
          <div className="flex flex-row space-x-2">
            <button className="border-[1px] border-[#DADAE7] w-[32px] h-[32px] flex items-center justify-center rounded-[4px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                fill="none"
                viewBox="0 0 8 12"
              >
                <path
                  stroke="#535379"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6.546 11l-5-5 5-5"
                ></path>
              </svg>
            </button>
            <button className="border-[1px] border-[#DADAE7] text-[#535379] w-[32px] h-[32px] flex items-center justify-center rounded-[4px] ">
              1
            </button>
            <button className="border-[1px] border-[#DADAE7] text-[#535379] w-[32px] h-[32px] flex items-center justify-center rounded-[4px] ">
              2
            </button>
            <button className="border-[1px] border-[#DADAE7]  w-[32px] h-[32px] flex items-center justify-center rounded-[4px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="#535379"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M.88 9.167L5.045 5 .879.833"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="#535379"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M.88 9.167L5.045 5 .879.833"
                ></path>
              </svg>
            </button>
            <button className="border-[1px] border-[#DADAE7] text-[#535379] w-[32px] h-[32px] flex items-center justify-center rounded-[4px] ">
              9
            </button>
            <button className="border-[1px] border-[#DADAE7] w-[32px] h-[32px] flex items-center justify-center rounded-[4px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="#535379"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M.88 9.167L5.045 5 .879.833"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="block md:hidden mx-6">
        <div className="pt-7 pb-5 md:px-12 md:bg-[#FBFBFB] md:border-b-[1px] ">
          <div className="">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <p className="font-[15px] text-[#2E2E2E] ">All Accounts</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    fill="#2E2E2E"
                    d="M5 5.306a.55.55 0 01-.206-.037.571.571 0 01-.188-.131L.894 1.425a.516.516 0 01-.14-.403.577.577 0 01.158-.403c.125-.125.26-.178.404-.16A.705.705 0 011.7.638l3.3 3.3 3.3-3.3c.1-.1.234-.157.403-.17a.444.444 0 01.403.17c.125.1.178.23.16.393a.73.73 0 01-.179.413L5.394 5.138a.571.571 0 01-.188.13.55.55 0 01-.206.038z"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center space-x-2 border-[1px] border-[#D0D5DD] bg-white p-1.5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <g clipPath="url(#clip0_2_5048)">
                    <path
                      stroke="#71717A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.67"
                      d="M13.333 13.333L10 10m0 0l-3.333 3.333M10 10v7.5m6.992-2.175A4.167 4.167 0 0015 7.5h-1.05A6.666 6.666 0 102.5 13.583"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_5048">
                      <path fill="#fff" d="M0 0H20V20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[#71717A] text-[12px] ">Export</p>
              </div>
            </div>
            <div className="text-[#71717A] flex items-center justify-between">
              <p className="text-[13px] ">Select Date Range:</p>
              <div className="flex items-center  space-x-1 border-[1px] px-[8px] py-[6px] rounded-lg bg-white  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#71717A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.084c0 2.5-1.25 4.166-4.167 4.166H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166z"
                  ></path>
                  <path
                    stroke="#71717A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.079 11.417h.007M13.079 13.917h.007M9.996 11.417h.008M9.996 13.917h.008M6.912 11.417h.007M6.912 13.917h.007"
                  ></path>
                </svg>
                <p className="text-[12px] ">June 6, 2023 - Jun 15, 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-[#111827] text-[17px] font-semibold ">
          <p>Transactions</p>
        </div>

        <div>
          <div className=" border-[1.5px] px-4 py-2 mt-4 rounded-md">
            <div className="flex justify-between items-center text-[10px] pb-3 pt-2 border-b-[1px] text-[#252C32] ">
              <p>AMOUNT:</p>
              <p>70%</p>
            </div>
            <div className="flex justify-between items-center text-[10px] pb-3 border-b-[1px] text-[#252C32] pt-4 ">
              <p>TRANSACTION TYPE:</p>
              <p>TRANSFER</p>
            </div>
            <div className="flex justify-between items-center text-[10px] pb-3 border-b-[1px] text-[#252C32] pt-4 ">
              <p>DATE:</p>
              <p>12 JUNE 2022, 10:48 AM</p>
            </div>
            <div className="flex justify-between items-center text-[10px] pb-3 text-[#252C32] pt-4 ">
              <p>STATUS:</p>
              <div className="border-[0.6px] border-[#5DC090] bg-[#EFFDED] flex items-center justify-center gap-1 rounded-2xl px-[7.25px] py-[2.42px] w-[84px] ">
                <div className="w-[8px] h-[8px] rounded bg-[#92EF80]"></div>
                <p className="text-[#144909] text-[10px] ">Processed</p>
              </div>
            </div>
          </div>
          <div className=" border-[1.5px] px-4 py-2 mt-5 rounded-md">
            <div className="flex justify-between items-center text-[10px] pb-3 pt-2 border-b-[1px] text-[#252C32] ">
              <p>AMOUNT:</p>
              <p>70%</p>
            </div>
            <div className="flex justify-between items-center text-[10px] pb-3 border-b-[1px] text-[#252C32] pt-4 ">
              <p>TRANSACTION TYPE:</p>
              <p>TRANSFER</p>
            </div>
            <div className="flex justify-between items-center text-[10px] pb-3 border-b-[1px] text-[#252C32] pt-4 ">
              <p>DATE:</p>
              <p>12 JUNE 2022, 10:48 AM</p>
            </div>
            <div className="flex justify-between items-center text-[10px] pb-3 text-[#252C32] pt-4 ">
              <p>STATUS:</p>
              <div className="border-[0.6px] border-[#5DC090] bg-[#EFFDED] flex items-center justify-center gap-1 rounded-2xl px-[7.25px] py-[2.42px] w-[84px] ">
                <div className="w-[8px] h-[8px] rounded bg-[#92EF80]"></div>
                <p className="text-[#144909] text-[10px] ">Processed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
