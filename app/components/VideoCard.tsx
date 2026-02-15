"use client";
import { Play, Edit2, Trash2 } from "lucide-react";
import { Video } from "@/utils/types";

const VideoCard: React.FC<{
  video: Video;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}> = ({ video, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative group">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-32 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
          <div className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Play size={18} className="text-purple-700" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-1.5 right-1.5 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
          {video.title}
        </h3>
        <div className="flex items-center justify-between">
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              video.status === "Published"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {video.status}
          </span>
          <div className="flex gap-1.5">
            <button
              onClick={() => onEdit(video.id)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title="Edit"
            >
              <Edit2 size={14} className="text-gray-600" />
            </button>
            <button
              onClick={() => onDelete(video.id)}
              className="p-1 hover:bg-red-50 rounded transition-colors"
              title="Delete"
            >
              <Trash2 size={14} className="text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
