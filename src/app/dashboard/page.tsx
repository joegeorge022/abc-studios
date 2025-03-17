"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { openUserProfile } = useClerk();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              {isLoaded && isSignedIn
                ? `Welcome Back, ${user?.firstName || 'User'}`
                : 'Welcome to Your Dashboard'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl">Your personalized ABC Studios dashboard</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* My Events */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">My Events</h2>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  2 Upcoming
                </span>
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="font-medium">Digital Marketing Workshop</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">June 15, 2023 • 2:00 PM</p>
                </div>
                <div>
                  <h3 className="font-medium">Esports Tournament Finals</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">June 22, 2023 • 5:00 PM</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link 
                  href="/events" 
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium inline-flex items-center"
                >
                  View all events
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Recent Projects */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent Projects</h2>
                <span className="text-green-600 dark:text-green-400 text-sm font-medium bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                  3 Active
                </span>
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="font-medium">Website Redesign</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">In Progress • 60% Complete</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="font-medium">Social Media Campaign</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">In Progress • 45% Complete</p>
                </div>
                <div>
                  <h3 className="font-medium">Product Video</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">In Review • 90% Complete</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link 
                  href="/projects" 
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium inline-flex items-center"
                >
                  View all projects
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Account Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Account Information</h2>
              </div>
              <div className="space-y-3">
                {isLoaded && isSignedIn ? (
                  <>
                    <div className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 w-24">Name:</span>
                      <span className="font-medium">{user?.firstName} {user?.lastName}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 w-24">Email:</span>
                      <span className="font-medium">{user?.primaryEmailAddress?.emailAddress}</span>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-2 text-gray-500">
                    Loading user data...
                  </div>
                )}
              </div>
              <div className="mt-6">
                <button 
                  onClick={() => openUserProfile()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md inline-flex items-center justify-center font-medium transition-colors"
                >
                  Account Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 