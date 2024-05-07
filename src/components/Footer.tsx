import Input from "./inputs/Input";

const style = {
  eachItems: "w-1/2 flex justify-center items-start flex-col gap-y-2",
  title: "text-[14px] font-semibold",
  item: "min-w-max text-[14px] font-regular",
};

const Footer = () => {
  return (
    <>
      <footer className=" flex justify-center items-center flex-col bg-neutral-8 mt-6 py-8 px-5 md:px-16">
        <div className="w-full container sm:w-3/4 md:w-full md:flex md:justify-center md:items-center md:flex-row md:gap-x-24">
          <div className="w-full md:w-1/3">
            <p className="w-full text-center text-white text-[13px] whitespace-nowrap font-semibold">
              Join our club, get 15% off for your Birthday
            </p>
            <div className="w-full relative">
              <Input
                placeHolder="Enter Your Email Address"
                name="joinClubEmailAddress"
                type="email"
                className="w-full h-10 bg-transparent border-[1px] border-primary-50 text-white mt-4 placeholder:text-[12px] placeholder:text-neutral-4"
              />
              <div className="absolute top-7 right-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99935 2.66699L7.05935 3.60699L10.7793 7.33366H2.66602V8.66699H10.7793L7.05935 12.3937L7.99935 13.3337L13.3327 8.00033L7.99935 2.66699Z"
                    fill="#D1D9CF"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full flex justify-start items-center gap-x-2 mt-2">
              <div className="min-w-max flex justify-center items-center">
                <Input
                  type="checkbox"
                  className="w-4 h-4"
                  name="emailCheckbox"
                  id="emailCheckbox"
                />
              </div>
              <label htmlFor="emailCheckbox" className="text-white text-left text-[10px]">
                By Submittng your email, you agree to receive advertising emails
                from Modimal.
              </label>
            </div>
          </div>
          <div className="w-full flex justify-center items-center flex-col mt-6 md:gap-x-2 md:flex-row md:items-start md:w-2/3">
            <div className="w-full flex justify-center items-start text-white gap-x-4">
              <div className={style.eachItems}>
                <p className={style.title}>About Modimal</p>
                <a href="#" className={style.item}>
                  Collection
                </a>
                <a href="#" className={style.item}>
                  Sustainability
                </a>
                <a href="#" className={style.item}>
                  Privacy Policy
                </a>
                <a href="#" className={style.item}>
                  Support System
                </a>
                <a href="#" className={style.item}>
                  Terms & Condition
                </a>
                <a href="#" className={style.item}>
                  Copyright Notice
                </a>
              </div>
              <div className={style.eachItems}>
                <p className={style.title}>Help & Support</p>
                <a href="#" className={style.item}>
                  Orders & Shipping
                </a>
                <a href="#" className={style.item}>
                  Returns & Refunds
                </a>
                <a href="/faq" className={style.item}>
                  FAQs
                </a>
                <a href="#" className={style.item}>
                  Contact Us
                </a>
              </div>
            </div>
            <div className="w-full flex justify-center items-start flex-col gap-y-2 text-white mt-6 md:mt-0 md:w-1/2">
              <p className={style.title}>Join Up</p>
              <a href="#" className={style.item}>
                Modimal Club
              </a>
              <a href="#" className={style.item}>
                Careers
              </a>
              <a href="#" className={style.item}>
                Visit Us
              </a>
            </div>
          </div>
        </div>
        <div className="w-full container sm:w-3/4 md:w-full mt-4">
            <div className="flex justify-start items-center gap-x-4">
              {/* instagram */}
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9321 7.05204C23.8744 5.77422 23.668 4.89992 23.3751 4.13611C23.0679 3.34828 22.6598 2.67574 21.9925 2.01281C21.3251 1.34988 20.6578 0.931946 19.8704 0.629304C19.1071 0.331465 18.2333 0.129704 16.9563 0.0720576C15.6744 0.0144115 15.2663 0 12.0113 0C8.75142 0 8.34334 0.0144115 7.06628 0.0720576C5.78923 0.129704 4.91545 0.336269 4.1521 0.629304C3.35994 0.93675 2.68781 1.34508 2.02527 2.01281C1.36274 2.68054 0.945058 3.34828 0.642598 4.13611C0.349739 4.89992 0.143298 5.77422 0.0856863 7.05204C0.0280748 8.33467 0.0136719 8.743 0.0136719 12C0.0136719 15.2618 0.0280748 15.6701 0.0856863 16.948C0.143298 18.2258 0.349739 19.1001 0.642598 19.8639C0.949859 20.6517 1.35794 21.3243 2.02527 21.9872C2.68781 22.6549 3.35994 23.0681 4.1473 23.3707C4.91065 23.6685 5.78443 23.8703 7.06148 23.9279C8.34334 23.9856 8.75142 24 12.0065 24C15.2663 24 15.6744 23.9856 16.9515 23.9279C18.2285 23.8703 19.1023 23.6637 19.8656 23.3707C20.653 23.0633 21.3251 22.6549 21.9877 21.9872C22.6502 21.3195 23.0679 20.6517 23.3703 19.8639C23.668 19.1001 23.8696 18.2258 23.9273 16.948C23.9849 15.6653 23.9993 15.257 23.9993 12C23.9993 8.743 23.9897 8.32986 23.9321 7.05204ZM21.7764 16.8519C21.7236 18.024 21.5268 18.6629 21.3635 19.0809C21.1475 19.6381 20.8834 20.0416 20.461 20.4644C20.0385 20.8871 19.64 21.1417 19.0783 21.3675C18.6558 21.5308 18.0173 21.7278 16.8506 21.7806C15.588 21.8383 15.2087 21.8527 12.0017 21.8527C8.79463 21.8527 8.41535 21.8383 7.1527 21.7806C5.98127 21.7278 5.34274 21.5308 4.92505 21.3675C4.36814 21.1513 3.96486 20.8871 3.54238 20.4644C3.11989 20.0416 2.86544 19.6429 2.6398 19.0809C2.47656 18.6581 2.27973 18.0192 2.22691 16.8519C2.1693 15.5885 2.1549 15.209 2.1549 12C2.1549 8.79103 2.1693 8.41153 2.22691 7.14812C2.27973 5.97598 2.47656 5.33707 2.6398 4.91914C2.85584 4.36189 3.11989 3.95837 3.54238 3.53563C3.96486 3.11289 4.36334 2.85829 4.92505 2.63251C5.34754 2.46918 5.98607 2.27222 7.1527 2.21938C8.41535 2.16173 8.79463 2.14732 12.0017 2.14732C15.2087 2.14732 15.588 2.16173 16.8506 2.21938C18.0221 2.27222 18.6606 2.46918 19.0783 2.63251C19.6352 2.84868 20.0385 3.11289 20.461 3.53563C20.8834 3.95837 21.1379 4.35709 21.3635 4.91914C21.5268 5.34187 21.7236 5.98079 21.7764 7.14812C21.834 8.41153 21.8484 8.79103 21.8484 12C21.8484 15.209 21.8292 15.5885 21.7764 16.8519Z"
                    fill="white"
                  />
                  <path
                    d="M12.0023 5.83203C8.59364 5.83203 5.83789 8.59424 5.83789 12.0002C5.83789 15.4109 8.59844 18.1683 12.0023 18.1683C15.4062 18.1683 18.1668 15.4013 18.1668 12.0002C18.1668 8.58944 15.411 5.83203 12.0023 5.83203ZM12.0023 16.0018C9.79388 16.0018 8.00312 14.2099 8.00312 12.0002C8.00312 9.7904 9.79388 7.99856 12.0023 7.99856C14.2108 7.99856 16.0015 9.7904 16.0015 12.0002C16.0015 14.2099 14.2108 16.0018 12.0023 16.0018Z"
                    fill="white"
                  />
                  <path
                    d="M18.4051 7.03465C19.2006 7.03465 19.8454 6.38942 19.8454 5.5935C19.8454 4.79757 19.2006 4.15234 18.4051 4.15234C17.6097 4.15234 16.9648 4.79757 16.9648 5.5935C16.9648 6.38942 17.6097 7.03465 18.4051 7.03465Z"
                    fill="white"
                  />
                  <path
                    d="M0 12C0 15.2618 0.0144029 15.6701 0.0720144 16.948C0.129626 18.2258 0.336067 19.1001 0.628926 19.8639C0.936187 20.6517 1.34427 21.3243 2.0116 21.9872C2.67413 22.6501 3.34627 23.0681 4.13363 23.3707C4.89698 23.6685 5.77075 23.8703 7.04781 23.9279C8.32967 23.9856 8.73775 24 11.9928 24C15.2527 24 15.6607 23.9856 16.9378 23.9279C18.2148 23.8703 19.0886 23.6637 19.852 23.3707C20.6393 23.0633 21.3115 22.6549 21.974 21.9872C22.6365 21.3243 23.0542 20.6517 23.3567 19.8639C23.6543 19.1001 23.856 18.2258 23.9136 16.948C23.9712 15.6653 23.9856 15.257 23.9856 12C23.9856 8.73819 23.9712 8.32986 23.9136 7.05204C23.856 5.77422 23.6495 4.89992 23.3567 4.13611C23.0494 3.34828 22.6413 2.67574 21.974 2.01281C21.3163 1.34508 20.6441 0.931946 19.8568 0.629304C19.0934 0.331465 18.2196 0.129704 16.9426 0.0720576C15.6607 0.0144115 15.2527 0 11.9976 0C8.73775 0 8.32967 0.0144115 7.05261 0.0720576C5.77555 0.129704 4.90178 0.336269 4.13843 0.629304C3.35107 0.93675 2.67894 1.34508 2.0164 2.01281C1.35387 2.68054 0.936187 3.34828 0.633727 4.13611C0.336067 4.89992 0.129626 5.77422 0.0720144 7.05204C0.0144029 8.32986 0 8.73819 0 12ZM2.16523 12C2.16523 8.79584 2.17964 8.41153 2.23725 7.14812C2.29006 5.97598 2.4869 5.33707 2.65013 4.91914C2.86617 4.36189 3.13023 3.95837 3.55271 3.53563C3.97519 3.11289 4.37367 2.85829 4.93539 2.63251C5.35787 2.46918 5.9964 2.27222 7.16303 2.21938C8.42568 2.16173 8.80496 2.14732 12.012 2.14732C15.219 2.14732 15.5983 2.16173 16.861 2.21938C18.0324 2.27222 18.6709 2.46918 19.0886 2.63251C19.6455 2.84868 20.0488 3.11289 20.4713 3.53563C20.8938 3.95837 21.1482 4.35709 21.3739 4.91914C21.5371 5.34187 21.7339 5.98079 21.7868 7.14812C21.8444 8.41153 21.8588 8.79103 21.8588 12C21.8588 15.209 21.8444 15.5885 21.7868 16.8519C21.7339 18.024 21.5371 18.6629 21.3739 19.0809C21.1578 19.6381 20.8938 20.0416 20.4713 20.4644C20.0488 20.8871 19.6503 21.1417 19.0886 21.3675C18.6661 21.5308 18.0276 21.7278 16.861 21.7806C15.5983 21.8383 15.219 21.8527 12.012 21.8527C8.80496 21.8527 8.42568 21.8383 7.16303 21.7806C5.9916 21.7278 5.35307 21.5308 4.93539 21.3675C4.37848 21.1513 3.97519 20.8871 3.55271 20.4644C3.13023 20.0416 2.87578 19.6429 2.65013 19.0809C2.4869 18.6581 2.29006 18.0192 2.23725 16.8519C2.17483 15.5885 2.16523 15.2042 2.16523 12Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* facebook */}
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="12" fill="white" />
                  <path
                    d="M17.2031 12L16.6711 15.4688H13.875V23.8547C13.2633 23.9508 12.6375 24 12 24C11.3625 24 10.7367 23.9508 10.125 23.8547V15.4688H7.07812V12H10.125V9.35625C10.125 6.34922 11.9156 4.6875 14.6578 4.6875C15.9703 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8297C14.3391 7.875 13.875 8.80078 13.875 9.75V12H17.2031Z"
                    fill="#404040"
                  />
                </svg>
              </a>
              {/* pinterest */}
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9951 0C5.36076 0 0 5.37062 0 11.9951C0 17.0794 3.15919 21.4233 7.62156 23.1707C7.51296 22.2229 7.42411 20.7618 7.66104 19.7252C7.87824 18.7873 9.06293 13.7622 9.06293 13.7622C9.06293 13.7622 8.70754 13.0416 8.70754 11.9852C8.70754 10.3167 9.67502 9.07281 10.8795 9.07281C11.9062 9.07281 12.3998 9.84286 12.3998 10.761C12.3998 11.7877 11.7482 13.3278 11.4027 14.7594C11.1164 15.9539 12.0049 16.9313 13.1798 16.9313C15.3122 16.9313 16.9511 14.6804 16.9511 11.4422C16.9511 8.56932 14.8877 6.5652 11.9358 6.5652C8.51995 6.5652 6.51583 9.12216 6.51583 11.768C6.51583 12.7947 6.91073 13.9004 7.40436 14.5027C7.5031 14.6211 7.51296 14.7297 7.48334 14.8482C7.3945 15.2234 7.18716 16.0428 7.14768 16.2106C7.09831 16.4278 6.96996 16.4772 6.7429 16.3686C5.26202 15.6577 4.33402 13.4661 4.33402 11.7088C4.33402 7.92761 7.07856 4.45248 12.2616 4.45248C16.4179 4.45248 19.6561 7.41422 19.6561 11.383C19.6561 15.5195 17.0498 18.8466 13.4364 18.8466C12.2221 18.8466 11.0769 18.2147 10.6919 17.4644C10.6919 17.4644 10.0897 19.7548 9.94159 20.3176C9.67502 21.3641 8.94446 22.6672 8.45083 23.4669C9.57631 23.8124 10.761 24 12.0049 24C18.6294 24 24 18.6294 24 12.0049C23.9901 5.37062 18.6195 0 11.9951 0Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* tiktok */}
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0426 7.7043C17.5863 8.81139 19.4768 9.46282 21.5186 9.46282V6.35875C20.3789 6.11511 19.3699 5.51738 18.6112 4.68597C17.3127 3.87276 16.3771 2.53118 16.1028 0.960938H13.2402V16.7116C13.2337 18.5478 11.7489 20.0346 9.91773 20.0346C8.83868 20.0346 7.88006 19.5184 7.27294 18.7188C6.1888 18.1696 5.44534 17.0423 5.44534 15.7404C5.44534 13.8991 6.93267 12.4062 8.76772 12.4062C9.11931 12.4062 9.45819 12.4611 9.77606 12.5624V9.42436C5.83532 9.50607 2.66602 12.7375 2.66602 16.7117C2.66602 18.6955 3.45525 20.494 4.73618 21.8081C5.89176 22.5868 7.28286 23.041 8.77954 23.041C12.7908 23.041 16.0427 19.7775 16.0427 15.7518V7.7043H16.0426Z"
                    fill="white"
                  />
                  <path
                    d="M21.5182 6.3578V5.51848C20.4904 5.52005 19.4828 5.23119 18.6108 4.68493C19.3827 5.53306 20.3992 6.11787 21.5182 6.3578ZM16.1023 0.959983C16.0762 0.809911 16.0561 0.658851 16.0421 0.507214V0H12.0896V15.7508C12.0833 17.5868 10.5985 19.0736 8.76726 19.0736C8.22962 19.0736 7.72201 18.9455 7.27247 18.7179C7.87959 19.5174 8.83822 20.0335 9.91727 20.0335C11.7482 20.0335 13.2333 18.5469 13.2397 16.7107V0.959983H16.1023ZM9.77576 9.4234V8.52989C9.4455 8.48459 9.11253 8.46186 8.77915 8.46202C4.76754 8.46194 1.51562 11.7254 1.51562 15.7508C1.51562 18.2745 2.79368 20.4987 4.73579 21.807C3.45486 20.493 2.66563 18.6944 2.66563 16.7106C2.66563 12.7365 5.83486 9.50511 9.77576 9.4234Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          <div className="w-full flex justify-start items-center gap-x-4 mt-6">
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.72065 7.23967C6.75398 7.01967 6.82732 6.82634 6.92065 6.65967C7.01398 6.49301 7.14732 6.35301 7.31398 6.24634C7.47398 6.14634 7.67398 6.09967 7.92065 6.09301C8.07398 6.09967 8.21398 6.12634 8.34065 6.17968C8.47398 6.23968 8.59398 6.31967 8.68732 6.41967C8.78065 6.51967 8.85398 6.63967 8.91398 6.77301C8.97398 6.90634 9.00065 7.05301 9.00732 7.19967H10.2007C10.1873 6.88634 10.1273 6.59967 10.014 6.33967C9.90065 6.07967 9.74732 5.85301 9.54732 5.66634C9.34732 5.47967 9.10732 5.33301 8.82732 5.22634C8.54732 5.11967 8.24065 5.07301 7.90065 5.07301C7.46732 5.07301 7.08732 5.14634 6.76732 5.29967C6.44732 5.45301 6.18065 5.65301 5.96732 5.91301C5.75398 6.17301 5.59398 6.47301 5.49398 6.81967C5.39398 7.16634 5.33398 7.52634 5.33398 7.91301V8.09301C5.33398 8.47967 5.38732 8.83967 5.48732 9.18634C5.58732 9.53301 5.74732 9.83301 5.96065 10.0863C6.17398 10.3397 6.44065 10.5463 6.76065 10.693C7.08065 10.8397 7.46065 10.9197 7.89398 10.9197C8.20732 10.9197 8.50065 10.8663 8.77398 10.7663C9.04732 10.6663 9.28732 10.5263 9.49398 10.3463C9.70065 10.1663 9.86732 9.95967 9.98732 9.71968C10.1073 9.47967 10.1807 9.22634 10.1873 8.95301H8.99398C8.98732 9.09301 8.95398 9.21968 8.89398 9.33967C8.83398 9.45967 8.75398 9.55968 8.65398 9.64634C8.55398 9.73301 8.44065 9.79967 8.30732 9.84634C8.18065 9.89301 8.04732 9.90634 7.90732 9.91301C7.66732 9.90634 7.46732 9.85968 7.31398 9.75968C7.14732 9.65301 7.01398 9.51301 6.92065 9.34634C6.82732 9.17968 6.75398 8.97967 6.72065 8.75968C6.68732 8.53967 6.66732 8.31301 6.66732 8.09301V7.91301C6.66732 7.67967 6.68732 7.45967 6.72065 7.23967ZM8.00065 1.33301C4.32065 1.33301 1.33398 4.31967 1.33398 7.99967C1.33398 11.6797 4.32065 14.6663 8.00065 14.6663C11.6807 14.6663 14.6673 11.6797 14.6673 7.99967C14.6673 4.31967 11.6807 1.33301 8.00065 1.33301ZM8.00065 13.333C5.06065 13.333 2.66732 10.9397 2.66732 7.99967C2.66732 5.05967 5.06065 2.66634 8.00065 2.66634C10.9407 2.66634 13.334 5.05967 13.334 7.99967C13.334 10.9397 10.9407 13.333 8.00065 13.333Z"
                  fill="#CBCBCB"
                />
              </svg>
            </div>
            <p className="text-neutral-4 text-[10px]">
              2023 Modimal. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
