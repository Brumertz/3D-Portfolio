const styles = {
  // Padding
    padding: (direction = "x") => {
      const values = {
        x: "sm:px-[16px] px-[6px] ",
        y: "sm:py-[16px] py-[10px]",
        all: "sm:px-[16px] px-[6px] sm:py-[16px] py-[10px]",
      };
      return values[direction] || values.x;
    },

  heroText: {
    head: "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    sub: "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  },

  sectionText: {
    head: "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sub: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  },
};

export { styles };
