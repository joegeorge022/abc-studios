"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Users,
  RefreshCw,
  Send,
  Smile,
  Clock,
  User,
  UserCheck,
  Shield,
  X
} from 'lucide-react';
import { fetchLiveStreamsByGame, convertYouTubeStreamToComponentStream } from '@/utils/youtube';

type Stream = {
  id: string;
  title: string;
  game: string;
  viewers: number;
  streamer: string;
  thumbnailUrl: string;
  videoUrl: string;
};

type ChatMessage = {
  id: string;
  user: string;
  userType: 'admin' | 'moderator' | 'user' | 'system' | 'you';
  message: string;
  timestamp: string;
  color?: string;
};

type ChatUser = {
  name: string;
  type: 'admin' | 'moderator' | 'user' | 'you';
  color: string;
  isOnline: boolean;
};

const fallbackVideos = {
  "Valorant": "https://www.youtube.com/embed/52s56rB-0Wo?autoplay=0",
  "Fortnite": "https://www.youtube.com/embed/NTXD_aIJcO4?autoplay=0",
  "League of Legends": "https://www.youtube.com/embed/bJ5ClftUcBI?autoplay=0",
  "Call of Duty Warzone": "https://www.youtube.com/embed/h5EbYQbpEIs?autoplay=0", 
  "Rocket League": "https://www.youtube.com/embed/KQk2xpvRUNA?autoplay=0",
  "Overwatch": "https://www.youtube.com/embed/blKzPs4JDOk?autoplay=0"
};

const defaultStreams: Stream[] = [
  {
    id: "valorant-1",
    title: "GX vs. ZER - Game Changers EMEA 2025 Stage 1",
    game: "Valorant",
    viewers: 45678,
    streamer: "VALORANT Champions Tour",
    thumbnailUrl: "/images/esports/game1.jpg", 
    videoUrl: fallbackVideos["Valorant"]
  },
  {
    id: "fortnite-1",
    title: "Fortnite Live Event! (Operation Skyfire Aftermath)",
    game: "Fortnite",
    viewers: 32456,
    streamer: "Epic Games",
    thumbnailUrl: "/images/esports/game2.jpg",
    videoUrl: fallbackVideos["Fortnite"]
  },
  {
    id: "lol-1",
    title: "LIVE | MPL LATAM Season 3 MLBB | Swiss Stage - Day 1",
    game: "League of Legends",
    viewers: 67890,
    streamer: "Riot Games",
    thumbnailUrl: "/images/esports/game3.jpg",
    videoUrl: fallbackVideos["League of Legends"]
  },
  {
    id: "cod-1",
    title: "Call of Duty League Championship - Day 2",
    game: "Call of Duty Warzone",
    viewers: 28945,
    streamer: "Call of Duty League",
    thumbnailUrl: "/images/esports/game4.jpg",
    videoUrl: fallbackVideos["Call of Duty Warzone"]
  },
  {
    id: "rocket-1",
    title: "RLCS World Championship - European Finals",
    game: "Rocket League",
    viewers: 19876,
    streamer: "Rocket League Esports",
    thumbnailUrl: "/images/esports/game5.jpg",
    videoUrl: fallbackVideos["Rocket League"]
  },
  {
    id: "overwatch-1",
    title: "Overwatch League 2025 - Seoul Dynasty vs. San Francisco Shock",
    game: "Overwatch",
    viewers: 23789,
    streamer: "Overwatch League",
    thumbnailUrl: "/images/esports/game6.jpg",
    videoUrl: fallbackVideos["Overwatch"]
  }
];

const gamesToFetch = [
  { name: "Valorant", default: defaultStreams.find(s => s.game === "Valorant")! },
  { name: "Fortnite", default: defaultStreams.find(s => s.game === "Fortnite")! },
  { name: "League of Legends", default: defaultStreams.find(s => s.game === "League of Legends")! },
  { name: "Call of Duty Warzone", default: defaultStreams.find(s => s.game === "Call of Duty Warzone")! },
  { name: "Rocket League", default: defaultStreams.find(s => s.game === "Rocket League")! },
  { name: "Overwatch", default: defaultStreams.find(s => s.game === "Overwatch")! }
];

const generateId = () => Math.random().toString(36).substring(2, 15);

const emojiOptions = ['👍', '❤️', '😂', '😮', '😢', '👏', '🔥', '🎮', '🏆', '⚡'];

const colorPalette = [
  '#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', 
  '#1abc9c', '#d35400', '#34495e', '#16a085', '#c0392b',
  '#27ae60', '#8e44ad', '#2980b9', '#f1c40f', '#e67e22'
];

const getRandomColor = () => {
  return colorPalette[Math.floor(Math.random() * colorPalette.length)];
};

const getConsistentColor = (username: string) => {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colorPalette[Math.abs(hash) % colorPalette.length];
};

const getInitials = (name: string) => {
  if (!name) return '';
  const words = name.split(' ');
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

const getUserTypeBaseColor = (userType: ChatMessage['userType']) => {
  switch (userType) {
    case 'admin': return '#4299e1';
    case 'moderator': return '#48bb78';
    case 'system': return '#e53e3e';
    case 'you': return '#805ad5';
    default: return '#718096';
  }
};

export default function VideoStream() {
  const [featuredStreams, setFeaturedStreams] = useState<Stream[]>(defaultStreams);
  const [activeStream, setActiveStream] = useState<Stream>(defaultStreams[0]);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiLimitReached, setApiLimitReached] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { 
      id: generateId(),
      user: "TournamentAdmin",
      userType: "admin",
      message: "Welcome to the ABC Studios live stream! The next match starts in 5 minutes.",
      timestamp: "12:45 PM",
      color: getUserTypeBaseColor('admin')
    },
    { 
      id: generateId(),
      user: "GameFan22",
      userType: "user",
      message: "So excited for this matchup! Team Alpha has been on fire lately.",
      timestamp: "12:47 PM",
      color: getConsistentColor("GameFan22")
    },
    { 
      id: generateId(),
      user: "ProAnalyst",
      userType: "moderator",
      message: "Keep an eye on the mid-lane matchup, that's where this game will be decided.",
      timestamp: "12:49 PM",
      color: getUserTypeBaseColor('moderator')
    },
    { 
      id: generateId(),
      user: "ESportsFan",
      userType: "user",
      message: "Is there a bracket challenge for this tournament?",
      timestamp: "12:52 PM",
      color: getConsistentColor("ESportsFan")
    },
    { 
      id: generateId(),
      user: "TournamentAdmin",
      userType: "admin",
      message: "Yes! Visit our website to participate in the bracket challenge.",
      timestamp: "12:53 PM",
      color: getUserTypeBaseColor('admin')
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatTab, setChatTab] = useState<'chat' | 'users'>('chat');
  const [onlineUsers, setOnlineUsers] = useState<ChatUser[]>([
    { name: "TournamentAdmin", type: "admin", color: getUserTypeBaseColor('admin'), isOnline: true },
    { name: "ProAnalyst", type: "moderator", color: getUserTypeBaseColor('moderator'), isOnline: true },
    { name: "GameFan22", type: "user", color: getConsistentColor("GameFan22"), isOnline: true },
    { name: "ESportsFan", type: "user", color: getConsistentColor("ESportsFan"), isOnline: true },
    { name: "GamingPro", type: "user", color: getConsistentColor("GamingPro"), isOnline: false },
    { name: "You", type: "you", color: getUserTypeBaseColor('you'), isOnline: true },
  ]);
  
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const fetchLiveStreams = async () => {
    try {
      setFeaturedStreams(defaultStreams);
      
      if (apiLimitReached) {
        setError(null);
        return;
      }
      
      setIsLoading(true);
      setError(null);
      
      try {
        const streamPromises = gamesToFetch.map(async (game) => {
          try {
            const response = await fetchLiveStreamsByGame(game.name);
            
            if (response.streams.length > 0) {
              const stream = convertYouTubeStreamToComponentStream(
                response.streams[0], 
                game.name, 
                game.default.thumbnailUrl
              );
              return stream;
            } else {
              return {
                ...game.default,
                viewers: game.default.viewers + Math.floor(Math.random() * 1000) - 500
              };
            }
          } catch (err) {
            console.error(`Error fetching streams for ${game.name}:`, err);
            return {
              ...game.default,
              viewers: game.default.viewers + Math.floor(Math.random() * 1000) - 500
            };
          }
        });
        
        const fetchedStreams = await Promise.all(streamPromises);
        
        setFeaturedStreams(fetchedStreams);
        
        const allFallbacks = fetchedStreams.every(stream => 
          defaultStreams.some(ds => ds.id === stream.id)
        );
        
        if (allFallbacks) {
          setApiLimitReached(true);
          
          const systemMessage: ChatMessage = {
            id: generateId(),
            user: "System",
            userType: "system",
            message: "Using featured content. Live data unavailable.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            color: getUserTypeBaseColor('system')
          };
          
          setChatMessages(prev => [...prev, systemMessage]);
        } else {
          const newMessage: ChatMessage = {
            id: generateId(),
            user: "TournamentAdmin",
            userType: "admin",
            message: "Live streams have been updated with the latest content!",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            color: getUserTypeBaseColor('admin')
          };
          
          setChatMessages(prev => [...prev, newMessage]);
        }
      } catch (err) {
        console.error('Error in main fetch function:', err);
        setApiLimitReached(true);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleStreamChange = (stream: Stream) => {
    setActiveStream(stream);
  };

  const simulateTypingIndicator = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    setIsTyping(true);
    
    const randomUserIndex = Math.floor(Math.random() * onlineUsers.length);
    const typingUser = onlineUsers[randomUserIndex];
    
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, Math.random() * 3000 + 1000);
  };
  
  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const newChatMessage: ChatMessage = {
      id: generateId(),
      user: "You",
      userType: "you",
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      color: getUserTypeBaseColor('you')
    };
    
    setChatMessages([...chatMessages, newChatMessage]);
    setNewMessage("");
    
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
    
    if (chatContainerRef.current) {
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 50);
    }
    
    if (Math.random() > 0.5) {
      setTimeout(() => {
        simulateTypingIndicator();
        
        setTimeout(() => {
          const responses = [
            "Nice observation! What do you think about the team comps?",
            "Great point! The game is really heating up now.",
            "I agree with you on that one!",
            "Let's see how the next few minutes play out!",
            "That's an interesting strategy they're using."
          ];
          
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          const respondingUser = onlineUsers.find(u => u.type === "admin" || u.type === "moderator");
          
          if (respondingUser) {
            const responseMessage: ChatMessage = {
              id: generateId(),
              user: respondingUser.name,
              userType: respondingUser.type,
              message: randomResponse,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              color: respondingUser.color
            };
            
            setChatMessages(prev => [...prev, responseMessage]);
          }
        }, Math.random() * 2000 + 1000);
      }, Math.random() * 1000 + 500); 
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
    
    if (e.target.value.length > 0 && Math.random() > 0.7) {
      simulateTypingIndicator();
    }
  };
  
  const addEmoji = (emoji: string) => {
    setNewMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
  };
  
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, chatTab]);
  
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);
  
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    const updateVideoHeight = () => {
      if (videoContainerRef.current) {
        const height = videoContainerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--video-height', `${height}px`);
      }
    };
    
    updateVideoHeight();
    window.addEventListener('resize', updateVideoHeight);
    return () => window.removeEventListener('resize', updateVideoHeight);
  }, []);
  
  const getUserTypeIcon = (userType: ChatMessage['userType']) => {
    switch (userType) {
      case 'admin':
        return <Shield size={12} className="text-blue-400" />;
      case 'moderator':
        return <UserCheck size={12} className="text-green-400" />;
      case 'system':
        return <Clock size={12} className="text-red-400" />;
      default:
        return <User size={12} className="text-gray-400" />;
    }
  };
  
  const getUserTypeColor = (userType: ChatMessage['userType']) => {
    switch (userType) {
      case 'admin':
        return 'text-blue-400';
      case 'moderator':
        return 'text-green-400';
      case 'system':
        return 'text-red-400';
      case 'you':
        return 'text-purple-400';
      default:
        return 'text-gray-300';
    }
  };

  const renderUserAvatar = (name: string, color: string, size = 'w-10 h-10') => {
    const initials = getInitials(name);
    
    return (
      <div 
        className={`${size} rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold`} 
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
    );
  };
  
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Live Esports Streams</h2>
          <p className="text-gray-300">
            Watch tournaments, gameplay, and exclusive ABC Studios esports content
          </p>
          <div className="flex items-center justify-center relative mt-4">
            <button 
              className={`inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800/50 px-4 py-2 rounded-lg text-white transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              onClick={fetchLiveStreams}
              disabled={isLoading}
            >
              <RefreshCw size={16} className={`${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Refreshing...' : 'Refresh Streams'}
            </button>
            {apiLimitReached && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-amber-400 text-xs flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                Using featured content
              </span>
            )}
          </div>
          {error && (
            <div className="mt-2 p-2 bg-red-900/20 border border-red-500/30 rounded text-red-300 text-sm">
              <p className="flex items-start">
                <span className="mr-2 mt-0.5">⚠️</span>
                <span>{error}</span>
              </p>
              <p className="text-xs mt-1 ml-6 text-red-300/70">Default streams are being displayed instead.</p>
            </div>
          )}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black rounded-xl overflow-hidden shadow-2xl"
              ref={videoContainerRef}
            >
              <div className="relative aspect-video w-full">
                <iframe
                  src={`${activeStream.videoUrl}${isMuted ? '&mute=1' : ''}`}
                  title={activeStream.title}
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-bold text-lg md:text-xl truncate">{activeStream.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm flex items-center gap-2">
                        <span className="bg-red-600 text-white px-2 py-0.5 text-xs rounded">LIVE</span>
                        {activeStream.game} • {activeStream.streamer}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-white hover:text-blue-400 transition-colors"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                      </button>
                      <button 
                        onClick={() => {
                          if (!videoContainerRef.current) return;
                          
                          if (!isFullScreen) {
                            if (videoContainerRef.current.requestFullscreen) {
                              videoContainerRef.current.requestFullscreen();
                            }
                          } else {
                            if (document.exitFullscreen) {
                              document.exitFullscreen();
                            }
                          }
                        }}
                        className="text-white hover:text-blue-400 transition-colors"
                        aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
                      >
                        {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-850 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users size={18} className="text-blue-400 mr-2" />
                    <span className="text-white">{activeStream.viewers.toLocaleString()} viewers</span>
                  </div>
                  <button
                    onClick={() => setShowChat(!showChat)}
                    className="md:hidden flex items-center gap-1 text-gray-300 hover:text-white transition-colors px-3 py-1 rounded-md border border-gray-700"
                  >
                    <MessageSquare size={16} />
                    <span>{showChat ? "Hide" : "Show"} Chat</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className={`md:block ${showChat ? 'block mt-4 md:mt-0' : 'hidden'}`}>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col"
              style={{ 
                height: "calc(100%)",
                maxHeight: "calc(var(--video-height, 100%) - 20px)"
              }}
            >
              <div className="p-1 bg-gray-750 border-b border-gray-700 flex-shrink-0">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-medium text-base">Live Chat</h3>
                  <div className="flex items-center gap-2">
                    <div className="text-gray-400 text-sm">{onlineUsers.filter(u => u.isOnline).length} online</div>
                    <button 
                      onClick={() => setShowChat(false)}
                      className="md:hidden text-gray-400 hover:text-white p-1"
                      aria-label="Close chat"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="flex border-b border-gray-700 -mx-3 px-1">
                  <button 
                    className={`px-3 py-0.5 text-sm ${chatTab === 'chat' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                    onClick={() => setChatTab('chat')}
                  >
                    Chat
                  </button>
                  <button 
                    className={`px-3 py-0.5 text-sm ${chatTab === 'users' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                    onClick={() => setChatTab('users')}
                  >
                    Viewers
                  </button>
                </div>
              </div>
              
              <div 
                ref={chatContainerRef}
                className="flex-1 p-3 overflow-y-auto scrollbar-thin"
                style={{ 
                  height: "calc(100% - 66px)", 
                  overflowY: "auto",
                  maxHeight: "calc(100% - 66px)" 
                }}
              >
                {chatTab === 'chat' ? (
                  <div className="space-y-3">
                    {chatMessages.map((msg) => (
                      <motion.div 
                        key={msg.id} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group"
                      >
                        <div className="flex items-start gap-3">
                          {renderUserAvatar(msg.user, msg.color || getUserTypeBaseColor(msg.userType))}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span className={`font-semibold text-sm ${getUserTypeColor(msg.userType)}`}>
                                {msg.user}
                              </span>
                              <span className="ml-1">{getUserTypeIcon(msg.userType)}</span>
                              <span className="text-gray-500 text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                {msg.timestamp}
                              </span>
                            </div>
                            <p className="text-gray-200 text-sm break-words leading-tight">{msg.message}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    <AnimatePresence>
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 text-gray-400 text-sm"
                        >
                          <div className="flex space-x-1 ml-10">
                            <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                            <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                            <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                          </div>
                          <span className="text-sm">Someone is typing...</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {onlineUsers.map((user, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700"
                      >
                        <div className="relative">
                          {renderUserAvatar(user.name, user.color, 'w-10 h-10')}
                          {user.isOnline && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className={`font-medium text-sm ${getUserTypeColor(user.type)}`}>
                              {user.name}
                            </span>
                            {getUserTypeIcon(user.type)}
                          </div>
                          <p className="text-gray-400 text-sm">
                            {user.isOnline ? "Online" : "Offline"}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              
              {chatTab === 'chat' && (
                <form onSubmit={handleMessageSubmit} className="relative p-2 border-t border-gray-700 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 relative">
                      <input
                        ref={messageInputRef}
                        type="text"
                        value={newMessage}
                        onChange={handleInputChange}
                        placeholder="Send a message..."
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-3 pr-8 py-1.5 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                      >
                        <Smile size={18} />
                      </button>
                      
                      {showEmojiPicker && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute bottom-full right-0 mb-1 p-2 bg-gray-700 rounded-lg border border-gray-600 shadow-lg"
                        >
                          <div className="grid grid-cols-5 gap-1">
                            {emojiOptions.map((emoji, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => addEmoji(emoji)}
                                className="text-base hover:bg-gray-600 w-8 h-8 flex items-center justify-center rounded"
                              >
                                {emoji}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={!newMessage.trim()}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800/50 disabled:text-blue-100/50 text-white rounded-lg p-1.5 transition-colors"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4 text-white">Live Streams</h3>
          
          <div className="relative">
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
                {featuredStreams.map((stream) => (
                  <motion.button
                    key={stream.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: featuredStreams.indexOf(stream) * 0.05 }}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleStreamChange(stream)}
                    className={`rounded-lg overflow-hidden relative flex-shrink-0 ${
                      activeStream.id === stream.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    style={{ width: "280px", maxWidth: "90vw" }}
                  >
                    <div className="relative aspect-video">
                      <img 
                        src={stream.thumbnailUrl} 
                        alt={stream.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4">
                        <span className="bg-red-600 text-white px-2 py-0.5 text-xs rounded w-min">LIVE</span>
                        <h4 className="text-white text-base font-medium line-clamp-2 mt-2">{stream.title}</h4>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-gray-300 text-sm">{stream.game}</p>
                          <p className="text-gray-300 text-sm">{stream.viewers.toLocaleString()} viewers</p>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
          </div>
        </div>
        
        <div className="md:hidden mt-4 flex justify-center">
          {!showChat && (
            <button
              onClick={() => setShowChat(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <MessageSquare size={16} />
              <span>Open Chat</span>
            </button>
          )}
        </div>
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.1);
          border-radius: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(55, 65, 81, 0.5);
          border-radius: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(55, 65, 81, 0.8);
        }
        
        @media (max-width: 640px) {
          .scrollbar-thin {
            max-height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
} 