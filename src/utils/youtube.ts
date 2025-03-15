export interface YouTubeStream {
  id: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  videoId: string;
  viewCount: number;
}

export interface GameStreamResponse {
  streams: YouTubeStream[];
  nextPageToken?: string;
}

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '';

export async function fetchLiveStreamsByGame(gameName: string, pageToken?: string): Promise<GameStreamResponse> {
  try {
    const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
    searchUrl.searchParams.append('part', 'snippet');
    searchUrl.searchParams.append('q', `${gameName} gameplay live`);
    searchUrl.searchParams.append('eventType', 'live');
    searchUrl.searchParams.append('type', 'video');
    searchUrl.searchParams.append('maxResults', '10');
    searchUrl.searchParams.append('key', YOUTUBE_API_KEY);
    
    if (pageToken) {
      searchUrl.searchParams.append('pageToken', pageToken);
    }

    const searchResponse = await fetch(searchUrl.toString());
    
    if (!searchResponse.ok) {
      throw new Error(`YouTube API search error: ${searchResponse.statusText}`);
    }
    
    const searchData = await searchResponse.json();
    
    if (!searchData.items || searchData.items.length === 0) {
      return { streams: [] };
    }
    
    const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');
    
    const videoUrl = new URL('https://www.googleapis.com/youtube/v3/videos');
    videoUrl.searchParams.append('part', 'statistics,snippet');
    videoUrl.searchParams.append('id', videoIds);
    videoUrl.searchParams.append('key', YOUTUBE_API_KEY);
    
    const videoResponse = await fetch(videoUrl.toString());
    
    if (!videoResponse.ok) {
      throw new Error(`YouTube API videos error: ${videoResponse.statusText}`);
    }
    
    const videoData = await videoResponse.json();
    
    const streams: YouTubeStream[] = videoData.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      thumbnailUrl: item.snippet.thumbnails.high.url,
      videoId: item.id,
      viewCount: parseInt(item.statistics.viewCount, 10) || 0
    }));
    
    return {
      streams,
      nextPageToken: searchData.nextPageToken
    };
  } catch (error) {
    console.error('Error fetching YouTube streams:', error);
    return { streams: [] };
  }
}

export function convertYouTubeStreamToComponentStream(youtubeStream: YouTubeStream, game: string, originalThumbnail: string) {
  return {
    id: youtubeStream.id,
    title: youtubeStream.title,
    game,
    viewers: youtubeStream.viewCount,
    streamer: youtubeStream.channelTitle,
    thumbnailUrl: originalThumbnail,
    videoUrl: `https://www.youtube.com/embed/${youtubeStream.videoId}?autoplay=0`,
  };
} 