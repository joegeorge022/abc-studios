"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Trophy, 
  Calendar, 
  Clock, 
  DollarSign, 
  Users, 
  Award, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp,
  CheckCircle,
  AlertCircle,
  User,
  Clock3
} from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import { submitEsportsRegistration } from "../../utils/supabase";
import VideoStream from '@/components/esports/VideoStream';

type EsportsEvent = {
  id: string;
  title: string;
  game: string;
  date: string;
  time: string;
  registrationFee: number;
  prizePool: string;
  maxParticipants: number;
  currentParticipants: number;
  description: string;
  rules: string[];
  registrationOpen: boolean;
  image: string;
};

const esportsEvents: EsportsEvent[] = [
  {
    id: "event1",
    title: "ABC Studios Summer Showdown",
    game: "Valorant",
    date: "July 15-16, 2024",
    time: "12:00 PM - 8:00 PM EDT",
    registrationFee: 25,
    prizePool: "$5,000",
    maxParticipants: 32,
    currentParticipants: 18,
    description: "Join our flagship summer tournament for intense competition and great prizes. This 5v5 team-based tournament features a double-elimination format.",
    rules: [
      "Teams must have 5 players and up to 2 substitutes",
      "Players must be at least 16 years old",
      "All matches will be best-of-three",
      "Finals will be best-of-five",
      "Standard competitive maps and settings"
    ],
    registrationOpen: true,
    image: "/images/esports/game1.jpg"
  },
  {
    id: "event2",
    title: "Fortnite Frenzy Cup",
    game: "Fortnite",
    date: "August 5, 2024",
    time: "2:00 PM - 9:00 PM EDT",
    registrationFee: 15,
    prizePool: "$3,000",
    maxParticipants: 100,
    currentParticipants: 76,
    description: "Battle it out in our Fortnite Frenzy Cup! This solo competition will test your building, shooting, and survival skills across multiple rounds of intense play.",
    rules: [
      "Solo competition",
      "Points-based system across 6 matches",
      "Participants must play all scheduled matches",
      "Custom matchmaking codes will be provided to registered players",
      "Standard competitive settings will be used",
      "Players must be in the designated Discord server during the event"
    ],
    registrationOpen: true,
    image: "/images/esports/game2.jpg"
  },
  {
    id: "event3",
    title: "League of Legends Championship",
    game: "League of Legends",
    date: "September 10-12, 2024",
    time: "4:00 PM - 10:00 PM EDT",
    registrationFee: 50,
    prizePool: "$10,000",
    maxParticipants: 16,
    currentParticipants: 14,
    description: "Our flagship League of Legends tournament featuring teams from across the region. Three days of intense competition culminating in an epic grand final with professional casting and analysis.",
    rules: [
      "5v5 team competition",
      "Single elimination bracket with best-of-three matches",
      "Finals will be best-of-five",
      "Teams must have at least one substitute player",
      "Standard tournament draft mode",
      "Teams must check in 45 minutes before their scheduled match"
    ],
    registrationOpen: true,
    image: "/images/esports/game3.jpg"
  },
  {
    id: "event4",
    title: "Call of Duty: Warzone Battle Royale",
    game: "Call of Duty: Warzone",
    date: "October 8, 2024",
    time: "6:00 PM - 11:00 PM EDT",
    registrationFee: 10,
    prizePool: "$1,500",
    maxParticipants: 40,
    currentParticipants: 22,
    description: "Drop in and prove you're the last squad standing in our Warzone tournament. Teams of three will compete across multiple rounds for points and prizes.",
    rules: [
      "Trios format (3-player teams)",
      "Point-based scoring system",
      "Custom lobby matches",
      "Multiple rounds with cumulative scoring",
      "Finals feature the top 10 teams"
    ],
    registrationOpen: true,
    image: "/images/esports/game4.jpg"
  },
  {
    id: "event5",
    title: "Rocket League Championship Series",
    game: "Rocket League",
    date: "November 5-7, 2024",
    time: "3:00 PM - 9:00 PM EST",
    registrationFee: 20,
    prizePool: "$4,000",
    maxParticipants: 32,
    currentParticipants: 18,
    description: "Join our Rocket League Championship Series and show off your car control, aerial skills, and teamwork. Teams of 3 will battle through a group stage and playoffs.",
    rules: [
      "3v3 team format",
      "Group stage followed by single elimination playoffs",
      "Teams must have at least one substitute player",
      "Standard competitive settings",
      "All players must use official tournament client",
      "Double elimination bracket for playoffs"
    ],
    registrationOpen: true,
    image: "/images/esports/game5.jpg"
  },
  {
    id: "event6",
    title: "Overwatch Invitational",
    game: "Overwatch",
    date: "December 12-13, 2024",
    time: "1:00 PM - 8:00 PM EST",
    registrationFee: 30,
    prizePool: "$6,000",
    maxParticipants: 24,
    currentParticipants: 14,
    description: "Compete in our seasonal Overwatch Invitational tournament! Teams of 6 will battle across multiple maps and game modes to determine the ultimate champion.",
    rules: [
      "6v6 team competition",
      "Round robin group stage with top teams advancing to playoffs",
      "All official competitive maps in rotation",
      "Each match includes Control, Hybrid, Escort, and Assault maps",
      "Teams must maintain consistent rosters throughout the tournament",
      "Best-of-five format for semifinals and finals"
    ],
    registrationOpen: true,
    image: "/images/esports/game6.jpg"
  }
];

