"use client";

import { useEffect } from "react";
import packageInfo from "../package.json";
import buildInfo from "./build-info.json";

export default function ConsoleWelcome() {
  useEffect(() => {
    const formattedTime = new Date(buildInfo.timestamp).toUTCString();
    console.log(
      `%cWelcome, fellow builder 🚀\n%cHackBios • Engineering the Future\n\n%cVersion: %cv${packageInfo.version}\n%cUpdated: %c${formattedTime}\n%cRepo:    %chttps://github.com`,
      "color: #39ff14; font-family: monospace; font-size: 14px; font-weight: bold; line-height: 1.5;",
      "color: #dae6d0; font-family: monospace; font-size: 11px; line-height: 1.5;",
      "color: #85967c; font-family: monospace; font-size: 10px;",
      "color: #39ff14; font-family: monospace; font-size: 10px; font-weight: bold;",
      "color: #85967c; font-family: monospace; font-size: 10px;",
      "color: #ffffff; font-family: monospace; font-size: 10px;",
      "color: #85967c; font-family: monospace; font-size: 10px;",
      "color: #39ff14; font-family: monospace; font-size: 10px; text-decoration: underline;"
    );
  }, []);

  return null;
}
