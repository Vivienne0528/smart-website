import { createContext, useEffect, useRef, useState } from "react";

export const UseContext = createContext(null);

const UseContextProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const checkboxRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section, ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section); // 设置当前激活的按钮
    setIsMenuOpened(false);
    console.log(`scroll to ${section}`);

    // const checkbox = window.menuCheckboxRef;
    // if (checkbox?.current) {
    //   checkbox.current.checked = false;
    // }
  };

  return (
    <UseContext.Provider
      value={{
        isScrolled,
        setIsScrolled,
        isMenuOpened,
        activeSection,
        scrollToSection,
      }}
    >
      {children}
    </UseContext.Provider>
  );
};

export default UseContextProvider;
