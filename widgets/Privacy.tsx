import { MdSecurity } from "react-icons/md";

export function Privacy() {
  return (
    <div className="py-20 bg-slate-50">
      <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-0 lg:justify-around">
        <div className="flex flex-col gap-2 items-center text-center">
          <MdSecurity size={50} />
          <h3 className="max-w-65 text-lg font-medium">
            Verified transactions protect your privacy and security
          </h3>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <MdSecurity size={50} />
          <h3 className="max-w-65 text-lg font-medium">
            Verified transactions protect your privacy and security
          </h3>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <MdSecurity size={50} />
          <h3 className="max-w-65 text-lg font-medium">
            Verified transactions protect your privacy and security
          </h3>
        </div>
      </div>
    </div>
  );
}
