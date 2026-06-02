import React, { useState } from 'react';
import { ChevronRight, Sparkles, TrendingUp, Zap, Users, Hash, MessageCircle, ArrowRight } from 'lucide-react';

const SocialMediaAIAgent = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({
    contentIdea: { niche: '', targetAudience: '' },
    trending: { industry: '' },
    postGen: { contentType: '', tone: '' },
    keywords: { topic: '', platform: '' },
    influencers: { category: '', followerRange: '' }
  });
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});

  // Mock API calls - Replace with actual API integrations
  const generateContent = async (feature, data) => {
    setLoading(prev => ({ ...prev, [feature]: true }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockResponses = {
      contentIdea: `🎯 Content Ideas for ${data.niche}:\n\n1. "Day in the life" behind-the-scenes content\n2. Customer success stories & testimonials\n3. Educational tutorials & how-tos\n4. Industry trends & insights\n5. Interactive polls & Q&A sessions\n\nTarget Audience: ${data.targetAudience}`,
      
      trending: `🔥 Trending Topics in ${data.industry}:\n\n1. #WebDevelopment2024 - Brands using: AI automation, code tutorials\n2. #SustainableBusiness - Focus on: eco-friendly practices\n3. #TechTrends - Hot take: AI ethics, privacy\n4. #CreatorEconomy - Strategy: monetization tutorials\n5. #LocalBusiness - Leverage: community stories`,
      
      postGen: `✨ AI-Generated Post:\n\n"Just helped 50 brands scale their social presence 📈 The secret? Authentic storytelling + data-driven strategy. What's your biggest social media challenge?\n\n#MarketingTips #SocialMediaStrategy #GrowthHacking"\n\nTone: ${data.tone}\nEngagement score: 9.2/10`,
      
      keywords: `🏷️ Keywords & Hashtags for ${data.topic}:\n\nPrimary Keywords:\n• ${data.topic} tips\n• ${data.topic} strategy\n• ${data.topic} 2024\n\nTrending Hashtags:\n#${data.topic}Community\n#${data.topic}Growth\n#${data.topic}Expert\n\nCaptions:\n"Transform your ${data.topic} game with these proven strategies. Comment below! 👇"`,
      
      influencers: `👥 ${data.category} Influencers:\n\n🟢 NANO (1K-10K followers):\n• @creator_sarah (8.5K, 12% engagement)\n• @daily_${data.category.toLowerCase()} (6.2K, 15% engagement)\n\n🔵 MICRO (10K-100K followers):\n• @${data.category.toLowerCase()}_pro (45K, 8.5% engagement)\n• @influencer_${data.category.toLowerCase()} (62K, 10% engagement)\n\n🟣 MACRO (100K+ followers):\n• @big_influencer_${data.category.toLowerCase()} (250K, 6% engagement)`
    };
    
    setResults(prev => ({ ...prev, [feature]: mockResponses[feature] }));
    setLoading(prev => ({ ...prev, [feature]: false }));
  };

  const handleInputChange = (feature, field, value) => {
    setFormData(prev => ({
      ...prev,
      [feature]: { ...prev[feature], [field]: value }
    }));
  };

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Sparkles className="w-8 h-8 text-purple-400" />
          SocialAI Agent
        </div>
        <button
          onClick={() => setActiveTab('dashboard')}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Your AI Social Media Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate viral content ideas, discover trending topics, create engaging posts, and find perfect influencers—all powered by AI. Everything you need to dominate social media, in one place.
          </p>
          <button
            onClick={() => setActiveTab('dashboard')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition"
          >
            Start Building <ArrowRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {[
            { icon: Sparkles, title: 'Content Ideas', desc: 'AI-powered ideas for your niche', color: 'purple' },
            { icon: TrendingUp, title: 'Trending Topics', desc: 'Discover what\'s hot right now', color: 'pink' },
            { icon: Zap, title: 'Post Generation', desc: 'Create viral-ready posts instantly', color: 'blue' },
            { icon: Hash, title: 'Keywords & Tags', desc: 'Perfect hashtags & keywords', color: 'green' },
            { icon: Users, title: 'Influencer Finder', desc: 'Find nano to macro influencers', color: 'orange' },
            { icon: MessageCircle, title: 'Captions', desc: 'Engagement-optimized captions', color: 'cyan' },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition backdrop-blur-sm"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8" />
            <h1 className="text-3xl font-bold">SocialAI Agent Dashboard</h1>
          </div>
          <button
            onClick={() => setActiveTab('home')}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition"
          >
            Back to Home
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {[
            { id: 'content-ideas', label: '💡 Content Ideas', icon: Sparkles },
            { id: 'trending', label: '🔥 Trending', icon: TrendingUp },
            { id: 'posts', label: '✨ Post Gen', icon: Zap },
            { id: 'keywords', label: '🏷️ Keywords', icon: Hash },
            { id: 'influencers', label: '👥 Influencers', icon: Users },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Ideas */}
        {activeTab === 'content-ideas' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-400" />
                Generate Content Ideas
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="e.g., Tech, Fashion, Fitness"
                  value={formData.contentIdea.niche}
                  onChange={(e) => handleInputChange('contentIdea', 'niche', e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="e.g., 18-35 year old professionals"
                  value={formData.contentIdea.targetAudience}
                  onChange={(e) => handleInputChange('contentIdea', 'targetAudience', e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 outline-none"
                />
                <button
                  onClick={() => generateContent('contentIdea', formData.contentIdea)}
                  disabled={loading.contentIdea}
                  className="w-full p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
                >
                  {loading.contentIdea ? 'Generating...' : 'Generate Ideas'}
                </button>
              </div>
            </div>
            {results.contentIdea && (
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Generated Ideas</h3>
                <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">{results.contentIdea}</pre>
              </div>
            )}
          </div>
        )}

        {/* Trending Topics */}
        {activeTab === 'trending' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-red-400" />
                Trending Topics Analyzer
              </h2>
              <div className="space-y-4">
                <select
                  value={formData.trending.industry}
                  onChange={(e) => handleInputChange('trending', 'industry', e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-red-500 outline-none"
                >
                  <option value="">Select Industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Health & Wellness">Health & Wellness</option>
                  <option value="Finance">Finance</option>
                  <option value="Entertainment">Entertainment</option>
                </select>
                <button
                  onClick={() => generateContent('trending', formData.trending)}
                  disabled={loading.trending}
                  className="w-full p-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
                >
                  {loading.trending ? 'Analyzing...' : 'Analyze Trends'}
                </button>
              </div>
            </div>
            {results.trending && (
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Trending Insights</h3>
                <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">{results.trending}</pre>
              </div>
            )}
          </div>
        )}

        {/* Post Generation */}
        {activeTab === 'posts' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                AI Post Generator
              </h2>
              <div className="space-y-4">
                <select
                  value={formData.postGen.contentType}
                  onChange={(e) => handleInputChange('postGen', 'contentType', e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-yellow-500 outline-none"
                >
                  <option value="">Content Type</option>
                  <option value="Educational">Educational</option>
                  <option value="Entertaining">Entertaining</option>
                  <option value="Promotional">Promotional</option>
                  <option value="Inspirational">Inspirational</option>
                </select>
                <select
                  value={formData.postGen.tone}
                  onChange={(e) => handleInputChange('postGen', 'tone', e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-yellow-500 outline-none"
                >
                  <option value="">Tone</option>
                  <option value="Professional">Professional</option>
                  <option value="Casual">Casual</option>
                  <option value="Witty">Witty</option>
                  <option value="Motivational">Motivational</option>
                </select>
                <button
                  onClick={() => generateContent('postGen', formData.postGen)}
                  disabled={loading.postGen}
                  className="w-full p-3 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
                >
                  {loading.postGen ? 'Generating...' : 'Generate Post'}
                </button>
              </div>
            </div>
            {results.postGen && (
              <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Your Post</h3>
                <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">{results.postGen}</pre>
              </div>
            )}
          </div>
        )}

        {/* Keywords & Hashtags */}
        {activeTab === 'keywords' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Hash className="w-6 h-6 text-green-400" />
                Keywords & Hashtags
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="e.g., Digital Marketing"
                  value={formData.keywords.topic}
                  onChange={(e) => handleInputChange('keywords', 'topic', e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 outline-none"
                />
                <select
                  value={formData.keywords.platform}
                  onChange={(e) => handleInputChange('keywords', 'platform', e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-green-500 outline-none"
                >
                  <option value="">Platform</option>
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Twitter">Twitter</option>
                  <option value="LinkedIn">LinkedIn</option>
                </select>
                <button
                  onClick={() => generateContent('keywords', formData.keywords)}
                  disabled={loading.keywords}
                  className="w-full p-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
                >
                  {loading.keywords ? 'Generating...' : 'Generate Keywords'}
                </button>
              </div>
            </div>
            {results.keywords && (
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Keywords & Tags</h3>
                <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">{results.keywords}</pre>
              </div>
            )}
          </div>
        )}

        {/* Influencer Finder */}
        {activeTab === 'influencers' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-cyan-400" />
                Influencer Finder
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="e.g., Tech, Fitness, Beauty"
                  value={formData.influencers.category}
                  onChange={(e) => handleInputChange('influencers', 'category', e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 outline-none"
                />
                <select
                  value={formData.influencers.followerRange}
                  onChange={(e) => handleInputChange('influencers', 'followerRange', e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-cyan-500 outline-none"
                >
                  <option value="">Follower Range</option>
                  <option value="Nano (1K-10K)">Nano (1K-10K)</option>
                  <option value="Micro (10K-100K)">Micro (10K-100K)</option>
                  <option value="Macro (100K+)">Macro (100K+)</option>
                  <option value="All">All</option>
                </select>
                <button
                  onClick={() => generateContent('influencers', formData.influencers)}
                  disabled={loading.influencers}
                  className="w-full p-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
                >
                  {loading.influencers ? 'Finding...' : 'Find Influencers'}
                </button>
              </div>
            </div>
            {results.influencers && (
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Influencer Matches</h3>
                <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">{results.influencers}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return activeTab === 'home' ? <LandingPage /> : <Dashboard />;
};

export default SocialMediaAIAgent;