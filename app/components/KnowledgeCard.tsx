const KnowledgeCard: React.FC<{ article: KnowledgeArticle }> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg p-3">
      <h4 className="font-semibold text-gray-800 text-sm mb-1">{article.title}</h4>
      <p className="text-xs text-gray-600 line-clamp-2">{article.description}</p>
    </div>
  );
};

export default KnowledgeCard;