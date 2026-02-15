import { Video, KnowledgeArticle } from "./types";

export const mockVideos: Video[] = [
  {
    id: "1",
    title: "AI Content Generation Tutorial",
    thumbnail: "/thumbnail-1.jpg",
    duration: "12:34",
    status: "Published",
    uploadDate: "2024-02-10",
  },
  {
    id: "2",
    title: "Getting Started with Voice AI",
    thumbnail: "/thumbnail-2.jpg",
    duration: "8:45",
    status: "Published",
    uploadDate: "2024-02-08",
  },
  {
    id: "3",
    title: "Advanced Speech Synthesis",
    thumbnail: "/thumbnail-3.jpg",
    duration: "15:22",
    status: "Draft",
    uploadDate: "2024-02-12",
  },
];

export const mockKnowledge: KnowledgeArticle[] = [
  {
    id: "1",
    title: "New Code",
    description:
      "As an AI language model, I can provide you with an example code snippet that demonstrates how to use...",
  },
  {
    id: "2",
    title: "Rowans First Day At Nursery Article",
    description:
      "Title: 10 Essential Tips to Prepare Your Child for Their First Day at Rowans Nursery Introduction:The...",
  },
  {
    id: "3",
    title: "Rowans First Day At Nursery Article",
    description:
      "Title: 10 Essential Tips to Prepare Your Child for Their First Day at Rowans Nursery Introduction:The...",
  },
];
