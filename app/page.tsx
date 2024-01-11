function Dashboard() {
  return (
    <div className="py-12 md:px-12 px-5 bg-[#FBFBFB]">
      <div className="border-b-solid border-b-2 border-[#EDEDF2]">
        <button className="text-[#2E2E2E] font-[600] border-b-solid border-b-2 border-[#3976E8] ml-5">
          Online Payments
        </button>
      </div>
      <div>
        <div className="flex flex-col rounded-lg border-[1.5px] mt-[30px] md:mt-[48px] pt-[16px] bg-white border-[#E4E4E7] px-[28px] pb-[24px] w-[100%] md:w-[30%]">
          <p className="text-[#8F8E8E] leading-[24px] text-[12px]">
            ACCOUNT DETAILS
          </p>
          <div className="flex flex-row items-end justify-between">
            <div className="">
              <p className="leading-[24px] text-[12px]">STERLINK BANK</p>
              <h3 className="text-[22px] font-bold leading-[24px] pt-[8px]">
                8000000000
              </h3>
              <p className="text-[11px] mt-2 md:hidden ">
                OGEDENGBE FRUITS STORE
              </p>
            </div>
            <div className="px-[8px] py-[6px] text-[#9F56D4] bg-[#9F56D4]/20 rounded-[8px] flex flex-row items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.40004 15.1667H4.60004C1.99337 15.1667 0.833374 14.0067 0.833374 11.4V8.60004C0.833374 5.99337 1.99337 4.83337 4.60004 4.83337H7.40004C10.0067 4.83337 11.1667 5.99337 11.1667 8.60004V11.4C11.1667 14.0067 10.0067 15.1667 7.40004 15.1667ZM4.60004 5.83337C2.53337 5.83337 1.83337 6.53337 1.83337 8.60004V11.4C1.83337 13.4667 2.53337 14.1667 4.60004 14.1667H7.40004C9.46671 14.1667 10.1667 13.4667 10.1667 11.4V8.60004C10.1667 6.53337 9.46671 5.83337 7.40004 5.83337H4.60004Z"
                  fill="#9F56D4"
                />
                <path
                  d="M11.4 11.1667H10.6667C10.3934 11.1667 10.1667 10.94 10.1667 10.6667V8.60004C10.1667 6.53337 9.46671 5.83337 7.40004 5.83337H5.33337C5.06004 5.83337 4.83337 5.60671 4.83337 5.33337V4.60004C4.83337 1.99337 5.99337 0.833374 8.60004 0.833374H11.4C14.0067 0.833374 15.1667 1.99337 15.1667 4.60004V7.40004C15.1667 10.0067 14.0067 11.1667 11.4 11.1667ZM11.1667 10.1667H11.4C13.4667 10.1667 14.1667 9.46671 14.1667 7.40004V4.60004C14.1667 2.53337 13.4667 1.83337 11.4 1.83337H8.60004C6.53337 1.83337 5.83337 2.53337 5.83337 4.60004V4.83337H7.40004C10.0067 4.83337 11.1667 5.99337 11.1667 8.60004V10.1667Z"
                  fill="#9F56D4"
                />
              </svg>
              <p className="pl-[8px] text-[12px]">Copy</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="mt-[40px] bg-[#FAFAFA] flex flex-col rounded-lg border-[1.5px] pt-[16px] border-[#E4E4E7] px-[28px] pb-[24px] w-[100%] ">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <p className="text-[#71717A] text-[14px]">Showing data for</p>
                <button className="ml-[20px] text-[14px] bg-white text-[#71717A] flex flex-row items-center px-[16px] py-[10px] border-[1.5px] border-[#E4E4E7] rounded-lg">
                  Last 7 days
                  <span className=" ml-[12px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#535379"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="flex flex-row">
                <button className="mr-[20px] text-[14px]">Today</button>
                <button className="text-[#000] mr-[20px] text-[14px] flex flex-row items-center px-[16px] py-[10px] bg-[#00C6FB]/20 rounded-lg">
                  Last 7 days
                </button>
                <button className="text-[14px]">Last 30 days</button>
              </div>
            </div>
            <div className="w-[100%] border-[1.5px] px-[28px] rounded-lg py-[32px] bg-white mt-[30px] border-[#E4E4E7]">
              <div className="flex flex-row items-center">
                <p className="text-[14px]">Revenue</p>
                <p className="text-[14px] ml-[12px]">
                  <span className="text-[#6DC27F]">+0.00%</span>&nbsp; vs Last 7
                  days
                </p>
              </div>
              <div className="flex flex-row items-center">
                <h3 className="text-[28px] font-bold">₦0.00</h3>
                <p className="ml-[12px] text-[14px]">in total value</p>
              </div>
              <div>
                <div className="relative">
                  <div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-[#8686AC] text-[13px] mt-[24px]">
                        500K
                      </p>
                      <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-[#8686AC] text-[13px] mt-[24px]">
                        400K
                      </p>
                      <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-[#8686AC] text-[13px] mt-[24px]">
                        300K
                      </p>
                      <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-[#8686AC] text-[13px] mt-[24px]">
                        200K
                      </p>
                      <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-[#8686AC] text-[13px] mt-[24px]">
                        100K
                      </p>
                      <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-end w-[95%] absolute top-14 right-0">
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[68px]"></div>
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[149px]"></div>
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[104px]"></div>
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[72px]"></div>
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[18px]"></div>
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[34px]"></div>
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[28px]"></div>
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[27px]"></div>
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[56px]"></div>
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[34px]"></div>
                    <div className="bg-[#FFC145] rounded-sm w-[20px] h-[0px]"></div>
                  </div>
                </div>
                <div className="flex flex-row w-[100%] items-center justify-end">
                  <div className="flex flex-row justify-between w-[95%] items-end">
                    <p className="text-[#8686AC] text-[14px]">Jan</p>
                    <p className="text-[#8686AC] text-[14px]">Feb</p>
                    <p className="text-[#8686AC] text-[14px]">Mar</p>
                    <p className="text-[#8686AC] text-[14px]">Apr</p>
                    <p className="text-[#8686AC] text-[14px]">May</p>
                    <p className="text-[#8686AC] text-[14px]">Jun</p>
                    <p className="text-[#8686AC] text-[14px]">Jul</p>
                    <p className="text-[#8686AC] text-[14px]">Aug</p>
                    <p className="text-[#8686AC] text-[14px]">Sep</p>
                    <p className="text-[#8686AC] text-[14px]">Oct</p>
                    <p className="text-[#8686AC] text-[14px]">Nov</p>
                    <p className="text-[#8686AC] text-[14px]">Dec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="mt-[40px] bg-[#FAFAFA] flex flex-col rounded-lg border-[1.5px] pt-[16px] border-[#E4E4E7] px-[20px] pb-[24px] w-[100%] ">
            <div className="text-[#848A9C] flex justify-between items-center ">
              <p className="text-[#292D32] text-[17px] ">Revenue</p>
              <div className="w-[80px] h-[25px] border-[1px] flex items-center justify-center text-[12px] rounded-xl gap-2 ">
                <p>Weekly</p>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#848A9C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="relative">
                <div>
                <div className="flex flex-row items-center justify-between">
                    <p className="text-[#8686AC] text-[13px] mt-[24px]">600K</p>
                    <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-[#8686AC] text-[13px] mt-[24px]">500K</p>
                    <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-[#8686AC] text-[13px] mt-[24px]">400K</p>
                    <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-[#8686AC] text-[13px] mt-[24px]">300K</p>
                    <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-[#8686AC] text-[13px] mt-[24px]">200K</p>
                    <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-[#8686AC] text-[13px] mt-[24px]">100K</p>
                    <div className="w-[95%] h-[2px] bg-[#EDEDF2] mt-[18px]"></div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-end w-[88%] absolute top-24 right-0">
                  <div className="bg-[#FFC145] rounded-sm w-[20px] h-[68px]"></div>
                  <div className="bg-[#FFC145] rounded-sm w-[20px] h-[149px]"></div>
                  <div className="bg-[#FFC145] rounded-sm w-[20px] h-[104px]"></div>
                  <div className="bg-[#FFC145] rounded-sm w-[20px] h-[72px]"></div>
                  <div className="bg-[#FFC145] rounded-sm w-[20px] h-[18px]"></div>
                  <div className="bg-[#FFC145] rounded-sm w-[20px] h-[34px]"></div>
                  <div className="bg-[#FFC145] rounded-sm w-[20px] h-[28px]"></div>
                </div>
              </div>
              <div className="flex flex-row w-[100%] items-center justify-end">
                  <div className="flex flex-row justify-between w-[95%] items-end">
                    <p className="text-[#8686AC] text-[14px]">Jan</p>
                    <p className="text-[#8686AC] text-[14px]">Feb</p>
                    <p className="text-[#8686AC] text-[14px]">Mar</p>
                    <p className="text-[#8686AC] text-[14px]">Apr</p>
                    <p className="text-[#8686AC] text-[14px]">May</p>
                    <p className="text-[#8686AC] text-[14px]">Jun</p>
                    <p className="text-[#8686AC] text-[14px]">Jul</p>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
