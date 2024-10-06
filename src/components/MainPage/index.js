import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation on mount
    setAnimate(true);
  }, []);

  return (
    <div className="bg-[#F8F8F8] h-fit">
      <div className="w-[78.39%] h-full mx-auto flex relative justify-center">
        <div className="flex items-center justify-center mt-[3.4rem] w-[14.75rem] absolute">
          <div className="w-full h-[6px] bg-[#FFDAC9] absolute"></div>
          <p className="font-bold text-[3.875rem] font-dinCondensed z-10">OUR MENU</p></div>
        <div className="absolute mt-[8.80rem] w-[6.31rem] h-[1.875rem bg-[#FFDAC9]"><p className="font-bold font-dinCondensed text-lg">KNOW MORE</p></div>
        <div className={`w-1/4 border-r-[1.5px] border-[#DFDFDF] ${animate ? "slide-down" : ""}`}>
          <div className="mt-[11.71rem] mb-[10.375rem] pl-[1.02rem] pr-[2.29rem]">
            <p className="font-dinCondensed mb-[2.54rem] font-bold text-[#333333] text-[3.875rem]">STARTERS</p>
            <div className="pl-[1.24rem]">
              <div>
                <p className="font-bold text-left text-[#333333] font-dinCondensed text-sm">QUINOA CROQUETTAS</p>
                <div className="mt-[0.55rem] mb-[0.7175rem]">
                  <p className="font-normal break-word text-left text-[#767676] font-gillSans text-[0.9375rem]">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                </div>
                <div className="border-2 border-[#FFDAC9] mt-[0.7175rem] h-[1.76rem] w-[3.34rem] flex items-center justify-center">
                  <p className="font-bold text-sm font-dindCondensed text-[#333333]">£4.95</p>
                </div>
              </div>
            </div>
            <div className="pl-[1.24rem] mt-[3.21rem] mb-[2.83rem]">
              <div>
                <p className="font-bold text-left text-[#333333] font-dinCondensed text-sm">CHIFA CHICHARRONES</p>
                <div className="mt-[0.55rem] mb-[0.7175rem]">
                  <p className="font-normal break-word text-left text-[#767676] font-gillSans text-[0.9375rem]">Slow cooked, crispy pork belly with sweet soy sauce</p>
                </div>
                <div className="border-2 border-[#FFDAC9] mt-[0.7175rem] h-[1.76rem] w-[3.34rem] flex items-center justify-center">
                  <p className="font-bold text-sm font-dindCondensed text-[#333333]">£6.95</p>
                </div>
              </div>
            </div>
            <div className="pl-[1.24rem]">
              <div>
                <p className="font-bold text-left text-[#333333] font-dinCondensed text-sm">CALAMARES</p>
                <div className="mt-[0.55rem] mb-[0.7175rem]">
                  <p className="font-normal break-word text-left text-[#767676] font-gillSans text-[0.9375rem]">Crispy baby squid with pickled jalapeño miso salsa</p>
                </div>
                <div className="border-2 border-[#FFDAC9] mt-[0.7175rem] h-[1.76rem] w-[3.34rem] flex items-center justify-center">
                  <p className="font-bold text-sm font-dindCondensed text-[#333333]">£4.95</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-1/4 border-r-[1.5px] border-[#DFDFDF] ${animate ? "slide-up" : ""}`}>
          <div className="overflow-hidden w-full mt-[19.875rem] mb-[4.6375rem]">
            <p className="relative right-[0.625rem] leading-[3.25rem] text-left font-dinCondensed mb-[2.54rem] font-bold text-[#333333] text-[3.875rem]">MAIN<br />COURSES</p>
            <div className="mx-auto w-[71.64%]">
              <div className="mb-[2.83rem]">
                <div>
                  <p className="font-bold text-left text-[#333333] font-dinCondensed text-sm">EL CLASICO</p>
                  <div className="mt-[0.55rem] mb-[0.7175rem]">
                    <p className="font-normal break-word text-left text-[#767676] font-gillSans text-[0.9375rem]">Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)</p>
                  </div>
                  <div className="border-2 border-[#FFDAC9] mt-[0.7175rem] h-[1.76rem] w-[3.34rem] flex items-center justify-center">
                    <p className="font-bold text-sm font-dindCondensed text-[#333333]">£8.95</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-left text-[#333333] font-dinCondensed text-sm">TIRADITO CALLAO</p>
                  <div className="mt-[0.55rem] mb-[0.7175rem]">
                    <p className="font-normal break-word text-left text-[#767676] font-gillSans text-[0.9375rem]">Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies</p>
                  </div>
                  <div className="border-2 border-[#FFDAC9] mt-[0.7175rem] h-[1.76rem] w-[3.34rem] flex items-center justify-center">
                    <p className="font-bold text-sm font-dindCondensed text-[#333333]">£8.95</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-1/4 border-r-[1.5px] border-[#DFDFDF] ${animate ? "slide-down" : ""}`}>
          <div className="overflow-hidden w-full mt-[17.43rem] mb-[16.26rem]">
            <p className="relative right-[0.625rem] leading-[3.25rem] text-left font-dinCondensed mb-[2.54rem] font-bold text-[#333333] text-[3.875rem]">SIDES</p>
            <div className="mx-auto w-[71.64%]">
              <div className="mb-[2.83rem]">
                <div>
                  <p className="font-bold text-left text-[#333333] font-dinCondensed text-sm">SUPER POLLO</p>
                  <div className="mt-[0.55rem] mb-[0.7175rem]">
                    <p className="font-normal break-word text-left text-[#767676] font-gillSans text-[0.9375rem]">Marinated corn fed chicken pieces with rocotto salsa</p>
                  </div>
                  <div className="border-2 border-[#FFDAC9] mt-[0.7175rem] h-[1.76rem] w-[3.34rem] flex items-center justify-center">
                    <p className="font-bold text-sm font-dindCondensed text-[#333333]">£4.95</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-left text-[#333333] font-dinCondensed text-sm">PATATAS FRITAS</p>
                  <div className="mt-[0.55rem] mb-[0.7175rem]">
                    <p className="font-normal break-word text-left text-[#767676] font-gillSans text-[0.9375rem]">Sweet potato fries with aji rocotto mayonnaise (v)</p>
                  </div>
                  <div className="border-2 border-[#FFDAC9] mt-[0.7175rem] h-[1.76rem] w-[3.34rem] flex items-center justify-center">
                    <p className="font-bold text-sm font-dindCondensed text-[#333333]">£3.95</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-1/4 ${animate ? "slide-up" : ""}`}>
          <div className="overflow-hidden w-full mt-[14.03rem] mb-[9.825rem]">
            <p className="relative right-[0.625rem] leading-[3.25rem] text-left font-dinCondensed mb-[2.54rem] font-bold text-[#333333] text-[3.875rem]">DESSERTS</p>
            <div className="mx-auto w-[71.64%]">
              <div className="mb-[2.83rem]">
                <div>
                  <p className="font-bold text-left text-[#333333] font-dinCondensed text-sm">ICECREAM</p>
                  <div className="mt-[0.55rem] mb-[0.7175rem]">
                    <p className="font-normal break-word text-left text-[#767676] font-gillSans text-[0.9375rem]">Lorem ipsum dolor sit amet salerma petrum sea</p>
                  </div>
                  <div className="border-2 border-[#FFDAC9] mt-[0.7175rem] h-[1.76rem] w-[3.34rem] flex items-center justify-center">
                    <p className="font-bold text-sm font-dindCondensed text-[#333333]">£3.95</p>
                  </div>
                </div>
              </div>
              <div className="mb-[2.83rem]">
                <div>
                  <p className="font-bold text-left text-[#333333] font-dinCondensed text-sm">TIRAMISU</p>
                  <div className="mt-[0.55rem] mb-[0.7175rem]">
                    <p className="font-normal break-word text-left text-[#767676] font-gillSans text-[0.9375rem]">Lorem ipsum dolor sit amet salerma petrum sea</p>
                  </div>
                  <div className="border-2 border-[#FFDAC9] mt-[0.7175rem] h-[1.76rem] w-[3.34rem] flex items-center justify-center">
                    <p className="font-bold text-sm font-dindCondensed text-[#333333]">£3.95</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-left text-[#333333] font-dinCondensed text-sm">CHOCOLATE BROWNIE</p>
                  <div className="mt-[0.55rem] mb-[0.7175rem]">
                    <p className="font-normal break-word text-left text-[#767676] font-gillSans text-[0.9375rem]">Lorem ipsum dolor sit amet salerma petrum sea</p>
                  </div>
                  <div className="border-2 border-[#FFDAC9] mt-[0.7175rem] h-[1.76rem] w-[3.34rem] flex items-center justify-center">
                    <p className="font-bold text-sm font-dindCondensed text-[#333333]">£3.95</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
