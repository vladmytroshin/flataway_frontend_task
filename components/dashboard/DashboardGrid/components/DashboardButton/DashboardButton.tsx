"use client";

import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";

import { DashboardButtonProps } from "./types";
import { DashboardModalMenu } from "../DashboardModalMenu";
import { apiService } from "@/services";

export default function DashboardButton({ config }: DashboardButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const toggleMenu = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  }, []);

  const handleButtonClick = useCallback(() => {
    if (config.isConfigured && config.hyperlink) {
      const isExternal = config.hyperlink.startsWith("http");
      isExternal
        ? window.open(config.hyperlink, "_blank")
        : router.push(config.hyperlink);
    } else {
      router.push(`/configure/${config.id}`);
    }
  }, [config, router]);

  const handleEditClick = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      setShowMenu(false);
      router.push(`/configure/${config.id}`);
    },
    [config.id, router]
  );

  const handleDeleteClick = useCallback(
    async (e: MouseEvent) => {
      e.stopPropagation();
      setShowMenu(false);
      await apiService.deleteButtonConfigFromStorage(config.id);
      router.refresh();
    },
    [config.id, router]
  );

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="relative group">
      <div
        className="w-full h-32 rounded-lg shadow-md hover:shadow-xl hover:scale-101 transition-all duration-200 cursor-pointer relative overflow-hidden"
        style={{ backgroundColor: config.color }}
        onClick={handleButtonClick}
      >
        <div className="absolute inset-0 bg-opacity-10 hover:bg-opacity-5 transition-all duration-200"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          {config.isConfigured ? (
            <>
              <div className="w-6 h-6 flex items-center justify-center mb-2">
                <FaExternalLinkAlt className="text-xl" />
              </div>
              <span className="text-sm font-medium text-center px-2">
                {config.title || `Button ${config.id}`}
              </span>
            </>
          ) : (
            <>
              <div className="w-6 h-6 flex items-center justify-center mb-2">
                <FaPlus className="text-xl" />
              </div>
              <span className="text-sm font-medium">Configure</span>
            </>
          )}
        </div>

        {config.isConfigured && (
          <>
            <button
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 cursor-pointer"
              onClick={toggleMenu}
            >
              <IoIosMore className="text-white text-sm" />
            </button>

            {showMenu && (
              <div ref={menuRef}>
                <DashboardModalMenu
                  onEdit={handleEditClick}
                  onDelete={handleDeleteClick}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
