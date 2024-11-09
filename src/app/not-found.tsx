import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center sectionContainer py-10">
      <div className="flex lg:flex-row flex-col-reverse items-center">
        <div className="flex flex-col md:gap-5 lg:w-1/2 lg:text-left text-center">
          <p className="lg:text-7xl md:text-5xl text-2xl md:leading-[100px] leading-[50px] font-bold ">
            <span className="text-green-500">Sorry!, </span>
            this page isn't available
          </p>
          <p className="md:text-xl text-lg font-light">
            The page you were looking for couldn't be found
          </p>
          <p className="text-gray-500 mt-10">
            Go back{" "}
            <Link href="/" className="text-green-500 font-medium">
              Homepage
            </Link>{" "}
            or visit our{" "}
            <Link href="/" className="text-green-500 font-medium">
              Help center
            </Link>
          </p>
        </div>

        <div className="animate-slide-in-top lg:w-full sm:w-96 w-full flex-1">
          <img
            src="/assets/images/robot.png"
            alt="image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
