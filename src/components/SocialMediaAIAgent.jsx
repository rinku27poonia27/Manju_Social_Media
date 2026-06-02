import React, { useState } from 'react';
import { Sparkles, TrendingUp, Zap, Users, Hash, MessageCircle, ArrowRight } from 'lucide-react';

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

  const generateContent = async (feature, data) => {
    if (!data || Object.values(data).every(v => !v)) {
      alert('Please fill in all fields!');
      return;
    }

    setLoading(prev => ({ ...prev, [feature]: true }));
    await new Promise(resolve => setTimeout(resolve, 1500));

    const mockResponses = {
      contentIdea: `🎯 Content Ideas:\n\n1. Behind the scenes content\n2. Customer success stories\n3. Educational tutorials\n4. Industry trends\n5. Q&A sessions`,
      trending: `🔥 Trending Topics:\n\n1. Trending topic 1\n2. Trending topic 2\n3. Trending topic 3\n4. Trending topic 4\n5. Trending topic 5`,
      postGen: `✨ AI Post:\n\n"Amazing content here! 📈 Check this out!"\n\nEngagement: 9/10`,
      keywords: `🏷️ Keywords:\n\nTop Keywords:\n• Keyword 1\n• Keyword 2\n• Keyword 3\n\nHashtags:\n#Trending\n#Growth`,
      influencers: `👥 Influencers Found:\n\nNano: 2 creators\nMicro: 3 creators\nMacro: 1 creator`
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

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black text-white">
      <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Sparkles className="w-8 h-8 text-purple-400" />
          SocialAI Agent
        </div>
        <button onClick={() => setActiveTab('dashboard')} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
          Get Started
        </button>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-purple-300">Your AI Social Media Manager</h1>
        <p className="text-xl text-gray-300 mb-8">Generate content ideas, find trends, create posts, and discover influencers!</p>
        <button onClick={() => setActiveTab('dashboard')} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold text-lg">
          Start Now
        </button>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button onClick={() => setActiveTab('home')} className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg">
            Back
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {[
            { id: 'content-ideas', label: '💡 Content' },
            { id: 'trending', label: '🔥 Trending' },
            { id: 'posts', label: '✨ Posts' },
            { id: 'keywords', label: '🏷️ Tags' },
            { id: 'influencers', label: '👥 Influencers' },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`p-3 rounded-lg font-semibold ${activeTab === tab.id ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-300'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'content-ideas' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Content Ideas</h2>
              <input type="text" placeholder="Niche (e.g., Tech)" value={formData.contentIdea.niche} onChange={(e) => handleInputChange('contentIdea', 'niche', e.target.value)} className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white mb-4" />
              <input type="text" placeholder="Target Audience" value={formData.contentIdea.targetAudience} onChange={(e) => handleInputChange('contentIdea', 'targetAudience', e.target.value)} className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white mb-4" />
              <button onClick={() => generateContent('contentIdea', formData.contentIdea)} disabled={loading.contentIdea} className="w-full p-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700">
                {loading.contentIdea ? 'Generating...' : 'Generate'}
              </button>
            </div>
            {results.contentIdea && <div className="bg-purple-500/20 border border-purple-400/30 rounded-2xl p-6"><h3 className="text-lg font-bold text-white mb-4">Results</h3><pre className="text-gray-300 whitespace-pre-wrap">{results.contentIdea}</pre></div>}
          </div>
        )}

        {activeTab === 'trending' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Trending Topics</h2>
              <select value={formData.trending.industry} onChange={(e) => handleInputChange('trending', 'industry', e.target.value)} className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white mb-4">
                <option value="">Select Industry</option>
                <option value="Tech">Tech</option>
                <option value="Fashion">Fashion</option>
                <option value="Health">Health</option>
              </select>
              <button onClick={() => generateContent('trending', formData.trending)} disabled={loading.trending} className="w-full p-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700">
                {loading.trending ? 'Analyzing...' : 'Analyze'}
              </button>
            </div>
            {results.trending && <div className="bg-red-500/20 border border-red-400/30 rounded-2xl p-6"><h3 className="text-lg font-bold text-white mb-4">Results</h3><pre className="text-gray-300 whitespace-pre-wrap">{results.trending}</pre></div>}
          </div>
        )}

        {activeTab === 'posts' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Post Generator</h2>
              <select value={formData.postGen.contentType} onChange={(e) => handleInputChange('postGen', 'contentType', e.target.value)} className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white mb-4">
                <option value="">Content Type</option>
                <option value="Educational">Educational</option>
                <option value="Fun">Fun</option>
              </select>
              <select value={formData.postGen.tone} onChange={(e) => handleInputChange('postGen', 'tone', e.target.value)} className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white mb-4">
                <option value="">Tone</option>
                <option value="Professional">Professional</option>
                <option value="Casual">Casual</option>
              </select>
              <button onClick={() => generateContent('postGen', formData.postGen)} disabled={loading.postGen} className="w-full p-3 bg-yellow-600 text-white rounded-lg font-bold hover:bg-yellow-700">
                {loading.postGen ? 'Creating...' : 'Create'}
              </button>
            </div>
            {results.postGen && <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-2xl p-6"><h3 className="text-lg font-bold text-white mb-4">Results</h3><pre className="text-gray-300 whitespace-pre-wrap">{results.postGen}</pre></div>}
          </div>
        )}

        {activeTab === 'keywords' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Keywords</h2>
              <input type="text" placeholder="Topic" value={formData.keywords.topic} onChange={(e) => handleInputChange('keywords', 'topic', e.target.value)} className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white mb-4" />
              <select value={formData.keywords.platform} onChange={(e) => handleInputChange('keywords', 'platform', e.target.value)} className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white mb-4">
                <option value="">Platform</option>
                <option value="Instagram">Instagram</option>
                <option value="TikTok">TikTok</option>
              </select>
              <button onClick={() => generateContent('keywords', formData.keywords)} disabled={loading.keywords} className="w-full p-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700">
                {loading.keywords ? 'Finding...' : 'Find'}
              </button>
            </div>
            {results.keywords && <div className="bg-green-500/20 border border-green-400/30 rounded-2xl p-6"><h3 className="text-lg font-bold text-white mb-4">Results</h3><pre className="text-gray-300 whitespace-pre-wrap">{results.keywords}</pre></div>}
          </div>
        )}

        {activeTab === 'influencers' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Influencers</h2>
              <input type="text" placeholder="Category" value={formData.influencers.category} onChange={(e) => handleInputChange('influencers', 'category', e.target.value)} className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white mb-4" />
              <select value={formData.influencers.followerRange} onChange={(e) => handleInputChange('influencers', 'followerRange', e.target.value)} className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white mb-4">
                <option value="">Range</option>
                <option value="Nano">Nano</option>
                <option value="Micro">Micro</option>
                <option value="Macro">Macro</option>
              </select>
              <button onClick={() => generateContent('influencers', formData.influencers)} disabled={loading.influencers} className="w-full p-3 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-700">
                {loading.influencers ? 'Finding...' : 'Find'}
              </button>
            </div>
            {results.influencers && <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-2xl p-6"><h3 className="text-lg font-bold text-white mb-4">Results</h3><pre className="text-gray-300 whitespace-pre-wrap">{results.influencers}</pre></div>}
          </div>
        )}
      </div>
    </div>
  );

  return activeTab === 'home' ? <LandingPage /> : <Dashboard />;
};

export default SocialMediaAIAgent;