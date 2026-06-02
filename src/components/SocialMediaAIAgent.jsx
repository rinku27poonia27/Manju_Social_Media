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
      output = `🎯 Content Ideas for ${niche}:\n\n1. Behind-the-scenes in ${niche} industry\n2. ${niche} tips & tricks tutorial\n3. How to start in ${niche}\n4. Latest ${niche} trends 2024\n5. ${niche} Q&A with audience\n\nTarget: ${audience || 'Your audience'}`;
    } 
    else if (type === 'trend' && industry) {
      output = `🔥 Trending in ${industry}:\n\n1. #${industry}Trends\n2. #${industry}Growth\n3. #${industry}Innovation\n4. #${industry}2024\n5. #${industry}Expert\n\nHow to use: Post about ${industry} trends to get more views!`;
    } 
    else if (type === 'post' && contentType && tone) {
      const posts = {
        'Educational-Professional': `"Learn these ${contentType.toLowerCase()} basics that changed my life. Here are 5 proven steps:\n\n1. Start with fundamentals\n2. Practice daily\n3. Learn from experts\n4. Track your progress\n5. Share your journey\n\nWhat's your #1 ${contentType.toLowerCase()} challenge? 🤔"`,
        'Educational-Casual': `"Yo! Just learned something cool about ${contentType.toLowerCase()}. Here's the deal:\n\n• It's easier than you think\n• Anyone can learn it\n• Start small, go big\n• Have fun with it!\n\nWanna try? 👇"`,
        'Fun-Professional': `"${contentType} doesn't have to be boring! Here's the fun side:\n\n✓ Play around with it\n✓ Experiment freely\n✓ Enjoy the process\n✓ Share wins with friends\n\nWhat's your fun ${contentType.toLowerCase()} moment? 🎯"`,
        'Fun-Casual': `"OMG ${contentType} is so fun! 🎉\n\n- Try this crazy hack\n- Watch what happens\n- Share with friends\n- Laugh together\n\nTag someone who needs this 👇"`,
        'Motivational-Professional': `"Your ${contentType.toLowerCase()} journey is unique. Remember:\n\n✨ Progress > Perfection\n✨ Every step counts\n✨ You can do this\n✨ Believe in yourself\n\nWhat's your ${contentType.toLowerCase()} goal? Let's go! 💪"`,
        'Motivational-Casual': `"You got this! 🚀\n\n${contentType} is your superpower. Don't give up!\n\n- You're closer than you think\n- Every attempt matters\n- I believe in you\n- Go crush it!\n\nLet's goooo 🔥"`,
      };

      const key = `${contentType}-${tone}`;
      output = `✨ Generated Post (${contentType} - ${tone}):\n\n${posts[key] || posts['Educational-Professional']}\n\nEngagement Score: 8.5/10\nBest time to post: 7-9 PM`;
    } 
    else if (type === 'keyword' && topic && platform) {
      output = `🏷️ Keywords for "${topic}" on ${platform}:\n\nTop Keywords:\n• ${topic} tips\n• ${topic} tutorial\n• how to ${topic}\n• best ${topic}\n• ${topic} 2024\n\nHashtags:\n#${topic}\n#${topic}Tips\n#${topic}Growth\n#${topic}Beginner\n#${topic}Expert\n\nCaption Idea:\n"Master ${topic} in 5 easy steps! 👇 Save this post!"`;
    } 
    else if (type === 'influencer' && category && range) {
      output = `👥 ${category} Influencers (${range}):\n\n🌟 Top Picks:\n• @creator_${category.toLowerCase()}_1\n• @expert_${category.toLowerCase()}_pro  \n• @${category.toLowerCase()}_influencer\n\nFollower Range: ${range}\nEngagement: 8-15%\nAudience Quality: High\n\nTip: DM them with collaboration ideas!`;
    } 
    else {
      output = '⚠️ Please fill in all fields above!';
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
            <input value={tone} onChange={(e) => setTone(e.target.value)} placeholder="e.g., Professional, Casual" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
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
            <input value={range} onChange={(e) => setRange(e.target.value)} placeholder="e.g., Nano, Micro, Macro" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white" />
            <button onClick={() => generate('influencer')} disabled={loading} className="w-full p-3 bg-cyan-600 rounded-lg font-bold hover:bg-cyan-700">{loading ? 'Finding...' : 'Find Influencers'}</button>
            {result && <div className="p-4 bg-white/10 rounded-lg border border-white/20"><pre className="text-gray-300 whitespace-pre-wrap">{result}</pre></div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaAIAgent;