import React, { useState } from 'react';
import { Sparkles, TrendingUp, Zap, Users, Hash, ArrowRight } from 'lucide-react';

const SocialMediaAIAgent = () => {
  const [page, setPage] = useState('home');
  const [niche, setNiche] = useState('');
  const [audience, setAudience] = useState('');
  const [industry, setIndustry] = useState('');
  const [contentType, setContentType] = useState('');
  const [tone, setTone] = useState('');
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('');
  const [category, setCategory] = useState('');
  const [range, setRange] = useState('');
  
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async (type) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    
    const results = {
      idea: `🎯 Content Ideas:\n\n1. Behind scenes\n2. Customer stories\n3. Tutorials\n4. Trends\n5. Q&A`,
      trend: `🔥 Trending:\n\n1. Trend 1\n2. Trend 2\n3. Trend 3`,
      post: `✨ Post:\n\n"Amazing content! 📈"\n\nScore: 9/10`,
      keyword: `🏷️ Keywords:\n\n• Key 1\n• Key 2\n• Key 3`,
      influencer: `👥 Influencers:\n\nNano: 2\nMicro: 3\nMacro: 1`
    };
    
    setResult(results[type]);
    setLoading(false);
  };

  if (page === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black text-white p-6">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-6xl font-bold mb-6">Social Media AI Agent</h1>
          <p className="text-xl text-gray-300 mb-8">Generate ideas, find trends, create posts, discover influencers</p>
          <button onClick={() => setPage('dashboard')} className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-lg">
            Start Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <div className="bg-purple-600 p-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button onClick={() => setPage('home')} className="px-4 py-2 bg-white/20 rounded-lg">Back</button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-5 gap-2 mb-8">
          <button onClick={() => setPage('idea')} className="p-3 bg-purple-600 rounded-lg">💡 Ideas</button>
          <button onClick={() => setPage('trend')} className="p-3 bg-red-600 rounded-lg">🔥 Trends</button>
          <button onClick={() => setPage('post')} className="p-3 bg-yellow-600 rounded-lg">✨ Posts</button>
          <button onClick={() => setPage('keyword')} className="p-3 bg-green-600 rounded-lg">🏷️ Tags</button>
          <button onClick={() => setPage('influencer')} className="p-3 bg-cyan-600 rounded-lg">👥 Influencers</button>
        </div>

        {page === 'dashboard' && <div className="text-center py-20"><p className="text-gray-400">Click a button above to start</p></div>}

        {page === 'idea' && (
          <div className="space-y-4">
            <input value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="Niche" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <input value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="Audience" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('idea')} disabled={loading} className="w-full p-3 bg-purple-600 rounded-lg font-bold">{loading ? 'Wait...' : 'Generate'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}

        {page === 'trend' && (
          <div className="space-y-4">
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white">
              <option value="">Select Industry</option>
              <option value="Tech">Tech</option>
              <option value="Fashion">Fashion</option>
            </select>
            <button onClick={() => generate('trend')} disabled={loading} className="w-full p-3 bg-red-600 rounded-lg font-bold">{loading ? 'Wait...' : 'Analyze'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}

        {page === 'post' && (
          <div className="space-y-4">
            <select value={contentType} onChange={(e) => setContentType(e.target.value)} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white">
              <option value="">Content Type</option>
              <option value="Educational">Educational</option>
              <option value="Fun">Fun</option>
            </select>
            <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white">
              <option value="">Tone</option>
              <option value="Pro">Professional</option>
              <option value="Casual">Casual</option>
            </select>
            <button onClick={() => generate('post')} disabled={loading} className="w-full p-3 bg-yellow-600 rounded-lg font-bold">{loading ? 'Wait...' : 'Create'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}

        {page === 'keyword' && (
          <div className="space-y-4">
            <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Topic" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white">
              <option value="">Platform</option>
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
            </select>
            <button onClick={() => generate('keyword')} disabled={loading} className="w-full p-3 bg-green-600 rounded-lg font-bold">{loading ? 'Wait...' : 'Generate'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}

        {page === 'influencer' && (
          <div className="space-y-4">
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <select value={range} onChange={(e) => setRange(e.target.value)} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white">
              <option value="">Range</option>
              <option value="Nano">Nano</option>
              <option value="Micro">Micro</option>
              <option value="Macro">Macro</option>
            </select>
            <button onClick={() => generate('influencer')} disabled={loading} className="w-full p-3 bg-cyan-600 rounded-lg font-bold">{loading ? 'Wait...' : 'Find'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaAIAgent;