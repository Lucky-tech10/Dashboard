export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  status: 'Published' | 'Draft';
  uploadDate: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  description: string;
}

export interface StatCard {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}