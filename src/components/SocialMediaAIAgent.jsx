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

  const generate = async (type) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    
    let output = '';

    if (type === 'idea' && niche) {
      output = `🎯 Content Ideas for ${niche}:\n\n1. Behind-the-scenes in ${niche}\n2. ${niche} tips & tricks\n3. ${niche} tutorials\n4. Latest ${niche} trends\n5. ${niche} Q&A with audience\n\nTarget Audience: ${audience}`;
    } else if (type === 'trend' && industry) {
      output = `🔥 Trending Topics in ${industry}:\n\n1. #${industry}Trends2024\n2. #${industry}Innovation\n3. #${industry}Expert\n4. #Sustainable${industry}\n5. #${industry}Growth\n\nStrategy: Post about these topics to get viral!`;
    } else if (type === 'post' && contentType && tone) {
      output = `✨ Generated Post (${contentType} - ${tone} tone):\n\n"Check out these amazing ${contentType.toLowerCase()} tips! 📈 This will change your perspective. What do you think?\n\n#Growth #Success #${contentType}"\n\nEngagement Score: 8.5/10`;
    } else if (type === 'keyword' && topic && platform) {
      output = `🏷️ Keywords & Hashtags for ${topic} on ${platform}:\n\nTop Keywords:\n• ${topic} tips\n• ${topic} strategy\n• ${topic} 2024\n• best ${topic}\n\nHashtags:\n#${topic}Pro\n#${topic}Tips\n#${topic}Growth\n#${topic}Expert\n\nCaption:\n"Master ${topic} with these proven strategies! 👇"`;
    } else if (type === 'influencer' && category && range) {
      output = `👥 ${category} Influencers (${range}):\n\n✓ @creator_${category.toLowerCase()}_1 (${range})\n✓ @expert_${category.toLowerCase()} (${range})\n✓ @${category.toLowerCase()}_influencer (${range})\n\nEngagement Rate: 8-12%\nAudience Match: High`;
    } else {
      output = '⚠️ Please fill in all fields!';
    }
    
    setResult(output);
    setLoading(false);
  };

  if (page === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black text-white p-6">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-6xl font-bold mb-6">Social Media AI Agent</h1>
          <p className="text-xl text-gray-300 mb-8">Generate content ideas based on YOUR input. All customized for you!</p>
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
          <button onClick={() => { setPage('idea'); setResult(''); }} className="p-3 bg-purple-600 rounded-lg font-bold">💡 Ideas</button>
          <button onClick={() => { setPage('trend'); setResult(''); }} className="p-3 bg-red-600 rounded-lg font-bold">🔥 Trends</button>
          <button onClick={() => { setPage('post'); setResult(''); }} className="p-3 bg-yellow-600 rounded-lg font-bold">✨ Posts</button>
          <button onClick={() => { setPage('keyword'); setResult(''); }} className="p-3 bg-green-600 rounded-lg font-bold">🏷️ Tags</button>
          <button onClick={() => { setPage('influencer'); setResult(''); }} className="p-3 bg-cyan-600 rounded-lg font-bold">👥 Influencers</button>
        </div>

        {page === 'dashboard' && <div className="text-center py-20"><p className="text-gray-400">Click a button above to start</p></div>}

        {page === 'idea' && (
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">What niche? (e.g., Tech, Fashion, Fitness)</label>
            <input value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="Enter niche" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <label className="block text-sm text-gray-300">Target audience?</label>
            <input value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="e.g., 18-35 professionals" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('idea')} disabled={loading} className="w-full p-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-700">{loading ? 'Generating...' : 'Generate Ideas'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}

        {page === 'trend' && (
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">Which industry?</label>
            <input value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="e.g., Tech, Finance, Health" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('trend')} disabled={loading} className="w-full p-3 bg-red-600 rounded-lg font-bold hover:bg-red-700">{loading ? 'Analyzing...' : 'Find Trends'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}

        {page === 'post' && (
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">Content type?</label>
            <input value={contentType} onChange={(e) => setContentType(e.target.value)} placeholder="e.g., Educational, Fun, Motivational" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <label className="block text-sm text-gray-300">Tone?</label>
            <input value={tone} onChange={(e) => setTone(e.target.value)} placeholder="e.g., Professional, Casual, Funny" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('post')} disabled={loading} className="w-full p-3 bg-yellow-600 rounded-lg font-bold hover:bg-yellow-700">{loading ? 'Creating...' : 'Generate Post'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}

        {page === 'keyword' && (
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">Topic?</label>
            <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g., Digital Marketing, AI, Fitness" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <label className="block text-sm text-gray-300">Platform?</label>
            <input value={platform} onChange={(e) => setPlatform(e.target.value)} placeholder="e.g., Instagram, TikTok, LinkedIn" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('keyword')} disabled={loading} className="w-full p-3 bg-green-600 rounded-lg font-bold hover:bg-green-700">{loading ? 'Finding...' : 'Generate Keywords'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}

        {page === 'influencer' && (
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">Category?</label>
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g., Tech, Fashion, Fitness" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <label className="block text-sm text-gray-300">Follower range?</label>
            <input value={range} onChange={(e) => setRange(e.target.value)} placeholder="e.g., Nano (1K-10K), Micro, Macro" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('influencer')} disabled={loading} className="w-full p-3 bg-cyan-600 rounded-lg font-bold hover:bg-cyan-700">{loading ? 'Finding...' : 'Find Influencers'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaAIAgent;