import clsx from "clsx";
import { ChangeEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  name?: string;
  type?: string;
  isPhone?: boolean;
  error: string | null;
  onPhoneChange?: (value: string) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function Input({
  placeholder,
  className,
  value,
  name,
  type = "text",
  onChange = () => {},
  isPhone = false,
  error,
  onPhoneChange,
}: InputProps) {
  return (
    <>
      {isPhone ? (
        <PhoneInput
          country={"az"}
          onlyCountries={["az", "ru", "tr", "us"]}
          inputClass={clsx(
            "!bg-[#f2f2f2] !py-3 !px-2 !pl-12 !rounded-xl !outline-none !w-full !h-auto !border-none",
            className,
          )}
          dropdownClass="!rounded-xl !bg-[#f2f2f2] !shadow-lg"
          buttonClass="!bg-[#f2f2f2] !border-none !rounded-l-xl"
          specialLabel=""
          containerClass="!w-full"
          value={value}
          onChange={onPhoneChange}
        />
      ) : (
        <div className="flex flex-col gap-2">
          <input
            type={type}
            className={clsx(
              "bg-[#f2f2f2] py-3 px-2 rounded-xl outline-none",
              className,
            )}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
          />

          {error && <span className="text-red-600 text-xs ">{error}</span>}
        </div>
      )}
    </>
  );
}
