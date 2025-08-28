"use client";

import { useState } from "react";

export default function StepperForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState(Array(6).fill(""));

  const stepTitles = {
    1: "Create account / Sign in",
    2: "Enter verification code",
    3: "Enter your details",
  };

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Invalid email address";
      }
    }

    if (step === 2 && !name.trim()) {
      newErrors.name = "Name is required";
    }

    if (step === 2) {
      if (!email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Invalid email address";
      }
    }

    setErrors(newErrors);

    // Agar koi error nahi hai to true return kare
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    if (validateStep()) {
      alert(`Submitted ✅ \nName: ${name}\nEmail: ${email}`);
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // sirf numbers allow
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto-focus next box
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div>
      <div onClick={prevStep} disabled={step === 1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-gray-400"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </div>

      {/* Dynamic Heading */}
      <h2 className="text-[20px] font-affairstest font-normal leading-[40px] text-center mt-6">
        {stepTitles[step]}
      </h2>

      {/* Stepper Navigation */}
      <ol className="flex justify-center items-center space-x-8 text-sm font-medium sm:text-base pt-6">
        {/* Step 1 */}
        <li className="flex items-center">
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center rounded-full border font-semibold text-sm
        ${
          step >= 1
            ? "bg-black text-white border-black"
            : "bg-gray-200 text-gray-500 border-gray-300"
        }`}
          >
            1
          </div>
          <div className="w-16 h-0.5 bg-black ml-3"></div>
        </li>

        {/* Step 2 */}
        <li className="flex items-center">
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center rounded-full border font-semibold text-sm
        ${
          step >= 2
            ? "bg-black text-white border-black"
            : "bg-white text-gray-500 border-black"
        }`}
          >
            2
          </div>
          <div className="w-16 h-0.5 bg-black ml-3"></div>
        </li>

        {/* Step 3 */}
        <li className="flex items-center">
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center rounded-full border font-semibold text-sm
        ${
          step === 3
            ? "bg-black text-white border-black"
            : "bg-white text-gray-500 border-black"
        }`}
          >
            3
          </div>
        </li>
      </ol>

      {/* Step Content */}
      <div className="mt-6">
        {step === 1 && (
          <div>
            <div className="w-full mx-auto pt-[26px]">
              <div className="flex items-center border border-black rounded-sm sm:px-16 lg:px-8 px-3 py-2 w-full gap-x-3 sm:gap-x-10">
                <div className="w-5 h-5">
                  <img
                    src="/images/apple.png"
                    alt="apple"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="leading-5">SIGN IN WITH APPLE</p>
              </div>

              <div className="flex items-center border border-black rounded-sm sm:px-16 lg:px-8 px-3 py-2 w-full mt-5 gap-x-3 sm:gap-x-10">
                <div className="w-5 h-5">
                  <img
                    src="/images/google.png"
                    alt="google"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="leading-5">SIGN IN WITH GOOGLE</p>
              </div>

              <div className="flex items-center border border-black rounded-sm sm:px-16 lg:px-8 px-3 py-2 w-full mt-5 gap-x-3 sm:gap-x-10">
                <div className="w-5 h-5">
                  <img
                    src="/images/facebook.png"
                    alt="facebook"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="leading-5">SIGN IN WITH FACEBOOK</p>
              </div>
            </div>

            <div className="flex items-center pt-[45px]">
              <div className="flex-grow border-t border-black"></div>
              <span className="px-3 text-black font-graphik font-normal text-sm">
                or
              </span>
              <div className="flex-grow border-t border-black"></div>
            </div>

            <div className="relative">
              <label
                htmlFor="name"
                className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="block w-full h-[44px] border p-2 mt-[34px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-black placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6 dark:bg-gray-900 dark:text-white dark:outline-gray-600 dark:placeholder:text-gray-500 "
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            <div className="flex justify-start gap-3 pt-[30px]">
              <img
                src="/images/cross.png"
                alt=""
                className="w-[15px] h-[15px] mt-1"
              />
              <p className="text-[14px] font-graphik font-normal">
                By continuing, I agree to{" "}
                <span className="underline">Consignor Terms</span>, confirm that
                all items are on the{" "}
                <span className="underline">Designer List</span>, and adhere to
                A Retro Tales's{" "}
                <span className="underline">Quality Standards</span>. I confirm
                that I have read and understood the{" "}
                <span className="underline">Terms & Conditions</span> &{" "}
                <span className="underline">Privacy Policy</span>.
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="font-graphik font-light text-[14px leading-[22px] pt-[16px]">
              You're almost there! Verification code has been sent to{" "}
              <span className="font-medium text-[14px]">{email}</span>. Confirm
              your account by adding the verification code in the box.
            </p>
            <div className="flex justify-center gap-3 lg:gap-4 xl:gap-2 mt-[26px] mb-[16px]">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  className="w-12 h-14 sm:w-12 sm:h-14 text-center text-lg font-semibold border rounded-md outline-none focus:ring-2 focus:ring-black"
                />
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="mt-3 text-gray-600">Review your details & submit.</p>
            <p className="mt-2">
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col justify-between pt-[22px]">
        {step < 3 ? (
          <>
            {step === 2 ? (
              <>
                {/* Sign In Button */}
                <button
                  onClick={() => console.log("Sign In clicked")}
                  className="h-[42px] bg-black font-graphik font-light text-white rounded text-[13px] w-full"
                >
                  SIGN IN
                </button>

                {/* Add Button */}
                <button
                  onClick={() => console.log("Add clicked")}
                  className="h-[42px] border border-black font-graphik font-light text-black rounded text-[13px] w-full mt-3"
                >
                  SEND NEW CODE
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={nextStep}
                  className="h-[42px] bg-black font-graphik font-light text-white rounded text-[13px] w-full"
                >
                  SEND VERIFICATION CODE
                </button>

                {/* Helper text just below button (only for step 1) */}
                {step === 1 && (
                  <p className="font-graphik font-normal text-[14px] leading-[22px] pt-[30px]">
                    We will process your personal data in accordance with the A
                    Retro Tale’s{" "}
                    <span className="underline">Privacy Notice</span>.
                  </p>
                )}
              </>
            )}
          </>
        ) : (
          <button
            onClick={handleSubmit}
            className="h-[42px] bg-black font-graphik font-normal text-white rounded w-full"
          >
            CREATE ACCOUNT
          </button>
        )}
      </div>
    </div>
  );
}