export default function EsportsPage() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [registrationEvent, setRegistrationEvent] = useState<EsportsEvent | null>(null);
  
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    phone: "",
    participants: ["", "", "", "", ""],
    agreeToRules: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleEventDetails = (eventId: string) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(eventId);
    }
  };

  const openRegistrationForm = (event: EsportsEvent) => {
    setRegistrationEvent(event);
    setTimeout(() => {
      document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    
    if (type === "checkbox") {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleParticipantChange = (index: number, value: string) => {
    const newParticipants = [...formData.participants];
    newParticipants[index] = value;
    setFormData(prev => ({ ...prev, participants: newParticipants }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    if (!registrationEvent) {
      setError("No event selected");
      setIsSubmitting(false);
      return;
    }
    
    const filledParticipants = formData.participants.filter(p => p.trim() !== "");
    if (filledParticipants.length < 2) {
      setError("Please add at least 2 team members");
      setIsSubmitting(false);
      return;
    }
    
    try {
      const registrationData = {
        event_id: registrationEvent.id,
        event_title: registrationEvent.title,
        team_name: formData.teamName,
        captain_name: formData.captainName,
        captain_email: formData.email,
        captain_phone: formData.phone,
        participants: formData.participants.filter(p => p.trim() !== ""),
        payment_status: "pending"
      };
      
      const { error } = await submitEsportsRegistration(registrationData);
      
      if (error) throw new Error(error.message);
      
      setIsSubmitted(true);
      setFormData({
        teamName: "",
        captainName: "",
        email: "",
        phone: "",
        participants: ["", "", "", ""],
        agreeToRules: false
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
        setRegistrationEvent(null);
        document.getElementById("matchmaking")?.scrollIntoView({ behavior: "smooth" });
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const matches = [
    { id: 1, team1: "Phoenix Gaming", team2: "Dragon Esports", date: "July 15, 2024", time: "12:30 PM EDT", status: "Scheduled" },
    { id: 2, team1: "Nebula Squad", team2: "Titan Force", date: "July 15, 2024", time: "2:00 PM EDT", status: "Scheduled" },
    { id: 3, team1: "Victory Vanguard", team2: "Elite Enforcers", date: "July 15, 2024", time: "3:30 PM EDT", status: "Scheduled" },
    { id: 4, team1: "Spectral Gaming", team2: "Luminary Legends", date: "July 15, 2024", time: "5:00 PM EDT", status: "Scheduled" }
  ];
  
  const leaderboard = [
    { rank: 1, team: "Phoenix Gaming", wins: 3, losses: 0, points: 9 },
    { rank: 2, team: "Nebula Squad", wins: 2, losses: 1, points: 6 },
    { rank: 3, team: "Victory Vanguard", wins: 2, losses: 1, points: 6 },
    { rank: 4, team: "Spectral Gaming", wins: 1, losses: 2, points: 3 },
    { rank: 5, team: "Dragon Esports", wins: 1, losses: 2, points: 3 },
    { rank: 6, team: "Titan Force", wins: 1, losses: 2, points: 3 },
    { rank: 7, team: "Elite Enforcers", wins: 1, losses: 2, points: 3 },
    { rank: 8, team: "Luminary Legends", wins: 1, losses: 2, points: 3 }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/esports-hero.jpg"
            alt="ABC Esports"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">ABC Esports</h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8 px-2">
              Compete in our premier gaming tournaments and showcase your skills
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
              <a 
                href="#upcoming-events" 
                className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors w-full sm:w-auto"
              >
                View Tournaments
              </a>
              <a 
                href="#matchmaking" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors w-full sm:w-auto"
              >
                Match Schedules
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Streaming Section */}
      <VideoStream />

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Upcoming Tournaments
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400"
            >
              Register for our upcoming events and compete for glory and prizes
            </motion.p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {esportsEvents.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-transparent hover:border-blue-500 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={`${event.game} tournament - ${event.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                      <div>
                        <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">{event.game}</span>
                        <h3 className="text-xl font-bold text-white mt-2">{event.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                          {event.game}
                        </span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {event.currentParticipants}/{event.maxParticipants} Teams
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{event.time.split(' - ')[0]}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center space-x-2">
                          <DollarSign size={16} className="text-green-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">${event.registrationFee}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award size={16} className="text-yellow-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{event.prizePool}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between">
                      {event.registrationOpen ? (
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all flex-1 mr-2 hover:shadow-lg hover:scale-105 active:scale-95 duration-300"
                          onClick={() => openRegistrationForm(event)}
                        >
                          Register Now
                        </button>
                      ) : (
                        <span className="bg-gray-400 text-white px-4 py-2 rounded-lg flex-1 text-center mr-2">
                          Registration Closed
                        </span>
                      )}
                      <button
                        onClick={() => toggleEventDetails(event.id)}
                        className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        {expandedEvent === event.id ? (
                          <ChevronUp size={20} className="text-gray-500 dark:text-gray-400" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {expandedEvent === event.id && (
                    <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="py-4">
                        <h4 className="text-lg font-semibold mb-2">Event Description</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          {event.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Tournament Rules</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                          {event.rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                          ))}
                        </ul>
                      </div>

                      {event.registrationOpen && (
                        <div className="mt-6 text-center">
                          <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                            onClick={() => openRegistrationForm(event)}
                          >
                            Register for This Tournament
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {esportsEvents.slice(3, 6).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-transparent hover:border-blue-500 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={`${event.game} tournament - ${event.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                      <div>
                        <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">{event.game}</span>
                        <h3 className="text-xl font-bold text-white mt-2">{event.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                          {event.game}
                        </span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {event.currentParticipants}/{event.maxParticipants} Teams
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{event.time.split(' - ')[0]}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center space-x-2">
                          <DollarSign size={16} className="text-green-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">${event.registrationFee}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award size={16} className="text-yellow-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{event.prizePool}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between">
                      {event.registrationOpen ? (
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all flex-1 mr-2 hover:shadow-lg hover:scale-105 active:scale-95 duration-300"
                          onClick={() => openRegistrationForm(event)}
                        >
                          Register Now
                        </button>
                      ) : (
                        <span className="bg-gray-400 text-white px-4 py-2 rounded-lg flex-1 text-center mr-2">
                          Registration Closed
                        </span>
                      )}
                      <button
                        onClick={() => toggleEventDetails(event.id)}
                        className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        {expandedEvent === event.id ? (
                          <ChevronUp size={20} className="text-gray-500 dark:text-gray-400" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {expandedEvent === event.id && (
                    <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="py-4">
                        <h4 className="text-lg font-semibold mb-2">Event Description</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          {event.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Tournament Rules</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                          {event.rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                          ))}
                        </ul>
                      </div>

                      {event.registrationOpen && (
                        <div className="mt-6 text-center">
                          <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                            onClick={() => openRegistrationForm(event)}
                          >
                            Register for This Tournament
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      {registrationEvent && (
        <section id="registration-form" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md"
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">
                  Register for: {registrationEvent.title}
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-green-100 dark:bg-green-900/30 p-4 sm:p-6 rounded-lg text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="text-green-600 dark:text-green-400" size={48} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
                      Registration Successful!
                    </h3>
                    <p className="text-green-600 dark:text-green-300 mb-4">
                      You have successfully registered for {registrationEvent.title}. We'll send you confirmation and further details via email.
                    </p>
                    <p className="text-green-600 dark:text-green-300">
                      You'll be redirected to the matchmaking page shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    {error && (
                      <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg mb-6 flex items-start">
                        <AlertCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
                        <p>{error}</p>
                      </div>
                    )}
                    <div>
                      <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Team Name*
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="captainName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Team Captain Name*
                      </label>
                      <input
                        type="text"
                        id="captainName"
                        name="captainName"
                        value={formData.captainName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Team Members*
                      </label>
                      <div className="space-y-3">
                        {formData.participants.map((participant, index) => (
                          <input
                            key={index}
                            type="text"
                            value={participant}
                            onChange={(e) => handleParticipantChange(index, e.target.value)}
                            placeholder={`Team Member ${index + 1}${index === 0 ? ' (Captain)' : ''}`}
                            required={index < 3}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Minimum 3 players required. 5 maximum.
                      </p>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-5">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="agreeToRules"
                          name="agreeToRules"
                          checked={formData.agreeToRules}
                          onChange={handleInputChange}
                          required
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="agreeToRules" className="text-sm text-gray-700 dark:text-gray-300">
                          I agree to the tournament rules and acknowledge that the registration fee of ${registrationEvent.registrationFee} will be charged upon confirmation. I also confirm that all team members meet the eligibility requirements.
                        </label>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                      <button
                        type="button"
                        onClick={() => setRegistrationEvent(null)}
                        className="px-4 sm:px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors w-full sm:w-auto ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? "Processing..." : "Complete Registration"}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Matchmaking Section */}
      <section id="matchmaking" className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Match Schedules</h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
                View upcoming matches and connect with your opponents to coordinate game details.
              </p>

              {matches.length > 0 ? (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md mb-10">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="py-3 px-4 text-left font-semibold">Match</th>
                          <th className="py-3 px-4 text-left font-semibold">Teams</th>
                          <th className="py-3 px-4 text-left font-semibold">Date & Time</th>
                          <th className="py-3 px-4 text-left font-semibold">Status</th>
                          <th className="py-3 px-4 text-left font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {matches.map((match, index) => (
                          <motion.tr 
                            key={match.id} 
                            className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.1 * index,
                              type: "spring",
                              stiffness: 100
                            }}
                          >
                            <td className="py-4 px-4">#{match.id}</td>
                            <td className="py-4 px-4">
                              <div className="flex items-center mb-2">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                                  <Image 
                                    src={`/images/esports/team${match.id}.jpg`}
                                    alt={match.team1}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="font-medium">{match.team1}</div>
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 my-1 text-center">vs</div>
                              <div className="flex items-center mt-2">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                                  <Image 
                                    src={match.id <= 4 ? `/images/esports/team${match.id === 1 ? 2 : match.id === 2 ? 1 : match.id === 3 ? 4 : 3}.jpg` : "/images/esports/game1.jpg"}
                                    alt={match.team2}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="font-medium">{match.team2}</div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div>{match.date}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{match.time}</div>
                            </td>
                            <td className="py-4 px-4">
                              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                {match.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <button className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                                <MessageSquare size={16} className="mr-1" />
                                Contact
                              </button>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-lg font-medium mb-2">No matches scheduled yet</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Register for an event to see your match schedule here.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Leaderboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Tournament Leaderboard</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="py-3 px-4 text-left font-semibold">Rank</th>
                        <th className="py-3 px-4 text-left font-semibold">Team</th>
                        <th className="py-3 px-4 text-center font-semibold">W</th>
                        <th className="py-3 px-4 text-center font-semibold">L</th>
                        <th className="py-3 px-4 text-center font-semibold">Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {leaderboard.map((team, index) => (
                        <motion.tr 
                          key={team.rank} 
                          className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.05 * index,
                            type: "spring",
                            stiffness: 100
                          }}
                        >
                          <td className="py-4 px-4 font-medium">{team.rank}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center">
                              <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                                <Image 
                                  src={team.rank <= 4 ? `/images/esports/team${team.rank}.jpg` : "/images/esports/game1.jpg"}
                                  alt={team.team}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <span className="font-medium">{team.team}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">{team.wins}</td>
                          <td className="py-4 px-4 text-center">{team.losses}</td>
                          <td className="py-4 px-4 text-center font-semibold">{team.points}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Compete?</h2>
            <p className="text-xl mb-8">
              Join our tournaments, connect with other players, and showcase your gaming skills on our platform.
            </p>
            <a 
              href="#upcoming-events" 
              className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-full inline-flex items-center font-medium text-lg transition-colors"
            >
              View Tournaments
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
} 