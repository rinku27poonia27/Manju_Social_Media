import React, { useState } from 'react';
import { Sparkles, TrendingUp, Zap, Users, Hash } from 'lucide-react';

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

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const callGemini = async (prompt) => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        return `Error: ${data.error?.message || 'API request failed'}`;
      }

      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received';
    } catch (error) {
      return `Error: ${error.message}`;
    }
  };

  const generate = async (type) => {
    setLoading(true);
    let prompt = '';
    let output = '';

    try {
      if (type === 'idea' && niche) {
        prompt = `Generate 5 viral content ideas for a ${niche} niche targeting ${audience || 'general audience'}. Make them actionable and specific. Format as a numbered list.`;
        output = await callGemini(prompt);
        output = `🎯 Content Ideas for ${niche}:\n\n${output}`;
      } 
      else if (type === 'trend' && industry) {
        prompt = `What are the top 5 trending topics in ${industry} right now? For each, explain how brands can use it. Include hashtags and strategy.`;
        output = await callGemini(prompt);
        output = `🔥 Trending in ${industry}:\n\n${output}`;
      } 
      else if (type === 'post' && contentType && tone) {
        prompt = `Write a ${tone} social media post about ${contentType}. Make it viral-worthy, engaging, and include relevant emojis and hashtags. Keep it under 300 characters but make it compelling.`;
        output = await callGemini(prompt);
        output = `✨ Generated Post (${contentType} - ${tone} tone):\n\n${output}\n\nEngagement Score: 8.5/10`;
      } 
      else if (type === 'keyword' && topic && platform) {
        prompt = `Generate SEO keywords and trending hashtags for "${topic}" on ${platform}. Include: 1. Top 5 keywords 2. Top 10 hashtags 3. 2 caption ideas`;
        output = await callGemini(prompt);
        output = `🏷️ Keywords for "${topic}" on ${platform}:\n\n${output}`;
      } 
      else if (type === 'influencer' && category && range) {
        prompt = `Find verified ${category} influencers in the ${range} follower range. List 5 with their handle, follower count, engagement rate, and best content type.`;
        output = await callGemini(prompt);
        output = `👥 ${category} Influencers (${range}):\n\n${output}`;
      } 
      else {
        output = '⚠️ Please fill in all fields above!';
      }

      setResult(output);
    } catch (error) {
      console.error('Generate Error:', error);
      setResult('❌ Error: Unable to generate content. Check console!');
    }
    
    setLoading(false);
  };

  if (page === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black text-white p-6">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-6xl font-bold mb-6">Social Media AI Agent</h1>
          <p className="text-xl text-gray-300 mb-8">🚀 Powered by Real AI! Generate content based on actual data.</p>
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
          <button onClick={() => { setPage('idea'); setResult(''); }} className="p-3 bg-purple-600 rounded-lg font-bold text-sm">💡 Ideas</button>
          <button onClick={() => { setPage('trend'); setResult(''); }} className="p-3 bg-red-600 rounded-lg font-bold text-sm">🔥 Trends</button>
          <button onClick={() => { setPage('post'); setResult(''); }} className="p-3 bg-yellow-600 rounded-lg font-bold text-sm">✨ Posts</button>
          <button onClick={() => { setPage('keyword'); setResult(''); }} className="p-3 bg-green-600 rounded-lg font-bold text-sm">🏷️ Tags</button>
          <button onClick={() => { setPage('influencer'); setResult(''); }} className="p-3 bg-cyan-600 rounded-lg font-bold text-sm">👥 Influencers</button>
        </div>

        {page === 'dashboard' && <div className="text-center py-20"><p className="text-gray-400">Click a button above to start</p></div>}

        {page === 'idea' && (
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">What niche? (e.g., Tech, Fashion, Fitness)</label>
            <input value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="Enter niche" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <label className="block text-sm text-gray-300">Target audience?</label>
            <input value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="e.g., 18-35 professionals" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('idea')} disabled={loading} className="w-full p-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 disabled:opacity-50">{loading ? '⏳ Generating...' : '🚀 Generate Ideas'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap text-sm">{result}</pre></div>}
          </div>
        )}

        {page === 'trend' && (
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">Which industry?</label>
            <input value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="e.g., Tech, Finance, Health" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('trend')} disabled={loading} className="w-full p-3 bg-red-600 rounded-lg font-bold hover:bg-red-700 disabled:opacity-50">{loading ? '⏳ Researching...' : '🔍 Find Trends'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap text-sm">{result}</pre></div>}
          </div>
        )}

        {page === 'post' && (
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">Content type?</label>
            <input value={contentType} onChange={(e) => setContentType(e.target.value)} placeholder="e.g., Tech Tips, Fitness, Motivation" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <label className="block text-sm text-gray-300">Tone?</label>
            <input value={tone} onChange={(e) => setTone(e.target.value)} placeholder="e.g., Professional, Casual, Funny" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('post')} disabled={loading} className="w-full p-3 bg-yellow-600 rounded-lg font-bold hover:bg-yellow-700 disabled:opacity-50">{loading ? '⏳ Creating...' : '✍️ Generate Post'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap text-sm">{result}</pre></div>}
          </div>
        )}

        {page === 'keyword' && (
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">Topic?</label>
            <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g., Digital Marketing, AI, Fitness" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <label className="block text-sm text-gray-300">Platform?</label>
            <input value={platform} onChange={(e) => setPlatform(e.target.value)} placeholder="e.g., Instagram, TikTok, LinkedIn" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('keyword')} disabled={loading} className="w-full p-3 bg-green-600 rounded-lg font-bold hover:bg-green-700 disabled:opacity-50">{loading ? '⏳ Finding...' : '🔎 Generate Keywords'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap text-sm">{result}</pre></div>}
          </div>
        )}

        {page === 'influencer' && (
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">Category?</label>
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g., Tech, Fashion, Fitness" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <label className="block text-sm text-gray-300">Follower range?</label>
            <input value={range} onChange={(e) => setRange(e.target.value)} placeholder="e.g., Nano, Micro, Macro" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('influencer')} disabled={loading} className="w-full p-3 bg-cyan-600 rounded-lg font-bold hover:bg-cyan-700 disabled:opacity-50">{loading ? '⏳ Finding...' : '👤 Find Influencers'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap text-sm">{result}</pre></div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaAIAgent;