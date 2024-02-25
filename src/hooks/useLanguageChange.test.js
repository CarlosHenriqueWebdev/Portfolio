/* eslint-disable no-undef */
import { renderHook, act } from "@testing-library/react";
import useLanguageChange from "./useLanguageChange";

jest.mock("next/router", () => {
  let mockPathname = "/en"; // Default mocked pathname
  return {
    useRouter: () => ({
      asPath: mockPathname, // Return the current mocked pathname
    }),
    setMockPathname: (newPathname) => {
      mockPathname = newPathname; // Set a new mocked pathname
    },
  };
});

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      i18n: {
        changeLanguage: jest.fn(), // Mock the changeLanguage function
      },
    };
  },
}));

describe("useLanguageChange", () => {
  it("should initialize with correct initial state", () => {
    const { result } = renderHook(() => useLanguageChange());

    expect(result.current.isLanguageLoading).toBe(true);
  });

  it("changeLanguage if it is on the Homepage", () => {
    require("next/router").setMockPathname("/pt");

    const { result } = renderHook(() => useLanguageChange());

    delete window.location;
    window.location = { href: "" };

    act(() => {
      result.current.changeLanguage("pt");
    });

    expect(window.location.href).toBe("/pt");
  });

  it("changeLanguage if it isn't the Homepage", () => {
    require("next/router").setMockPathname("/NotHomepage");

    delete window.location;
    window.location = { href: "", pathname: "/en/resume" };

    const { result } = renderHook(() => useLanguageChange());

    act(() => {
      result.current.changeLanguage("pt");
    });

    expect(window.location.href).toBe("/pt/resume");
  });

  it("should call i18n.changeLanguage with 'en'", () => {
    const { result } = renderHook(() => useLanguageChange());

    act(() => {
      result.current.i18n.changeLanguage("en");
    });

    // Assert that i18n.changeLanguage was called with 'en'
    expect(result.current.i18n.changeLanguage).toHaveBeenCalledWith("en");
  });

  it("should call i18n.changeLanguage with 'pt'", () => {
    const { result } = renderHook(() => useLanguageChange());

    act(() => {
      result.current.i18n.changeLanguage("pt");
    });

    // Assert that i18n.changeLanguage was called with 'en'
    expect(result.current.i18n.changeLanguage).toHaveBeenCalledWith("pt");
  });
});
