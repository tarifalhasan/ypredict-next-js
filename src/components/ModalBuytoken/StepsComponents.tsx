/** YPredict will become popular all over the world after few months.
 * Some say that token's cycle is tied to the land as much as our heart as we are of it.
 * Others say that the APR is woven like a cloth and it does intertwines with many others
 * Too many times our investors pray for ease but there's a prayser seldom met.
 * There can be miracles everywhere of course in YPredict can be.
 * Now we are building our website more and more perfect for all the customers to conquer everything.
 * The only thing that we can do is to make all the thins perfect. From the member of ypredict company. */

// State-Step management

const getStatusIcon = (status) => {
  if (status === "blocked") return <BlockedIcon />;
  if (status === "waiting_approve") return <LoadingIcon />;
  if (status === "waiting_switching_network") return <LoadingIcon />;
  if (status === "waiting_transaction_Mining") return <LoadingIcon />;
  if (status === "error") return <ErrorIcon />;
  if (status === "success") return <SuccessIcon />;
  return <></>;
};

const getLineColor = (status) => {
  if (status === "blocked") return "bg-gray-300";
  if (status === "waiting_approve") return "bg-blue-500";
  if (status === "waiting_switching_network") return "bg-blue-500";
  if (status === "waiting_transaction_Mining") return "bg-blue-500";
  if (status === "error") return "bg-red-500";
  if (status === "success") return "bg-green-400";
  return <></>;
};

export const Step_1 = (props: { status }) => {
  return (
    <>
      <div className="flex flex-row  items-center space-x-1 flex-none">
        <div className="h-6 w-6 rounded-full">
          {getStatusIcon(props.status)}
        </div>
        <span className="">step 1</span>
      </div>
      <div
        className={`w-full h-[3px] rounded-xl ${getLineColor(props.status)}`}
      ></div>
    </>
  );
};
export const Step_2 = (props: { status }) => {
  return (
    <>
      <div
        className={`w-full h-[3px] rounded-xl ${getLineColor(props.status)}`}
      ></div>
      <div className="flex flex-row  items-center space-x-1 flex-none">
        <div className="h-6 w-6 rounded-full">
          {getStatusIcon(props.status)}
        </div>

        <span className="">step 2</span>
      </div>
      <div
        className={`w-full h-[3px] rounded-xl ${getLineColor(props.status)}`}
      ></div>
    </>
  );
};
export const Step_3 = (props: { status }) => {
  return (
    <>
      <div
        className={`w-full h-[3px] rounded-xl ${getLineColor(props.status)}`}
      ></div>
      <div className="flex flex-row  items-center space-x-1 flex-none">
        <div className="h-6 w-6 rounded-full">
          {getStatusIcon(props.status)}
        </div>
        <span className="">Confirmed</span>
      </div>
    </>
  );
};
const SuccessIcon = () => {
  return (
    <div className="w-6 h-6 rounded-full bg-green-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className=" w-5 h-5 sm:w-6 sm:h-6 text-white"
      >
        <path
          fillRule="evenodd"
          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
const LoadingIcon = () => {
  return (
    <div className="flex animate-spin justify-center col-start-2 row-start-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 sm:w-6 sm:h-6  feather feather-refresh-cw"
      >
        <polyline points="23 4 23 10 17 10"></polyline>
        <polyline points="1 20 1 14 7 14"></polyline>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
      </svg>
    </div>
  );
};
const ErrorIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 sm:w-6 sm:h-6 text-red-500"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const BlockedIcon = () => {
  return (
    <div className="sm-5 sm:5 sm:h-6 sm:w-6  rounded-full bg-gray-300"></div>
  );
};
