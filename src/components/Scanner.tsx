"use client";

import { useEffect, useState } from "react";

export default function Scanner() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <div className="scanner-line scan-animate"></div>
    </div>
  );
}
