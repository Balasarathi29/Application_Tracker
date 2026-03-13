"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("organize");
  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex gap-2 justify-center mb-4">
            <Button
              onClick={() => setActiveTab("organize")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Organize Application
            </Button>
            <Button
              onClick={() => setActiveTab("getHired")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "getHired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActiveTab("manageBoards")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "manageBoards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Manage Boards
            </Button>
          </div>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl ">
            {activeTab === "organize" && (
              <Image
                src="/hero_image/hero1.png"
                alt="Organize Application"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "getHired" && (
              <Image
                src="/hero_image/hero2.png"
                alt="Get Hired"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "manageBoards" && (
              <Image
                src="/hero_image/hero3.png"
                alt="Manage Boards"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
