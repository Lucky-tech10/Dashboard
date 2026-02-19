"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  Image,
  Mic,
  Menu,
  Search,
  TrendingUp,
  Headphones,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";
import KnowledgeCard from "./KnowledgeCard";
import { StatCard } from "@/utils/types";
import { mockKnowledge } from "@/utils/data";
import { Video } from "@/utils/types";
import Charts from "./Chart";

const Dashboard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const currentVideo = videos[currentIndex];

  useEffect(() => {
    // Simulate API fetch
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/videos");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const handleEdit = (id: string) => {
    console.log("Edit video:", id);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/videos?id=${id}`, { method: "DELETE" });

      setVideos((prev) => {
        const updated = prev.filter((v) => v.id !== id);

        if (currentIndex >= updated.length) {
          setCurrentIndex(Math.max(0, updated.length - 1));
        }

        return updated;
      });
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const statCards: StatCard[] = [
    {
      title: "Words Used",
      value: "0 / Unlimited",
      icon: <TrendingUp size={20} />,
      color: "bg-purple-50",
    },
    {
      title: "Images Used",
      value: "0 / Unlimited",
      icon: <Image size={20} />,
      color: "bg-blue-50",
    },
    {
      title: "Speech to Text",
      value: "0 / Unlimited",
      icon: <Headphones size={20} />,
      color: "bg-green-50",
    },
    {
      title: "Text to Speech",
      value: "0 / Unlimited",
      icon: <MessageCircle size={20} />,
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 flex flex-col min-h-0 content-section">
        {/* Header */}
        <header className="bg-white shrink-0 sticky top-0 z-30">
          <div className="py-3">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu size={20} />
              </button>

              <div className="flex-1 max-w-xs">
                <div className="relative bg-gray-50 rounded-lg px-4 py-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Search</span>
                  <Search className="text-purple-900" size={18} />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="hidden sm:flex items-center gap-2 bg-purple-900 text-white px-4 py-2 text-sm rounded-lg hover:bg-purple-800 transition-colors">
                  <BookOpen size={16} />
                  Tutorials
                </button>
                <button className="hidden sm:flex items-center gap-2 bg-purple-900 text-white px-4 py-2 text-sm rounded-lg hover:bg-purple-800 transition-colors">
                  <HelpCircle size={16} />
                  Support
                </button>
                <button className="hidden md:flex items-center gap-2 border border-gray-300 bg-white px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                  <span>English</span>
                  <div className="flex flex-col items-center spacey-y-0">
                    <ChevronUp size={12} />
                    <ChevronDown size={12} />
                  </div>
                </button>
                <div className="flex items-center gap-3 border-l border-gray-300 pl-3">
                  <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    N
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-sm font-semibold text-gray-800">
                      Nick cannon
                    </p>
                    <p className="text-xs text-gray-500">
                      Nick.cannon@email.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto mt-6 mb-4 no-scrollbar">
          <div className="">
            {/* Welcome Banner + Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 mb-4">
              {/* Welcome Banner */}
              <div className="lg:col-span-5 flex-1 bg-linear-to-r from-purple-900 to-purple-800 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col justify-center">
                  <h1 className="text-xl font-bold mb-1">WELCOME</h1>
                  <h2 className="text-lg font-semibold mb-1">Nick Nnaemeka</h2>
                  <p className="text-purple-100 text-xs max-w-67.5">
                    Your dashboard gives you views of key performance or Writing
                    in one spot
                  </p>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <img
                    src="/banner.svg"
                    alt="Dashboard illustration"
                    className="h-32 opacity-100"
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="lg:col-span-3 bg-purple-200 rounded-xl p-4 flex flex-col gap-3">
                <button className="bg-white rounded-lg p-3 text-left hover:border-purple-500 transition-colors flex items-center gap-3">
                  <FileText className="text-purple-900" size={20} />
                  <p className="font-semibold text-gray-800 text-sm">
                    All Document
                  </p>
                </button>
                <button className="bg-white rounded-lg p-3 text-left hover:border-purple-500 transition-colors flex items-center gap-3">
                  <Image className="text-purple-900" size={20} />
                  <p className="font-semibold text-gray-800 text-sm">
                    All AI images
                  </p>
                </button>
                <button className="bg-white rounded-lg p-3 text-left hover:border-purple-500 transition-colors flex items-center gap-3">
                  <Mic className="text-purple-900" size={20} />
                  <p className="font-semibold text-gray-800 text-sm">
                    All Speeches
                  </p>
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {statCards.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.color} rounded-lg p-3 border border-gray-200`}
                >
                  <div className="text-purple-900 mb-2 p-2 bg-white rounded-full w-fit">
                    {stat.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-0.5">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-gray-600">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <Charts />

            {/* Knowledge Base + Videos Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Knowledge Base */}
              <div className="bg-gray-50 rounded-lg p-5 overflow-hidden">
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-base font-bold text-black">
                    Knowledge Base
                  </h2>
                  <button className="bg-purple-900 text-white px-3 py-1.5 rounded-lg text-xs hover:bg-purple-800 transition-colors">
                    View All
                  </button>
                </div>
                <div className="space-y-3">
                  {mockKnowledge.map((article) => (
                    <KnowledgeCard key={article.id} article={article} />
                  ))}
                </div>
              </div>

              {/* Videos Section */}
              <div className="rounded-lg bg-gray-50 overflow-hidden h-fit">
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-base font-bold text-black">Demo</h2>
                  <button className="bg-purple-900 text-white px-3 py-1.5 rounded-lg text-xs hover:bg-purple-800 transition-colors">
                    View more
                  </button>
                </div>

                <div className="p-4">
                  {loading ? (
                    <div className="space-y-4">
                      <div className="animate-pulse">
                        <div className="bg-gray-200 h-32 rounded-lg mb-3"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {currentVideo && (
                        <VideoCard
                          key={currentVideo.id}
                          video={currentVideo}
                          onEdit={handleEdit}
                          onDelete={handleDelete}
                        />
                      )}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-end gap-2 p-4">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
